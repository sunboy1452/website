import { motion } from 'framer-motion';
import { Building2, Users, Award, Clock, FileCheck, Rocket, CheckCircle2, Heart } from 'lucide-react';

const serviceSteps = [
  { icon: FileCheck, title: '需求分析', description: '深入了解企业需求，制定解决方案' },
  { icon: Rocket, title: '方案设计', description: '技术架构设计，报价与周期确认' },
  { icon: Clock, title: '开发实施', description: '敏捷开发，阶段性交付与验收' },
  { icon: CheckCircle2, title: '交付运维', description: '完整交付，持续技术支持' }
];

const advantages = [
  { title: '专业团队', description: '资深技术团队，平均8年以上经验' },
  { title: '品质保障', description: '严格代码评审，确保项目质量' },
  { title: '透明沟通', description: '定期汇报进度，及时响应需求' },
  { title: '售后支持', description: '提供长期维护与技术升级服务' }
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-400 font-medium text-sm mb-2 block">关于我们</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              企业数字化转型的
              <br />
              <span className="text-slate-400">可靠伙伴</span>
            </h2>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              智创科技是一家专注于企业级软件开发的科技公司，致力于为企业提供全面的数字化解决方案。我们的团队由一批经验丰富、技术过硬的专业开发者组成，在园区管理、智能制造、企业官网、数据可视化等领域积累了丰富的项目经验。
            </p>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              我们坚信，好的软件不仅能解决眼前的问题，更能为企业未来发展提供强有力的技术支撑。因此，我们始终站在客户的角度思考问题，力求交付高品质、可扩展、易维护的软件产品。
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <Building2 size={16} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">专业公司</div>
                  <div className="text-slate-500 text-xs">正规资质认证</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Users size={16} className="text-green-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">20+ 团队</div>
                  <div className="text-slate-500 text-xs">专业开发人员</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Award size={16} className="text-purple-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">200+ 项目</div>
                  <div className="text-slate-500 text-xs">成功交付案例</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Clock size={16} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">8+ 年</div>
                  <div className="text-slate-500 text-xs">行业深耕</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-4">服务流程</h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-slate-900/50 rounded-lg p-3 h-full">
                      <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-2">
                        <step.icon size={16} className="text-indigo-400" />
                      </div>
                      <div className="text-white text-sm font-medium mb-0.5">{step.title}</div>
                      <div className="text-slate-500 text-xs">{step.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-3">我们的优势</h3>
              <div className="space-y-3">
                {advantages.map((adv, index) => (
                  <motion.div
                    key={adv.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="text-white font-medium">{adv.title}</span>
                      <span className="text-slate-400"> - {adv.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
