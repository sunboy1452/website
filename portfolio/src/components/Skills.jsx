import { motion } from 'framer-motion';
import { Monitor, Server, Database, Cloud } from 'lucide-react';
import { skillCategories, levelLabels, levelColors } from '../data/skills';

const iconMap = {
  Monitor,
  Server,
  Database,
  Cloud
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-indigo-400 font-medium text-sm mb-2 block">技术栈</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3">
            专业技能与经验
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            持续学习新技术，专注于构建高质量、可维护的企业级应用
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.icon];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <IconComponent size={20} style={{ color: category.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.03 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-slate-300 text-sm">{skill.name}</span>
                        <span
                          className="px-1.5 py-0.5 rounded text-xs font-medium"
                          style={{
                            backgroundColor: `${levelColors[skill.level]}20`,
                            color: levelColors[skill.level]
                          }}
                        >
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                      <span className="text-slate-500 text-xs">{skill.years}年</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
