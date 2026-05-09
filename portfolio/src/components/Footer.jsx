import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: '微信公众号', href: '#' },
  { label: '商务合作', href: 'mailto:business@example.com' }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-heading">智</span>
            </div>
            <div>
              <span className="text-xl font-heading font-semibold text-white">智创科技</span>
              <div className="text-slate-500 text-xs">企业级软件解决方案专家</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-500 text-sm flex items-center gap-1"
          >
            © 2024 智创科技 All rights reserved. 
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
