import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { content } from '@/data/content';

export const ProblemSection = () => {
  const { title, subtitle, description, symptoms, consequences, image } = content.problem;

  return (
    <Section id="problem" background="white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Симптомы */}
          <div className="space-y-6">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="font-bold text-lg mb-3 text-gray-900">{symptom.category}:</h3>
                <ul className="space-y-2">
                  {symptom.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Изображение */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>

        {/* Подзаголовок и описание */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{subtitle}</h3>
          <p className="text-lg text-gray-700 mb-8">{description}</p>
        </motion.div>

        {/* Последствия */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent-50 p-8 rounded-2xl max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
            {consequences.title}
          </h3>
          <ul className="space-y-3">
            {consequences.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-800">
                <span className="text-accent-600 font-bold mt-1">→</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};
