'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from '@/components/ui/sheet';
import { AppointmentForm } from './AppointmentForm';

interface ServiceCTAProps {
  onRandevuClick?: () => void;
}

export function ServiceCTA({ onRandevuClick }: ServiceCTAProps) {
  // Modal state artık üstte yönetiliyor, burada gerek yok
  return (
    <div className="bg-primary/5 rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Bu hizmet hakkında detaylı bilgi almak ister misiniz?
      </h2>
      <p className="text-muted-foreground mb-6">
        Uzman ekibimiz sorularınızı yanıtlamak için hazır.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="outline" asChild>
          <a href="/iletisim">
            Bize Ulaşın
          </a>
        </Button>
        <Button size="lg" onClick={onRandevuClick}>
          Hemen Randevu Alın
        </Button>
      </div>
    </div>
  );
} 