import { motion } from 'framer-motion';
import { Heart, Star, Brain, TreePine, TrendingUp, FileText, Lock, Clock, Target } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { content } from '@/data/content';

const iconMap = { Heart, Star, Brain, TreePine, TrendingUp, FileText, Lock, Clock, Target };

export const SolutionSection = () => {
  const { title, subtitle, what, how, whyWorks, advantages } = content.solution;

  return (
    <Section id="solution" background="gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-primary-600 font-semibold">{subtitle}</p>
        </motion.div>

        {/* Что это */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">{what.title}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {what.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Как работает */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">{how.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {how.steps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <span className="text-3xl font-bold text-gray-300">{step.number}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-lg font-medium text-gray-700">{how.result}</p>
        </div>

        {/* Почему работает */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Почему это работает</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {whyWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="font-bold text-xl mb-3 text-primary-600">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Преимущества */}
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-50 p-6 rounded-xl"
              >
                <Icon className="w-8 h-8 text-primary-600 mb-4" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
