import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { content } from '@/data/content';

export const FinalCTASection = () => {
  const { title, text, offer, benefits, disclaimer, cta, trustSignals } = content.finalCta;

  return (
    <Section background="gradient" className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h2>

          <div className="space-y-4 mb-8">
            {text.map((paragraph, index) => (
              <p key={index} className="text-lg md:text-xl text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-8">
            <p className="text-xl font-semibold mb-6 text-gray-900">{offer}</p>

            <ul className="space-y-3 mb-8 text-left max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-800">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-gray-600 italic mb-8">{disclaimer}</p>

            <Button size="lg" href={cta.href}>
              {cta.text}
            </Button>

            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-600">
              {trustSignals.map((signal, index) => (
                <span key={index} className="flex items-center gap-1">
                  <span className="text-primary-600">✓</span> {signal}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
