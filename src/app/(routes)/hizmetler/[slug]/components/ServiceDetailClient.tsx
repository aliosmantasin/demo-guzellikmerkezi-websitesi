'use client';
import { useState } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { ServiceHero } from './ServiceHero';
import { ProcessSection } from './ProcessSection';
import { ServiceCTA } from './ServiceCTA';
import { VideoSection } from './VideoSection';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { AppointmentForm } from './AppointmentForm';
import { FAQSection } from './FAQSection';
import { Service, ServiceCategory } from '@/types/services';

interface Props {
  service: Service;
  category?: ServiceCategory;
}

export default function ServiceDetailClient({ service, category }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <Breadcrumb category={category} />
        <ServiceHero service={service} category={category} onRandevuClick={() => setModalOpen(true)} />
        {service.videoUrl && service.videoPosterUrl && (
          <VideoSection videoUrl={service.videoUrl} posterUrl={service.videoPosterUrl} />
        )}
        <ProcessSection process={service.process} />
        {service.faqs && <FAQSection faqs={service.faqs} />}
        <ServiceCTA onRandevuClick={() => setModalOpen(true)} />
        <Sheet open={modalOpen} onOpenChange={setModalOpen}>
          <SheetContent side="right" className="max-w-md w-full">
            <SheetHeader>
              <SheetTitle>Randevu Al</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <AppointmentForm />
            </div>
            <SheetClose asChild>
              <button className="w-full mt-8 text-center text-muted-foreground">Kapat</button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
} 