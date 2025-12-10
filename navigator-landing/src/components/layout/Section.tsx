import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'gray';
}

export const Section = ({ children, className, id, variant = 'default' }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        {
          'bg-white dark:bg-gray-900': variant === 'default',
          'bg-gray-50 dark:bg-gray-800': variant === 'gray',
        },
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
