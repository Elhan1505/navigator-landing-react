import { content } from '@/data/content';

export const Footer = () => {
  const { tagline, copyright, email } = content.footer;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center">
          <p className="text-lg mb-4">{tagline}</p>
          <p className="text-sm text-gray-400 mb-2">{copyright}</p>
          <p className="text-sm text-gray-400">
            <a href={`mailto:${email}`} className="hover:text-primary-400 transition-colors">
              {email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
