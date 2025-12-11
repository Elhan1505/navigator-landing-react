import { motion } from 'framer-motion';
import { Lock, Award, Zap } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { content } from '@/data/content';

const iconMap = {
  Lock,
  Award,
  Zap
};

export const HeroSection = () => {
  const { title, subtitle, description, cta, image, trustSignals } = content.hero;

  return (
    <Section id="hero" className="min-h-screen flex items-center" background="gradient">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Левая часть: Текст */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
            {subtitle}
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <Button size="lg" href={cta.primary.href}>
              {cta.primary.text}
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {trustSignals.map((signal, index) => {
              const Icon = iconMap[signal.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Icon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>{signal.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Правая часть: Изображение */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full rounded-2xl shadow-2xl"
            loading="eager"
          />
        </motion.div>
      </div>
    </Section>
  );
};
