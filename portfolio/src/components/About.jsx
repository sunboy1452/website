import { motion } from 'framer-motion';
import { User, Clock, Award, MessageCircle, FileCheck, Rocket, CheckCircle2 } from 'lucide-react';

const serviceSteps = [
  { icon: MessageCircle, title: '需求沟通', description: '深入了解项目需求、目标和预算' },
  { icon: FileCheck, title: '方案确认', description: '提供技术方案和详细报价' },
  { icon: Rocket, title: '项目执行', description: '敏捷开发，定期汇报进度' },
  { icon: CheckCircle2, title: '交付验收', description: '完整交付，售后技术支持' }
];

const advantages = [
  { title: '快速响应', description: '工作时间内 2 小时内回复' },
  { title: '高质量代码', description: '遵循规范，注重代码可维护性' },
  { title: '透明沟通', description: '定期同步进度，及时反馈问题' },
  { title: '长期支持', description: '交付后提供免费维护期' }
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
            <span className="text-indigo-400 font-medium text-sm mb-2 block">关于我</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              专注全栈开发
              <br />
              <span className="text-slate-400">助力企业数字化</span>
            </h2>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              我是一名全栈软件开发者，拥有 6 年以上的项目开发经验。专注于为企业提供高质量的数字化解决方案，包括智慧园区、工业 MES、企业官网、数据可视化等领域的软件开发。
            </p>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              我相信好的软件不仅能解决眼前的问题，更能为企业未来发展提供支撑。因此，我在每个项目中都会充分考虑可扩展性和可维护性，确保交付的产品能够经受住时间的考验。
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <User size={16} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">独立开发者</div>
                  <div className="text-slate-500 text-xs">个人承接项目</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Clock size={16} className="text-green-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">6+ 年经验</div>
                  <div className="text-slate-500 text-xs">行业深耕</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Award size={16} className="text-purple-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">50+ 项目</div>
                  <div className="text-slate-500 text-xs">成功交付</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <MessageCircle size={16} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">好评如潮</div>
                  <div className="text-slate-500 text-xs">客户认可</div>
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
              <h3 className="text-lg font-semibold text-white mb-3">服务优势</h3>
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
