import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface LazySectionProps {
  children: ReactNode;
  /** Minimum height reserved before content mounts to prevent layout shift */
  minHeight?: string;
  rootMargin?: string;
  className?: string;
}

/**
 * Mounts its children only once it enters (or is near) the viewport.
 * Useful for deferring heavy below-the-fold sections.
 */
export default function LazySection({
  children,
  minHeight = '200px',
  rootMargin = '300px',
  className,
}: LazySectionProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin });

  return (
    <div ref={ref} className={className} style={{ minHeight: inView ? undefined : minHeight }}>
      {inView ? children : null}
    </div>
  );
}
