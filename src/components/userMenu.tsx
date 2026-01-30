// src/components/UserMenu.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext'; 
export default function UserMenu() {
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="h-5 w-5 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-700" />
    );
  }

  if (!isAuthenticated) {
    return (
      <Link
        href="/login"
        className="hidden text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white md:block"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        
      </Link>
    );
  }

  return (
    <div className="relative hidden md:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white dark:bg-white dark:text-zinc-900"
      >
        {user?.firstName?.charAt(0).toUpperCase()}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute right-0 top-full z-50 mt-2 w-56 border border-zinc-200 bg-white py-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div className="border-b border-zinc-100 px-4 py-3 dark:border-zinc-800">
              <p className="text-sm font-medium text-zinc-900 dark:text-white">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-zinc-500">{user?.email}</p>
            </div>
            
            <div className="py-2">
              <Link
                href="/account"
                className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                My Account
              </Link>
              <Link
                href="/orders"
                className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Orders
              </Link>
              <Link
                href="/wishlist"
                className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Wishlist
              </Link>
            </div>
            
            <div className="border-t border-zinc-100 py-2 dark:border-zinc-800">
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
              >
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}