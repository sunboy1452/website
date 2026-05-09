export const skillCategories = [
  {
    name: '前端开发',
    icon: 'Monitor',
    color: '#6366f1',
    skills: [
      { name: 'Vue.js', level: 'expert', years: 5 },
      { name: 'React', level: 'expert', years: 4 },
      { name: 'Vue 3', level: 'expert', years: 3 },
      { name: 'TypeScript', level: 'proficient', years: 3 },
      { name: 'JavaScript', level: 'expert', years: 6 },
      { name: 'Tailwind CSS', level: 'proficient', years: 2 },
      { name: 'Element Plus', level: 'expert', years: 4 },
      { name: 'Ant Design', level: 'proficient', years: 3 },
      { name: 'Vite', level: 'proficient', years: 3 },
      { name: 'Nuxt.js', level: 'familiar', years: 1 }
    ]
  },
  {
    name: '后端开发',
    icon: 'Server',
    color: '#22c55e',
    skills: [
      { name: 'Node.js', level: 'expert', years: 5 },
      { name: 'Python', level: 'proficient', years: 3 },
      { name: 'Java', level: 'proficient', years: 2 },
      { name: 'Express', level: 'expert', years: 4 },
      { name: 'Koa', level: 'proficient', years: 2 },
      { name: 'Django', level: 'familiar', years: 1 },
      { name: 'Spring Boot', level: 'familiar', years: 1 },
      { name: 'RESTful API', level: 'expert', years: 5 }
    ]
  },
  {
    name: '数据库',
    icon: 'Database',
    color: '#f59e0b',
    skills: [
      { name: 'MySQL', level: 'expert', years: 5 },
      { name: 'PostgreSQL', level: 'proficient', years: 3 },
      { name: 'MongoDB', level: 'proficient', years: 3 },
      { name: 'Redis', level: 'proficient', years: 3 },
      { name: 'SQL', level: 'expert', years: 5 }
    ]
  },
  {
    name: 'DevOps & 部署',
    icon: 'Cloud',
    color: '#06b6d4',
    skills: [
      { name: 'Linux', level: 'proficient', years: 4 },
      { name: 'Nginx', level: 'proficient', years: 3 },
      { name: 'Docker', level: 'proficient', years: 3 },
      { name: 'Git', level: 'expert', years: 6 },
      { name: 'CI/CD', level: 'familiar', years: 2 },
      { name: 'Vercel', level: 'proficient', years: 2 },
      { name: '阿里云', level: 'proficient', years: 3 }
    ]
  }
];

export const levelLabels = {
  expert: '精通',
  proficient: '熟练',
  familiar: '熟悉'
};

export const levelColors = {
  expert: '#22c55e',
  proficient: '#6366f1',
  familiar: '#94a3b8'
};
