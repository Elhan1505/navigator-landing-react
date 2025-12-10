import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { content } from '@/data/content';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const PricingSection = () => {
  const { pricing } = content;

  return (
    <Section id="tariff" variant="gray">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {pricing.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
            {pricing.subtitle}
          </p>

          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border-4 border-primary-500">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-primary-600 mb-2">
                {pricing.price}₽
              </div>
              <div className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                {pricing.priceDescription}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {pricing.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: feature }} />
                </div>
              ))}
            </div>

            <Button size="lg" className="w-full" href={pricing.cta.href}>
              {pricing.cta.text}
            </Button>
            <p className="text-sm text-gray-500 text-center mt-4">
              {pricing.cta.note}
            </p>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">{pricing.referral.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {pricing.referral.description}
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
