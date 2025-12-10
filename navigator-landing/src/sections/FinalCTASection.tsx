import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const FinalCTASection = () => {
  const { finalCta } = content;

  return (
    <Section variant="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          {finalCta.title}
        </h2>

        <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl mb-8">
          <h3 className="text-2xl font-bold mb-4">{finalCta.motivation.title}</h3>
          <ul className="space-y-2 mb-6">
            {finalCta.motivation.items.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300">— {item}</li>
            ))}
          </ul>
          <p className="text-lg font-semibold whitespace-pre-line">{finalCta.motivation.question}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-6">{finalCta.simpleStart.title}</h3>
          <div className="space-y-4">
            {finalCta.simpleStart.steps.map((step, i) => (
              <div key={i} className="text-lg text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </div>
          <p className="text-lg mt-6">{finalCta.simpleStart.result}</p>
        </div>

        <p className="text-lg mb-8 whitespace-pre-line">{finalCta.urgency}</p>

        <Button size="lg" href={finalCta.cta.href}>
          {finalCta.cta.text}
        </Button>

        <div className="mt-6 space-y-2">
          {finalCta.cta.notes.map((note, i) => (
            <p key={i} className="text-sm text-gray-600 dark:text-gray-400">{note}</p>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
