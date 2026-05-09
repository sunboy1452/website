import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const projectTypes = [
  { value: 'park', label: '智慧园区系统' },
  { value: 'factory', label: '工厂管理系统' },
  { value: 'website', label: '企业官网' },
  { value: 'admin', label: '管理后台' },
  { value: 'visualization', label: '数据可视化' },
  { value: 'other', label: '其他项目' }
];

const budgetRanges = [
  { value: '10k-30k', label: '1-3 万' },
  { value: '30k-50k', label: '3-5 万' },
  { value: '50k-100k', label: '5-10 万' },
  { value: '100k+', label: '10 万以上' },
  { value: 'negotiable', label: '面议' }
];

const timelines = [
  { value: '1month', label: '1 个月内' },
  { value: '2months', label: '1-2 个月' },
  { value: '3months', label: '2-3 个月' },
  { value: '3months+', label: '3 个月以上' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: '',
      company: '',
      contact: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-indigo-400 font-medium text-sm mb-2 block">联系我们</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3">
            开始您的项目
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            有项目需求？填写表单或直接联系，我将尽快回复您
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-4">联系方式</h3>
              
              <div className="space-y-3">
                <a href="mailto:contact@example.com" className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-colors group">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">邮箱</div>
                    <div className="text-white text-sm group-hover:text-indigo-400 transition-colors">contact@example.com</div>
                  </div>
                </a>

                <a href="tel:+8613800138000" className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-colors group">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">电话</div>
                    <div className="text-white text-sm group-hover:text-green-400 transition-colors">138-0013-8000</div>
                  </div>
                </a>

                <a href="wechat:dev_portfolio" className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-colors group">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">微信</div>
                    <div className="text-white text-sm group-hover:text-emerald-400 transition-colors">dev_portfolio</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-4">
              <h3 className="text-base font-semibold text-white mb-2">快速响应</h3>
              <p className="text-slate-400 text-sm mb-3">
                工作时间内 2 小时内回复，紧急情况可电话沟通
              </p>
              <div className="flex items-center gap-2 text-indigo-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs">通常在线</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">提交成功！</h3>
                <p className="text-slate-400 mb-6 text-sm">
                  感谢您的咨询，我将尽快与您联系
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors text-sm"
                >
                  继续咨询
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1.5 font-medium text-sm">姓名 *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="您的姓名"
                      className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1.5 font-medium text-sm">公司</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="您的公司（选填）"
                      className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium text-sm">联系方式 *</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    placeholder="手机号或邮箱"
                    className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1.5 font-medium text-sm">项目类型</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                    >
                      <option value="">选择类型</option>
                      {projectTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1.5 font-medium text-sm">预算范围</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                    >
                      <option value="">选择预算</option>
                      {budgetRanges.map(range => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1.5 font-medium text-sm">预期时间</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                    >
                      <option value="">选择时间</option>
                      {timelines.map(timeline => (
                        <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium text-sm">项目描述</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    placeholder="请描述您的项目需求、功能要求等..."
                    className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      提交中...
                    </>
                  ) : (
                    <>
                      提交咨询
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
