import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Service, ServiceCategory } from '@/types/services';
import { CalendarCheck, Phone, MessageCircle } from 'lucide-react';

interface ServiceHeroProps {
  service: Service;
  category?: ServiceCategory;
  onRandevuClick?: () => void;
}

export function ServiceHero({ service, category, onRandevuClick }: ServiceHeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
          priority
        />
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Link
              href={`/hizmetler#${service.category}`}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              {category?.name}
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground">{service.fullDescription}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="text-sm text-muted-foreground">Süre</div>
            <div className="font-semibold">{service.duration}</div>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="text-sm text-muted-foreground">Fiyat</div>
            <div className="font-semibold">{service.price}</div>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Özellikler</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button size="lg" className="w-full sm:w-auto" onClick={onRandevuClick}>
            <CalendarCheck className="h-4 w-4 mr-2" />
            Randevu Al
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            asChild
          >
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            asChild
          >
            <a href="tel:+905000000000">
              <Phone className="h-4 w-4 mr-2" />
              Telefon Et
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
} 