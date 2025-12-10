import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className
}: ButtonProps) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    {
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
      'px-4 py-2 text-sm': size === 'sm',
    },
    {
      'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500': variant === 'primary',
      'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500': variant === 'secondary',
      'border-2 border-gray-300 text-gray-900 hover:border-primary-600 hover:text-primary-600 focus:ring-primary-500': variant === 'outline',
    },
    className
  );

  const MotionComponent = motion.a;

  if (href) {
    return (
      <MotionComponent
        href={href}
        className={baseStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
};
