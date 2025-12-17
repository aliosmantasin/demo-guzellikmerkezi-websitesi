'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ { question: string; answer: string; }
interface FAQSectionProps { faqs: FAQ[]; }

export function FAQSection({ faqs }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Sıkça Sorulan Sorular</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div key={index} className="border border-muted rounded-lg overflow-hidden">
              <button
                className="flex w-full items-center justify-between p-4 font-medium hover:bg-muted transition-colors"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {faq.question}
                <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>
              {open && (
                <div className="p-4 text-muted-foreground bg-muted/20">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
} 