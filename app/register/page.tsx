// src/app/register/page.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { useAuth } from '@/src/context/AuthContext';
import { useToast } from '@/src/components/ui/Toast';
import Button from '@/src/components/ui/Button';
import Alert from '@/src/components/ui/Alert';

const registerSchema = z
  .object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { register: registerUser } = useAuth();
  const { showToast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      const { confirmPassword, ...registerData } = data;
      await registerUser(registerData);
      showToast('success', 'Account created successfully! Welcome to Atelier.');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Registration failed';
      setError(errorMessage);
      showToast('error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      {/* Header */}
      <nav className="border-b border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6">
          <Link
            href="/"
            className="text-2xl font-light uppercase tracking-[0.3em] text-zinc-900 dark:text-white"
          >
            Atelier
          </Link>
        </div>
      </nav>

      {/* Register Form */}
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center">
            <h1 className="text-3xl font-light uppercase tracking-wide text-zinc-900 dark:text-white">
              Create Account
            </h1>
            <p className="mt-3 text-sm text-zinc-500">
              Join us and discover the latest collections
            </p>
          </div>

          {error && (
            <div className="mt-8">
              <Alert type="error" message={error} onClose={() => setError(null)} />
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  First Name
                </label>
                <input
                  type="text"
                  {...register('firstName')}
                  className="mt-2 h-14 w-full border border-zinc-300 bg-transparent px-4 text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:text-white dark:focus:border-white"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register('lastName')}
                  className="mt-2 h-14 w-full border border-zinc-300 bg-transparent px-4 text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:text-white dark:focus:border-white"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Email
              </label>
              <input
                type="email"
                {...register('email')}
                className="mt-2 h-14 w-full border border-zinc-300 bg-transparent px-4 text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:text-white dark:focus:border-white"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Password
              </label>
              <input
                type="password"
                {...register('password')}
                className="mt-2 h-14 w-full border border-zinc-300 bg-transparent px-4 text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:text-white dark:focus:border-white"
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Confirm Password
              </label>
              <input
                type="password"
                {...register('confirmPassword')}
                className="mt-2 h-14 w-full border border-zinc-300 bg-transparent px-4 text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:text-white dark:focus:border-white"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            <Button type="submit" fullWidth size="lg" isLoading={isLoading}>
              Create Account
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}