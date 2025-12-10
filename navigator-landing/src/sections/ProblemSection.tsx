import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { Section } from '@/components/layout/Section';

export const ProblemSection = () => {
  const { problem } = content;

  return (
    <Section variant="gray">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            {problem.title}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12">
            {problem.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {Object.values(problem.symptoms).map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">{problem.conclusion.title}</h3>
            <ul className="space-y-3 mb-6">
              {problem.conclusion.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-red-500">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold text-center">{problem.conclusion.cta}</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
