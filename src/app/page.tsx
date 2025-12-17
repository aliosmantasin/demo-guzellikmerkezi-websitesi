import { FeaturedServices } from '@/components/sections/featured-services';
import { Hero } from '@/components/sections/hero';
import { References } from '@/components/sections/references';
import { Testimonials } from '@/components/sections/testimonials';
import { SEO } from '@/components/shared/seo';

export default function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <FeaturedServices />
      <References />
      <Testimonials />
    </>
  );
}
