export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  videoUrl?: string;
  videoPosterUrl?: string;
  duration: string;
  price: string;
  category: string;
  benefits: string[];
  process: string[];
  faqs?: { question: string; answer: string }[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'cilt-bakimi',
    name: 'Cilt Bakımı',
    description: 'Profesyonel cilt bakımı ve tedavi hizmetleri',
    image: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/referanssites-folder/referansBeautyCenter/1gorsel.webp'
  },
  {
    id: 'lazer-epilasyon',
    name: 'Lazer Epilasyon',
    description: 'Son teknoloji lazer epilasyon hizmetleri',
    image: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/referanssites-folder/referansBeautyCenter/lazer-epilasyon.webp'
  },
  {
    id: 'medikal-estetik',
    name: 'Medikal Estetik',
    description: 'Uzman doktorlarımızla medikal estetik uygulamaları',
    image: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/referanssites-folder/referansBeautyCenter/1gorsel.webp'
  }
];

export const SERVICES: Record<string, Service> = {
  'hydrafacial': {
    id: 'hydrafacial',
    slug: 'hydrafacial',
    title: 'HydraFacial Bakımı',
    description: 'Cildinizi derinlemesine temizleyen ve nemlendiren 6 aşamalı özel bakım',
    fullDescription: 'HydraFacial, cildinizi derinlemesine temizleyen, nemlendiren ve yenileyen 6 aşamalı özel bir bakım uygulamasıdır. Cilt tipinize özel olarak seçilen serumlarla, cildinizin ihtiyacı olan bakımı almasını sağlar.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
    duration: '45 dk',
    price: '1.200 ₺',
    category: 'cilt-bakimi',
    benefits: [
      'Derinlemesine temizlik',
      'Cilt tonu eşitleme',
      'Nem dengesi sağlama',
      'Gözenek sıkılaştırma',
      'Cilt bariyerini güçlendirme'
    ],
    process: [
      'Cilt analizi ve temizlik',
      'Peeling uygulaması',
      'Vakum ile siyah nokta temizliği',
      'Serum uygulaması',
      'Nemlendirme ve koruma'
    ]
  },
  'lazer-epilasyon': {
    id: 'lazer-epilasyon',
    slug: 'lazer-epilasyon',
    title: 'Lazer Epilasyon',
    description: 'Son teknoloji cihazlarla kalıcı tüy alma işlemi',
    fullDescription: 'Son teknoloji lazer cihazlarımızla, güvenli ve etkili bir şekilde kalıcı tüy alma işlemi uyguluyoruz. Cilt tipinize uygun lazer teknolojisi ile maksimum sonuç almanızı sağlıyoruz.',
    image: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/referanssites-folder/referansBeautyCenter/lazer-epilasyon.webp',
    videoUrl: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/referanssites-folder/referansBeautyCenter/lazerEpilasyonVideo.mp4',
    videoPosterUrl: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/referanssites-folder/referansBeautyCenter/KapakEpilasyonVideo.webp',
    duration: '30-60 dk',
    price: '500 ₺\'den başlayan',
    category: 'lazer-epilasyon',
    benefits: [ 
      'Kalıcı tüy azalması',
      'Hızlı ve etkili sonuç',
      'Tüm cilt tiplerine uygun',
      'Minimum ağrı',
      'Güvenli uygulama'
    ],
    process: [
      'Cilt analizi',
      'Lazer ayarlarının belirlenmesi',
      'Test uygulaması',
      'Lazer epilasyon işlemi',
      'Soğutma ve bakım'
    ],
    faqs: [
      {
        question: 'Antalya Beatty Center\'da lazer epilasyon kaç seans sürer?',
        answer: 'Beatty Center\'da ortalama 6–8 seans lazer epilasyon öneriyoruz. Seans sayısı, uygulama bölgesi, kıl yoğunluğu ve cilt tipinize göre kişiye özel olarak belirlenir.'
      },
      {
        question: 'Beatty Center lazer epilasyon fiyatları ne kadardır?',
        answer: 'Fiyatlarımız uygulama bölgesine ve kampanyalara göre değişmektedir. Güncel Antalya lazer epilasyon fiyat listemiz için randevu formunu doldurabilir veya 0 242 XXX XX XX numaralı hattımızdan bize ulaşabilirsiniz.'
      },
      {
        question: 'Erkekler için lazer epilasyon işlemi güvenli mi?',
        answer: 'Evet. Beatty Center\'da erkek lazer epilasyon uygulamalarında son teknoloji cihazlar kullanıyoruz. Göğüs, sırt, omuz gibi bölgelerde etkili ve güvenli sonuçlar elde ediyoruz.'
      },
      {
        question: 'Buz lazer ile diode lazer arasındaki fark nedir?',
        answer: 'Buz lazer başlıklı cihazlarımız işlem sırasında cildi soğutarak konfor sağlar, diode lazer ise koyu kıl köklerinde yüksek performans sunar. Uzmanlarımız cilt tipinize en uygun teknolojiyi seçer.'
      },
      {
        question: 'Lazer epilasyon sonrası nelere dikkat etmeliyim?',
        answer: 'İşlemden sonra 24 saat sıcak duş, sauna ve solaryumdan kaçınmanızı; yüksek SPF içeren güneş koruyucu kullanmanızı öneriyoruz. Detaylı bakım kılavuzunu seans sonrası ekibimiz size iletir.'
      },
      {
        question: 'Beatty Center\'da lazer epilasyon acıtır mı?',
        answer: 'Soğutma sistemli cihazlarımız sayesinde ağrı minimum seviyededir. Hassas ciltlerde lokal anestezik krem de uygulayabiliyoruz.'
      },
      {
        question: 'Lazer epilasyon tüyleri kalıcı olarak yok eder mi?',
        answer: 'Seanslar tamamlandığında kıl köklerinin %85–95\'i kalıcı olarak yok edilir. Kalan ince tüyler için yılda bir kez idame seansı önerilebilir.'
      },
      {
        question: 'Antalya\'da lazer epilasyon için en uygun mevsim hangisidir?',
        answer: 'Güneşin daha az olduğu kış ve ilkbahar ayları tercih edilse de, Beatty Center\'da yılın her döneminde güvenle lazer epilasyon yaptırabilirsiniz; önemli olan yüksek faktörlü güneş koruyucu kullanmaktır.'
      }
    ]
  }
};

export const FEATURED_SERVICES: Service[] = [
  SERVICES['hydrafacial'],
  SERVICES['lazer-epilasyon'],
  {
    id: 'medikal-cilt-bakimi',
    slug: 'medikal-cilt-bakimi',
    title: 'Medikal Cilt Bakımı',
    description: 'Cilt tipinize özel profesyonel bakım ve tedavi',
    fullDescription: 'Uzman ekibimiz tarafından cilt tipinize özel olarak hazırlanan medikal cilt bakımı uygulamaları ile cildinizin ihtiyacı olan bakımı almasını sağlıyoruz.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9',
    duration: '60 dk',
    price: '800 ₺',
    category: 'cilt-bakimi',
    benefits: [
      'Cilt tipine özel bakım',
      'Profesyonel uygulama',
      'Görünür sonuçlar',
      'Cilt sağlığını koruma',
      'Uzun süreli etki'
    ],
    process: [
      'Cilt analizi',
      'Temizlik ve peeling',
      'Masaj uygulaması',
      'Serum ve maske uygulaması',
      'Nemlendirme ve koruma'
    ]
  }
]; 