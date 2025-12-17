import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, SERVICE_CATEGORIES, ServiceCategory } from '@/constants/services';
import ServiceDetailClient from './components/ServiceDetailClient';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];
  
  if (!service) {
    return {
      title: 'Hizmet Bulunamadı | Beatty Center',
      description: 'Aradığınız hizmet bulunamadı.',
    };
  }

  return {
    title: `${service.title} | Beatty Center`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Beatty Center`,
      description: service.description,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    notFound();
  }

  const category = SERVICE_CATEGORIES.find((c: ServiceCategory) => c.id === service.category);

  return <ServiceDetailClient service={service} category={category} />;
} 