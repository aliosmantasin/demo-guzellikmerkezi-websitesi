import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { ServiceCategory } from '@/types/services';

interface BreadcrumbProps {
  category?: ServiceCategory;
}

export function Breadcrumb({ category }: BreadcrumbProps) {
  return (
    <div className="flex items-center space-x-2 mb-8 text-sm">
      <Link href="/hizmetler" className="text-muted-foreground hover:text-primary transition-colors">
        <ChevronLeft className="h-4 w-4 inline" />
        Hizmetler
      </Link>
      {category && (
        <>
          <span className="text-muted-foreground">/</span>
          <Link 
            href={`/hizmetler#${category.id}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
           
          </Link>
        </>
      )}
    </div>
  );
} 