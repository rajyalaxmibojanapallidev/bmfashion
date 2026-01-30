// src/components/ui/Alert.tsx
interface AlertProps {
  type: 'error' | 'success' | 'warning';
  message: string;
}

export default function Alert({ type, message }: AlertProps) {
  const styles = {
    error: 'bg-red-50 border-red-500 text-red-700',
    success: 'bg-green-50 border-green-500 text-green-700',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-700',
  };

  return (
    <div className={`border-l-4 p-4 mb-4 ${styles[type]}`}>
      <p>{message}</p>
    </div>
  );
}