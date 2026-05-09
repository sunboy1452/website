export const projects = [
  {
    id: 'smart-park-system',
    title: '智慧园区综合管理平台',
    category: 'park',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    description: '集安防监控、能耗管理、设施报修、访客预约于一体的智慧园区解决方案，提升园区运营效率30%',
    tags: ['Vue 3', 'Element Plus', 'Node.js', 'MySQL', 'ECharts'],
    details: {
      background: '为某科技园区打造的一体化管理平台，实现园区数字化转型',
      solutions: ['微服务架构设计', '实时数据监控', '移动端适配', '多园区统一管理'],
      features: ['智能安防系统', '能耗监测管理', '设施报修工单', '访客预约登记', '车位管理系统', '物业收费模块']
    },
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop'
    ],
    featured: true
  },
  {
    id: 'factory-mes-system',
    title: '智能制造 MES 系统',
    category: 'factory',
    coverImage: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
    description: '面向离散制造企业的生产执行系统，实现生产全流程追溯与质量管控',
    tags: ['React', 'Ant Design', 'Python', 'PostgreSQL', 'Django'],
    details: {
      background: '为某汽车零部件工厂定制的MES系统，解决生产过程不透明的问题',
      solutions: ['生产工序管理', '质量追溯体系', '设备联网监控', '实时数据采集'],
      features: ['工单排程管理', '工序报工系统', '质量检验模块', '设备状态监控', '物料追溯', '报表统计']
    },
    gallery: [
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop'
    ],
    featured: true
  },
  {
    id: 'company-official-website',
    title: '企业品牌官网',
    category: 'website',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: '响应式企业官网，包含产品展示、新闻动态、在线留言等模块，支持SEO优化',
    tags: ['Vue 3', 'Nuxt.js', 'Tailwind CSS', 'Vercel'],
    details: {
      background: '为某科技公司打造的全新品牌形象官网，提升企业数字化形象',
      solutions: ['SSR渲染优化', 'SEO友好架构', '响应式设计', '内容管理系统'],
      features: ['首页幻灯片', '产品展示中心', '新闻资讯发布', '在线留言表单', '人才招聘入口', '多语言切换']
    },
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop'
    ],
    featured: true
  },
  {
    id: 'erp-admin-system',
    title: '企业ERP管理后台',
    category: 'admin',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: '完整的ERP管理系统，包含采购、销售、库存、财务等核心模块',
    tags: ['Vue 3', 'Element Plus', 'Spring Boot', 'Redis', 'MySQL'],
    details: {
      background: '为某贸易公司打造的一体化企业资源管理系统',
      solutions: ['RBAC权限控制', '数据可视化报表', '工作流引擎', '接口中间件'],
      features: ['客户关系管理', '供应商管理', '采购订单流程', '销售出库管理', '库存预警系统', '财务报表导出']
    },
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
    ],
    featured: false
  },
  {
    id: 'data-visualization-platform',
    title: '数据可视化大屏',
    category: 'visualization',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: '企业级数据驾驶舱，支持多维度数据聚合、实时刷新与大屏展示',
    tags: ['Vue 3', 'ECharts', 'DataV', 'WebSocket', 'Python'],
    details: {
      background: '为某电商公司打造的运营数据监控大屏',
      solutions: ['实时数据推送', '多图表联动', '大屏自适应', '数据下钻分析'],
      features: ['核心指标看板', '销售趋势图表', '区域分布地图', '实时订单监控', '用户画像分析', '竞品数据对比']
    },
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
    ],
    featured: true
  },
  {
    id: 'warehouse-wms-system',
    title: '智能仓储 WMS 系统',
    category: 'factory',
    coverImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
    description: '支持条码/RFID的智能仓储系统，实现入库、出库、盘点全流程自动化',
    tags: ['React', 'Ant Design Pro', 'Java', 'MongoDB', 'Redis'],
    details: {
      background: '为某物流公司打造的智能化仓储管理系统',
      solutions: ['条码扫描集成', '库位智能推荐', 'PDA移动端', 'AGV调度接口'],
      features: ['入库登记管理', '出库订单处理', '库存盘点功能', '库位管理', '批次追溯', '报表统计']
    },
    gallery: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop'
    ],
    featured: false
  }
];

export const categoryLabels = {
  all: '全部项目',
  park: '智慧园区',
  factory: '工厂系统',
  website: '企业官网',
  admin: '管理后台',
  visualization: '数据可视化'
};
