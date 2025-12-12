import { motion } from 'framer-motion';
import { Check, Lock, Save, Zap, Gift, Clock, Database } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { content } from '@/data/content';

const iconMap = { Lock, Save, Zap, Gift, Clock, Database };

export const PricingSection = () => {
  const { title, price, currency, access, process, result, guarantees, bonuses, cta } = content.pricing;

  return (
    <Section id="pricing" background="white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
        </motion.div>

        {/* Основной тарифный блок */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12 rounded-3xl shadow-2xl mb-12"
        >
          {/* Цена */}
          <div className="text-center mb-8">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
              {price} {currency}
            </div>
            <p className="text-xl text-gray-600">Полный доступ ко всему</p>
          </div>

          {/* Что входит */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-900">Доступ:</h4>
              <ul className="space-y-2">
                {access.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-900">Процесс:</h4>
              <ul className="space-y-2">
                {process.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-900">Результат:</h4>
              <ul className="space-y-2">
                {result.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Гарантии */}
          <div className="bg-white/50 p-6 rounded-2xl mb-8">
            <h4 className="font-bold text-lg mb-4 text-center text-gray-900">Гарантии:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {guarantees.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <Icon className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" href={cta.href}>
              {cta.text}
            </Button>
            <p className="mt-4 text-sm text-gray-600">
              🔒 Безопасная оплата | ⚡ Доступ сразу | 🔐 Полная конфиденциальность
            </p>
          </div>
        </motion.div>

        {/* Бонусы */}
        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => {
            const Icon = iconMap[bonus.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <Icon className="w-8 h-8 text-accent-500 mx-auto mb-3" />
                <h4 className="font-bold mb-2">{bonus.title}</h4>
                <p className="text-sm text-gray-600">{bonus.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
