import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const STATISTICS = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    number: "5,000+",
    label: "Mutlu Müşteri",
    description: "Antalya'da 5 yıldır güven veren hizmet"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    number: "95%",
    label: "Başarı Oranı",
    description: "Lazer epilasyon ve cilt bakımında"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    number: "12+",
    label: "Uzman Ekip",
    description: "Sertifikalı estetisyen ve teknisyen"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    number: "50,000+",
    label: "Başarılı Seans",
    description: "Tamamlanan işlem sayısı"
  }
];

const BEFORE_AFTER = [
  {
    id: '1',
    title: 'Lazer Epilasyon - Bacak',
    before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    after: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15',
    description: '8 seans sonunda %92 kıl azalması'
  },
  {
    id: '2', 
    title: 'HydraFacial - Cilt Bakımı',
    before: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec',
    after: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91',
    description: 'Cilt tonunda belirgin iyileşme'
  },
  {
    id: '3',
    title: 'Erkek Lazer Epilasyon',
    before: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54',
    after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    description: 'Göğüs ve karın bölgesi'
  }
];

const CERTIFICATIONS = [
  {
    title: 'ISO 9001 Kalite Belgesi',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    description: 'Uluslararası kalite standardı'
  },
  {
    title: 'Sağlık Bakanlığı Onayı',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f',
    description: 'Resmi işletme belgesi'
  },
  {
    title: 'Estetisyen Sertifikaları',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    description: 'Uzman personel belgeleri'
  }
];

export function References() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Referanslarımız ve Başarılarımız
          </h2>
          <p className="text-muted-foreground text-lg">
            Antalya'da güzellik ve estetik alanında edindiğimiz deneyim ve başarılarımız
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATISTICS.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        {/* Önce/Sonra Görselleri */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Başarılı Sonuçlarımız</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BEFORE_AFTER.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <Image
                      src={item.before}
                      alt={`${item.title} - Önce`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Önce
                    </div>
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src={item.after}
                      alt={`${item.title} - Sonra`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs">
                      Sonra
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sertifikalar */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Sertifikalarımız</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 