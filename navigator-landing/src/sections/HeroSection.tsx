import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { content } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';

export const HeroSection = () => {
  const { hero } = content;

  return (
    <Section className="min-h-screen flex items-center pt-20">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
            {hero.badge}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-semibold mb-8">
            {hero.subtitle}
          </p>

          <div className="max-w-3xl mx-auto mb-8 space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {hero.description}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {hero.subdescription}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-8 text-sm text-gray-600 dark:text-gray-400"
          >
            <Lock className="w-4 h-4" />
            <span>{hero.confidentiality}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" href={hero.cta.primary.href}>
              {hero.cta.primary.text}
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              {hero.ctaNote}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
