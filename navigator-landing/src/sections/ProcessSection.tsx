import { motion } from 'framer-motion';
import { Heart, Sparkles, Brain, Building, TrendingUp, FileText } from 'lucide-react';
import { content } from '@/data/content';
import { Section } from '@/components/layout/Section';

const iconMap = {
  Heart,
  Sparkles,
  Brain,
  Building,
  TrendingUp,
  FileText,
};

export const ProcessSection = () => {
  const { process } = content;

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {process.title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-16">
          {process.intro}
        </p>

        <div className="space-y-8">
          {process.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      Шаг {step.id}
                    </span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-4">{process.conditions.title}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {process.conditions.items.map((item, i) => (
              <div key={i} className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
