export type Language = 'pt-BR' | 'en-US' | 'es-ES';

export const translations = {
  'pt-BR': {
    // Navbar
    nav: {
      home: 'Início',
      services: 'Serviços',
      skills: 'Habilidades',
      projects: 'Projetos',
      about: 'Sobre',
      testimonials: 'Depoimentos',
      contact: 'Contato',
      hire: 'Contratar',
      downloadCV: 'Currículo',
      cvPortuguese: 'Baixar em Português',
      cvEnglish: 'Baixar em Inglês',
      cvSpanish: 'Baixar em Espanhol',
    },
    // Hero
    hero: {
      available: 'Disponível para oportunidades',
      title1: 'Transformando',
      title2: 'Dados',
      title3: 'em',
      title4: 'Decisão',
      subtitle: 'Análises claras, dashboards estratégicos e automações que ajudam empresas a',
      decideBetter: 'decidir melhor',
      faster: 'mais rápido',
      lessRisk: 'menos risco',
      and: 'e com',
      biLabel: 'BI & Analytics',
      biValue: 'Expert',
      sqlLabel: 'SQL & Data',
      sqlValue: 'Fluente',
      autoLabel: 'Automação',
      autoValue: 'Ágil',
      cta1: 'Vamos Conversar',
      cta2: 'Ver Serviços',
      explore: 'Explore',
    },
    // Services
    services: {
      subtitle: 'O que posso fazer por você',
      title: 'Serviços',
      titleHighlight: 'Especializados',
      description: 'Soluções completas para transformar a forma como sua empresa utiliza dados',
      cta: 'Saiba Mais',
      bottomText: 'Quer saber mais? Entre em contato.',
      bottomCta: 'Falar Comigo',
      modalIncludesLabel: 'O que inclui:',
      modalCtaLabel: 'Falar sobre este serviço',
      dataAnalysis: {
        title: 'Análise de Dados & BI',
        description: 'Dashboards que contam histórias e revelam oportunidades escondidas nos seus dados.',
        features: [
          'Dashboards interativos em Power BI',
          'Visualizações avançadas em Excel',
          'Análises com Python (Pandas, Matplotlib)',
          'Relatórios executivos automatizados',
          'KPIs e métricas de negócio',
        ],
        modalTitle: 'Análise de Dados & Business Intelligence',
        modalDescription: 'Transformo dados brutos em insights acionáveis através de dashboards interativos e relatórios estratégicos que impulsionam a tomada de decisão.',
        modalFeatures: [
          { title: 'Power BI', description: 'Dashboards interativos com DAX avançado, modelagem de dados e visualizações impactantes' },
          { title: 'Excel Avançado', description: 'Fórmulas complexas, tabelas dinâmicas, macros VBA e análises estatísticas' },
          { title: 'Python Analytics', description: 'Análises com Pandas, visualizações com Matplotlib e Plotly, relatórios automatizados' },
          { title: 'Storytelling com Dados', description: 'Apresentação de insights de forma clara e persuasiva para diferentes públicos' },
        ],
      },
      sql: {
        title: 'SQL & Engenharia de Dados',
        description: 'Dados organizados, limpos e prontos para gerar valor real para sua empresa.',
        features: [
          'Modelagem de dados eficiente',
          'Queries otimizadas e performáticas',
          'ETL e integração de fontes',
          'Qualidade e governança de dados',
        ],
        modalTitle: 'SQL & Engenharia de Dados',
        modalDescription: 'Estruturo e organizo seus dados de forma eficiente, garantindo qualidade, performance e acessibilidade para análises.',
        modalFeatures: [
          { title: 'Modelagem de Dados', description: 'Criação de estruturas relacionais eficientes e normalizadas' },
          { title: 'SQL Avançado', description: 'Queries otimizadas, CTEs, Window Functions e procedures' },
          { title: 'ETL/ELT', description: 'Integração e transformação de dados de múltiplas fontes' },
          { title: 'Data Quality', description: 'Validação, limpeza e governança de dados' },
        ],
      },
      automation: {
        title: 'Automação & Pipelines',
        description: 'Processos manuais transformados em fluxos automáticos que trabalham por você.',
        features: [
          'Automação completa com N8N',
          'Integração de sistemas e APIs',
          'Workflows automatizados',
          'Eliminação de tarefas repetitivas',
        ],
        modalTitle: 'Automação & Pipelines de Dados',
        modalDescription: 'Automatizo processos manuais e repetitivos, criando fluxos inteligentes que economizam tempo e reduzem erros.',
        modalFeatures: [
          { title: 'N8N Expert', description: 'Qualquer tipo de automação: integrações, notificações, sincronizações, workflows complexos' },
          { title: 'APIs & Integrações', description: 'Conexão entre sistemas, webhooks, automação de processos entre plataformas' },
          { title: 'Workflows Inteligentes', description: 'Fluxos automatizados com lógica condicional e tratamento de erros' },
          { title: 'Relatórios Automáticos', description: 'Geração e envio automatizado de relatórios por email, Slack, etc.' },
        ],
      },
    },
    // Skills
    skills: {
      subtitle: 'Expertise Técnica',
      title: 'Habilidades &',
      titleHighlight: 'Ferramentas',
      description: 'Stack moderna e comprovada para entregar resultados de alto impacto',
      hardSkillsTitle: 'Hard Skills',
      softSkillsTitle: 'Soft Skills',
      footer1: 'Aprendizado contínuo',
      footer2: 'Metodologia SCRUM',
      footer3: 'Foco em resultados',
      skillItems: {
        powerbi: { name: 'Power BI', description: 'Modelagem, dashboards e relatórios executivos' },
        excel: { name: 'Excel', description: 'Fórmulas avançadas, tabelas dinâmicas e análises' },
        dax: { name: 'DAX', description: 'Medidas, cálculos e inteligência de tempo no Power BI' },
        powerquery: { name: 'Power Query', description: 'ETL, tratamento e transformação de dados' },
        languageM: { name: 'Linguagem M', description: 'Scripts avançados no Power Query' },
        storytelling: { name: 'Storytelling com Dados', description: 'Comunicação visual clara e orientada à decisão' },
        machinelearning: { name: 'Machine Learning', description: 'Modelos preditivos e análise avançada' },
        sql: { name: 'SQL', description: 'Consultas otimizadas, joins e modelagem relacional' },
        fabric: { name: 'Microsoft Fabric', description: 'Plataforma unificada de dados e analytics' },
        n8n: { name: 'Automações N8N', description: 'Workflows e integrações entre sistemas' },
        apachehop: { name: 'Apache Hop', description: 'Orquestração e pipelines de dados' },
        python: { name: 'Python', description: 'Pandas, automações e análise de dados' },
        kpis: { name: 'KPIs', description: 'Definição e acompanhamento de indicadores' },
        spark: { name: 'Apache Spark', description: 'Processamento distribuído de big data' },
        databricks: { name: 'Databricks', description: 'Lakehouse, notebooks e engenharia de dados' },
        datawarehouse: { name: 'Data Warehouse', description: 'Modelagem dimensional e arquitetura analítica' },
        linux: { name: 'Linux', description: 'Terminal, scripts e administração de ambientes' },
        ai: { name: 'IA', description: 'Aplicação de IA generativa e produtividade' },
        git: { name: 'Git', description: 'Versionamento e colaboração em projetos' },
        communication: { name: 'Comunicação', description: 'Comunicação clara com áreas de negócio e tradução de dados em decisões' },
      },
    },
    // About
    about: {
      subtitle: 'Quem sou eu',
      name: 'João',
      nameHighlight: 'Breno',
      description1: 'Analista de Dados Jr com experiência em análise de indicadores, monitoramento e suporte à tomada de decisão orientada por dados. Atuo no segmento de redes de computadores transformando dados operacionais em informações estratégicas, apoiando clientes, operação e áreas técnicas.',
      description2: 'Tenho perfil analítico, hands-on e voltado à identificação de padrões, melhoria contínua e otimização de processos, com vivência em ambientes ágeis (Scrum) e contato direto com clientes e operações. Profissional dedicado, com muita vontade de servir e aprender.',
      valueTitle: 'Por que me escolher?',
      valueDescription: 'Combino domínio técnico em Power BI, SQL, Python e automações (n8n) com visão de negócio e comunicação clara. Entrego dashboards que contam histórias, KPIs que orientam decisões e automações que economizam tempo — sempre alinhado à realidade da operação e do cliente.',
      timeline: {
        education: {
          title: 'Formação & Base Técnica',
          description: 'Base sólida em análise de dados, SQL, estatística e ferramentas de BI, com estudo contínuo em Python, Microsoft Fabric e engenharia de dados.',
        },
        internship: {
          title: 'Analista de Dados — Fimm Brasil (06/2023 – 06/2024)',
          description: 'Projetos de BI e automação para a CAGECE: coleta e tratamento de dados com Python, SQL Server e Excel, web scraping em sistemas internos, dashboards em Power BI (Power Query, DAX, modelagem) e automações administrativas.',
        },
        current: {
          title: 'Analista de Dados — UP-ISP (07/2024 – Atual)',
          description: 'Análise, monitoramento e BI para provedores de internet: Zabbix, Grafana e Power BI para performance e incidentes; SQL, Python e Microsoft Fabric para extração e automação; n8n para fluxos internos; interface direta com clientes e operação em rotinas Scrum via Tiflux.',
        },
        next: {
          title: 'Próximos Passos',
          description: 'Aprofundamento em Microsoft Fabric, Databricks/Spark, Data Warehouse e Machine Learning aplicado a operações de rede.',
        },
      },
    },
    // Contact
    contact: {
      subtitle: 'Oportunidades',
      title: 'Entre em',
      titleHighlight: 'Contato',
      description: 'Interessado em ter um analista de dados na sua equipe? Vamos conversar sobre como posso agregar valor ao seu time.',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'seu@email.com',
      subjectLabel: 'Assunto',
      subjectPlaceholder: 'Oportunidade, projeto, etc.',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-me mais sobre a oportunidade...',
      submit: 'Enviar Mensagem',
      submitting: 'Enviando...',
      successTitle: 'Mensagem enviada!',
      successDescription: 'Obrigado pelo contato. Retornarei em breve!',
      whyContact: 'Por que me contratar?',
      reasons: [
        'Pronto para agregar valor ao time',
        'Experiência comprovada com dados',
        'Proativo e comprometido com resultados',
        'Disponível para início imediato',
      ],
      connectWith: 'Conecte-se comigo:',
    },
    // Footer
    footer: {
      madeWith: 'Feito com',
      in: 'em',
    },
    // Tools
    tools: {
      subtitle: 'Tech Stack',
      title: 'Ferramentas &',
      titleHighlight: 'Tecnologias',
      description: 'As ferramentas que domino para entregar soluções de dados de alto impacto',
      certNote: '+ Certificações em Power BI, SQL e metodologias ágeis',
    },
    // Stats
    stats: {
      dashboards: { value: 50, label: 'Dashboards Criados' },
      clients: { value: 15, label: 'Clientes Atendidos' },
      projects: { value: 30, label: 'Projetos Entregues' },
      experience: { value: 3, label: 'Anos de Experiência' },
    },
    // Testimonials
    testimonials: {
      subtitle: 'Recomendações',
      title: 'O que dizem',
      titleHighlight: 'sobre mim',
      description: 'Feedback de colegas, gestores e clientes com quem trabalhei',
      note: '💡 Você pode adicionar depoimentos reais de colegas, gestores ou clientes aqui',
      items: [
        {
          quote: 'Tive a oportunidade de acompanhar seu trabalho e posso destacar o profissionalismo e a motivação que demonstra em cada desafio. Possui sólida experiência em soluções lógicas e se destaca pela forma como analisa cenários e propõe soluções práticas e eficazes. Além da competência técnica, impressiona também pela rapidez em aprender novas tecnologias e pela disposição em compartilhar conhecimento, agregando muito valor às equipes em que atua.',
          author: 'Iarlley Gomes',
          role: 'Network Analyst | NOC | FCF',
        },
        {
          quote: 'João Breno, uma pessoa disciplinada, talentosa e comunicativa. Tem grande conhecimento na área da programação, domina as principais ferramentas e está sempre se dedicando aos estudos para se aprimorar ainda mais, foi muito bom ter aprendido tanto com ele.',
          author: 'Lucas Guilherme',
          role: 'Analista de Dados | Excel | Power BI | SQL',
        },
        {
          quote: 'João Breno é um profissional com excelente domínio em programação, sempre disposto a aprender e a encarar novos desafios. Sua dedicação e talento fazem a diferença na equipe.',
          author: 'Pedro Davi',
          role: 'Analista de Monitoramento',
        },
        {
          quote: 'João Breno é um profissional que se destaca pelo grande conhecimento em programação, pela vontade constante de aprender e pelo raciocínio lógico rápido. Sua capacidade de evolução é admirável e inspiradora, mostrando sempre que está pronto para encarar novos desafios e crescer ainda mais. É um privilégio ter alguém tão dedicado e talentoso na equipe!',
          author: 'Eduardo Ferreira',
          role: 'Analista de Monitoramento',
        },
        {
          quote: 'Breno é um colaborador que logo conquista sua confiança por conta da sua capacidade técnica, comprometimento e facilidade de relacionamento, é um excelente profissional para desenvolvimento ágil, pois tem muita facilidade para o trabalho em equipe, se aplica nas atividades e demandando pouca gerência. Recomendo o seu trabalho sem dúvidas. Focado no resultado, tem grande capacidade de tornar projetos em realidade. Entre suas virtudes destaco sua capacidade técnica e a facilidade de captar novos conhecimentos.',
          author: 'Dnivaldo A O Filho',
          role: 'Analista de Redes e de comunicação de dados',
        },
      ],
    },
    // Projects
    projects: {
      subtitle: 'Portfólio',
      title: 'Meus',
      titleHighlight: 'Projetos',
      description: 'Dashboards e soluções desenvolvidas para diferentes áreas de negócio',
      viewProject: 'Ver Projeto',
      items: [
        {
          id: 'real-x-meta',
          name: 'Real X Meta',
          shortDescription: 'Dashboard de Faturamento vs Meta',
          description: `Real X Meta

Objetivo:
Analisar o faturamento e o atingimento das metas ao longo do tempo, comparando períodos e identificando tendências.

O que entrega:
• Visão geral e evolução temporal do faturamento
• Comparativo Faturamento vs Meta por mês
• Análise Ano Atual vs Ano Anterior
• Comparação entre períodos distintos

Valor para a empresa:
Apoia decisões estratégicas com clareza sobre performance comercial e cumprimento de metas.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiODQxMmU5YWEtZDJhMC00MGZkLWFkM2QtMTNlODc4OGY0MGU0IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'real-x-meta-comercial',
          name: 'Realizado X Meta Comercial',
          shortDescription: 'Performance Comercial Detalhada',
          description: `Realizado X Meta Comercial

Objetivo:
Acompanhar a performance comercial detalhada por vendedor, gerente e produto, comparando realizado com meta.

O que entrega:
• KPIs de Faturamento, NFs emitidas e Ticket médio
• Faturamento vs Meta por mês e por produto
• Ranking de vendedores e performance por gerente
• Identificação de quem bateu ou não a meta

Valor para a empresa:
Direciona ações comerciais com base em dados e melhora a produtividade da equipe de vendas.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiN2JhY2M4NzAtNzQ2Mi00YjU0LTllYjQtYjJmNGI1MGNiNmU4IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'mr-bolos',
          name: 'Mr Bolos e Doces',
          shortDescription: 'Dashboard Comercial & Estratégico',
          description: `Mr Bolos e Doces

Objetivo:
Analisar faturamento, custos e margem de uma confeitaria, apoiando decisões de precificação e mix de produtos.

O que entrega:
• Visão geral de Faturamento, Custos e Margem Bruta
• Análise mensal e média de pedidos por dia da semana
• Detalhamento por tipo, categoria e produto
• Alerta de produtos abaixo da margem de segurança

Valor para a empresa:
Aumenta a rentabilidade ao identificar produtos deficitários e otimizar o mix de vendas.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiYTU1NDkzOGYtMWExNi00OWFjLWI2YzYtNjRmMDUzYjAzMjE4IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'real-x-meta-controladoria',
          name: 'Real X Meta Controladoria',
          shortDescription: 'DRE - Realizado vs Previsto',
          description: `Real X Meta Controladoria

Objetivo:
Acompanhar o Demonstrativo de Resultado comparando o Realizado com o Previsto por filial e período.

O que entrega:
• Análise Real vs Meta com AV e AH
• Análise horizontal, vertical e de despesas
• Detalhamento por conta gerencial e filial
• Resultado líquido do exercício e acumulado

Valor para a empresa:
Dá visibilidade contábil e gerencial para decisões financeiras baseadas em dados confiáveis.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiZmY0YmVlNzUtOTZjOC00NjdlLTk3NjUtYjJiOGEwZDQwMDU0IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'financeiro-dre',
          name: 'Financeiro - DRE',
          shortDescription: 'Dashboard Financeiro Executivo',
          description: `Financeiro - DRE

Objetivo:
Consolidar o Demonstrativo de Resultado do Exercício com uma visão executiva de indicadores financeiros.

O que entrega:
• KPIs de Receita Líquida, Margem de Contribuição, EBITDA e Lucro Líquido
• Análise mês a mês do DRE completo
• Análise Horizontal (AH) por conta gerencial
• Percentuais sobre a receita bruta

Valor para a empresa:
Facilita a leitura da saúde financeira e apoia decisões de controle de custos e investimentos.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiNGQ5ZDNkMTEtODEyOC00ZDc0LWEyZjctNTYzYWRiYjA5YTk3IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'heavy-power-nutrition',
          name: 'Heavy Power Nutrition',
          shortDescription: 'Sales Overview - Suplementos',
          description: `Heavy Power Nutrition

Objetivo:
Analisar as vendas de uma rede de suplementos alimentares com visão geográfica, por produto e por canal.

O que entrega:
• KPIs de Gross Sales, Net Sales, Discount e Margin
• Análise mensal e por tipo de negócio
• Análise geográfica por cidade
• Detalhamento por categoria, subcategoria e produto

Valor para a empresa:
Identifica os produtos e regiões mais rentáveis, orientando estratégia comercial e expansão.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiNGQzN2U2ZjYtNDFiMS00MGFjLWE2NzItYzQ5OWRjNmU3OWE5IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
      ],
    },
  },
  'en-US': {
    // Navbar
    nav: {
      home: 'Home',
      services: 'Services',
      skills: 'Skills',
      projects: 'Projects',
      about: 'About',
      testimonials: 'Testimonials',
      contact: 'Contact',
      hire: 'Hire Me',
      downloadCV: 'Resume',
      cvPortuguese: 'Download in Portuguese',
      cvEnglish: 'Download in English',
      cvSpanish: 'Download in Spanish',
    },
    // Hero
    hero: {
      available: 'Available for opportunities',
      title1: 'Transforming',
      title2: 'Data',
      title3: 'into',
      title4: 'Decision',
      subtitle: 'Clear analyses, strategic dashboards and automations that help companies',
      decideBetter: 'decide better',
      faster: 'faster',
      lessRisk: 'less risk',
      and: 'and with',
      biLabel: 'BI & Analytics',
      biValue: 'Expert',
      sqlLabel: 'SQL & Data',
      sqlValue: 'Fluent',
      autoLabel: 'Automation',
      autoValue: 'Agile',
      cta1: "Let's Talk",
      cta2: 'See Services',
      explore: 'Explore',
    },
    // Services
    services: {
      subtitle: 'What I can do for you',
      title: 'Specialized',
      titleHighlight: 'Services',
      description: 'Complete solutions to transform how your company uses data',
      cta: 'Learn More',
      bottomText: 'Want to know more? Get in touch.',
      bottomCta: 'Contact Me',
      modalIncludesLabel: "What's included:",
      modalCtaLabel: 'Talk about this service',
      dataAnalysis: {
        title: 'Data Analysis & BI',
        description: 'Dashboards that tell stories and reveal hidden opportunities in your data.',
        features: [
          'Interactive Power BI dashboards',
          'Advanced Excel visualizations',
          'Python analytics (Pandas, Matplotlib)',
          'Automated executive reports',
          'KPIs and business metrics',
        ],
        modalTitle: 'Data Analysis & Business Intelligence',
        modalDescription: 'I transform raw data into actionable insights through interactive dashboards and strategic reports that drive decision-making.',
        modalFeatures: [
          { title: 'Power BI', description: 'Interactive dashboards with advanced DAX, data modeling and impactful visualizations' },
          { title: 'Advanced Excel', description: 'Complex formulas, pivot tables, VBA macros and statistical analysis' },
          { title: 'Python Analytics', description: 'Analysis with Pandas, visualizations with Matplotlib and Plotly, automated reports' },
          { title: 'Data Storytelling', description: 'Presenting insights clearly and persuasively for different audiences' },
        ],
      },
      sql: {
        title: 'SQL & Data Engineering',
        description: 'Organized, clean data ready to generate real value for your company.',
        features: [
          'Efficient data modeling',
          'Optimized, performant queries',
          'ETL and source integration',
          'Data quality and governance',
        ],
        modalTitle: 'SQL & Data Engineering',
        modalDescription: 'I structure and organize your data efficiently, ensuring quality, performance and accessibility for analysis.',
        modalFeatures: [
          { title: 'Data Modeling', description: 'Creation of efficient and normalized relational structures' },
          { title: 'Advanced SQL', description: 'Optimized queries, CTEs, Window Functions and procedures' },
          { title: 'ETL/ELT', description: 'Integration and transformation of data from multiple sources' },
          { title: 'Data Quality', description: 'Validation, cleaning and data governance' },
        ],
      },
      automation: {
        title: 'Automation & Pipelines',
        description: 'Manual processes transformed into automatic flows that work for you.',
        features: [
          'Complete automation with N8N',
          'System and API integration',
          'Automated workflows',
          'Elimination of repetitive tasks',
        ],
        modalTitle: 'Automation & Data Pipelines',
        modalDescription: 'I automate manual and repetitive processes, creating intelligent flows that save time and reduce errors.',
        modalFeatures: [
          { title: 'N8N Expert', description: 'Any type of automation: integrations, notifications, syncs, complex workflows' },
          { title: 'APIs & Integrations', description: 'Connection between systems, webhooks, process automation between platforms' },
          { title: 'Smart Workflows', description: 'Automated flows with conditional logic and error handling' },
          { title: 'Automatic Reports', description: 'Automated generation and sending of reports via email, Slack, etc.' },
        ],
      },
    },
    // Skills
    skills: {
      subtitle: 'Technical Expertise',
      title: 'Skills &',
      titleHighlight: 'Tools',
      description: 'Modern and proven stack to deliver high-impact results',
      hardSkillsTitle: 'Hard Skills',
      softSkillsTitle: 'Soft Skills',
      footer1: 'Continuous learning',
      footer2: 'SCRUM methodology',
      footer3: 'Results-focused',
      skillItems: {
        powerbi: { name: 'Power BI', description: 'Modeling, dashboards and executive reports' },
        excel: { name: 'Excel', description: 'Advanced formulas, pivot tables and analyses' },
        dax: { name: 'DAX', description: 'Measures, calculations and time intelligence in Power BI' },
        powerquery: { name: 'Power Query', description: 'ETL, data cleansing and transformation' },
        languageM: { name: 'M Language', description: 'Advanced scripting in Power Query' },
        storytelling: { name: 'Data Storytelling', description: 'Clear, decision-driven visual communication' },
        machinelearning: { name: 'Machine Learning', description: 'Predictive models and advanced analytics' },
        sql: { name: 'SQL', description: 'Optimized queries, joins and relational modeling' },
        fabric: { name: 'Microsoft Fabric', description: 'Unified data and analytics platform' },
        n8n: { name: 'N8N Automations', description: 'Workflows and system integrations' },
        apachehop: { name: 'Apache Hop', description: 'Data pipelines and orchestration' },
        python: { name: 'Python', description: 'Pandas, automations and data analysis' },
        kpis: { name: 'KPIs', description: 'Defining and tracking key indicators' },
        spark: { name: 'Apache Spark', description: 'Distributed big data processing' },
        databricks: { name: 'Databricks', description: 'Lakehouse, notebooks and data engineering' },
        datawarehouse: { name: 'Data Warehouse', description: 'Dimensional modeling and analytical architecture' },
        linux: { name: 'Linux', description: 'Terminal, scripting and environment administration' },
        ai: { name: 'AI', description: 'Applied generative AI and productivity' },
        git: { name: 'Git', description: 'Version control and collaboration' },
        communication: { name: 'Communication', description: 'Clear communication with business areas and translating data into decisions' },
      },
    },
    // About
    about: {
      subtitle: 'Who I am',
      name: 'João',
      nameHighlight: 'Breno',
      description1: "Junior Data Analyst experienced in KPI analysis, monitoring and data-driven decision support. I work in the computer networking segment, turning operational data into strategic insights that support clients, operations and technical teams.",
      description2: 'Analytical, hands-on profile focused on pattern recognition, continuous improvement and process optimization, with experience in agile (Scrum) environments and direct contact with clients and operations. Dedicated professional, eager to serve and to learn.',
      valueTitle: 'Why choose me?',
      valueDescription: 'I combine strong technical skills in Power BI, SQL, Python and automation (n8n) with business vision and clear communication. I deliver dashboards that tell stories, KPIs that drive decisions and automations that save time — always aligned with the reality of the operation and the client.',
      timeline: {
        education: {
          title: 'Education & Technical Foundation',
          description: 'Solid foundation in data analysis, SQL, statistics and BI tools, with ongoing study of Python, Microsoft Fabric and data engineering.',
        },
        internship: {
          title: 'Data Analyst — Fimm Brasil (06/2023 – 06/2024)',
          description: 'BI and automation projects for CAGECE: data collection and processing with Python, SQL Server and Excel, web scraping on internal systems, Power BI dashboards (Power Query, DAX, modeling) and administrative automations.',
        },
        current: {
          title: 'Data Analyst — UP-ISP (07/2024 – Present)',
          description: 'Analysis, monitoring and BI for ISPs: Zabbix, Grafana and Power BI for performance and incident tracking; SQL, Python and Microsoft Fabric for extraction and automation; n8n for internal workflows; direct interface with clients and operations in Scrum routines via Tiflux.',
        },
        next: {
          title: 'Next Steps',
          description: 'Deep-diving into Microsoft Fabric, Databricks/Spark, Data Warehousing and Machine Learning applied to network operations.',
        },
      },
    },
    // Contact
    contact: {
      subtitle: 'Opportunities',
      title: 'Get in',
      titleHighlight: 'Touch',
      description: 'Interested in having a data analyst on your team? Let\'s talk about how I can add value to your team.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Opportunity, project, etc.',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me more about the opportunity...',
      submit: 'Send Message',
      submitting: 'Sending...',
      successTitle: 'Message sent!',
      successDescription: 'Thanks for reaching out. I\'ll get back to you soon!',
      whyContact: 'Why hire me?',
      reasons: [
        'Ready to add value to the team',
        'Proven experience with data',
        'Proactive and results-committed',
        'Available for immediate start',
      ],
      connectWith: 'Connect with me:',
    },
    // Footer
    footer: {
      madeWith: 'Made with',
      in: 'in',
    },
    // Tools
    tools: {
      subtitle: 'Tech Stack',
      title: 'Tools &',
      titleHighlight: 'Technologies',
      description: 'The tools I master to deliver high-impact data solutions',
      certNote: '+ Certifications in Power BI, SQL and agile methodologies',
    },
    // Stats
    stats: {
      dashboards: { value: 50, label: 'Dashboards Created' },
      clients: { value: 15, label: 'Clients Served' },
      projects: { value: 30, label: 'Projects Delivered' },
      experience: { value: 3, label: 'Years of Experience' },
    },
    // Testimonials
    testimonials: {
      subtitle: 'Recommendations',
      title: 'What they say',
      titleHighlight: 'about me',
      description: 'Feedback from colleagues, managers and clients I have worked with',
      note: '💡 You can add real testimonials from colleagues, managers or clients here',
      items: [
        {
          quote: 'I had the opportunity to follow his work and can highlight the professionalism and motivation he demonstrates in every challenge. He has solid experience in logical solutions and stands out for the way he analyzes scenarios and proposes practical and effective solutions. Beyond technical competence, he also impresses with his speed in learning new technologies and his willingness to share knowledge, adding great value to the teams he works with.',
          author: 'Iarlley Gomes',
          role: 'Network Analyst | NOC | FCF',
        },
        {
          quote: 'João Breno is a disciplined, talented and communicative person. He has great knowledge in programming, masters the main tools and is always dedicating himself to studies to improve even more. It was very good to have learned so much from him.',
          author: 'Lucas Guilherme',
          role: 'Data Analyst | Excel | Power BI | SQL',
        },
        {
          quote: 'João Breno is a professional with excellent programming skills, always willing to learn and face new challenges. His dedication and talent make a difference in the team.',
          author: 'Pedro Davi',
          role: 'Monitoring Analyst',
        },
        {
          quote: 'João Breno is a professional who stands out for his great knowledge in programming, his constant desire to learn and his quick logical reasoning. His capacity for evolution is admirable and inspiring, always showing that he is ready to face new challenges and grow even more. It is a privilege to have someone so dedicated and talented on the team!',
          author: 'Eduardo Ferreira',
          role: 'Monitoring Analyst',
        },
        {
          quote: 'Breno is a collaborator who quickly gains your trust due to his technical capacity, commitment and ease of relationship. He is an excellent professional for agile development, as he has great ease for teamwork, applies himself to activities and requires little management. I recommend his work without a doubt. Focused on results, he has great ability to turn projects into reality. Among his virtues, I highlight his technical capacity and ease of acquiring new knowledge.',
          author: 'Dnivaldo A O Filho',
          role: 'Network and Data Communication Analyst',
        },
      ],
    },
    // Projects
    projects: {
      subtitle: 'Portfolio',
      title: 'My',
      titleHighlight: 'Projects',
      description: 'Dashboards and solutions developed for different business areas',
      viewProject: 'View Project',
      items: [
        {
          id: 'real-x-meta',
          name: 'Real X Meta',
          shortDescription: 'Revenue vs Target Dashboard',
          description: `Real X Meta

Objective:
Analyze revenue and target achievement over time, comparing periods and identifying trends.

Deliverables:
• Overview and time evolution of revenue
• Revenue vs Target comparison by month
• Current Year vs Previous Year analysis
• Comparison between distinct periods

Business Value:
Supports strategic decisions with clarity on commercial performance and goal achievement.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiODQxMmU5YWEtZDJhMC00MGZkLWFkM2QtMTNlODc4OGY0MGU0IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'real-x-meta-comercial',
          name: 'Realizado X Meta Comercial',
          shortDescription: 'Detailed Sales Performance',
          description: `Realizado X Meta Comercial

Objective:
Track detailed sales performance by seller, manager and product, comparing actuals with targets.

Deliverables:
• KPIs for Revenue, invoices and Average Ticket
• Revenue vs Target by month and product
• Seller ranking and manager performance
• Identification of who met or missed targets

Business Value:
Guides commercial actions with data and improves sales team productivity.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiN2JhY2M4NzAtNzQ2Mi00YjU0LTllYjQtYjJmNGI1MGNiNmU4IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'mr-bolos',
          name: 'Mr Bolos e Doces',
          shortDescription: 'Commercial & Strategic Dashboard',
          description: `Mr Bolos e Doces

Objective:
Analyze revenue, costs and margin of a bakery, supporting pricing and product mix decisions.

Deliverables:
• Revenue, Costs and Gross Margin overview
• Monthly analysis and average orders per weekday
• Breakdown by type, category and product
• Alerts on products below safety margin

Business Value:
Increases profitability by identifying underperforming products and optimizing the sales mix.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiYTU1NDkzOGYtMWExNi00OWFjLWI2YzYtNjRmMDUzYjAzMjE4IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'real-x-meta-controladoria',
          name: 'Real X Meta Controladoria',
          shortDescription: 'P&L - Actual vs Forecast',
          description: `Real X Meta Controladoria

Objective:
Track the P&L statement comparing Actual with Forecast by branch and period.

Deliverables:
• Actual vs Target analysis with vertical/horizontal analysis
• Horizontal, vertical and expense analysis
• Breakdown by management account and branch
• Net result of the period and year-to-date

Business Value:
Provides accounting and managerial visibility for reliable data-driven financial decisions.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiZmY0YmVlNzUtOTZjOC00NjdlLTk3NjUtYjJiOGEwZDQwMDU0IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'financeiro-dre',
          name: 'Financeiro - DRE',
          shortDescription: 'Executive Financial Dashboard',
          description: `Financeiro - DRE

Objective:
Consolidate the P&L statement with an executive view of financial indicators.

Deliverables:
• KPIs for Net Revenue, Contribution Margin, EBITDA and Net Profit
• Month-by-month full P&L analysis
• Horizontal analysis by management account
• Percentages over gross revenue

Business Value:
Simplifies reading of financial health and supports cost control and investment decisions.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiNGQ5ZDNkMTEtODEyOC00ZDc0LWEyZjctNTYzYWRiYjA5YTk3IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'heavy-power-nutrition',
          name: 'Heavy Power Nutrition',
          shortDescription: 'Sales Overview - Supplements',
          description: `Heavy Power Nutrition

Objective:
Analyze sales of a supplement chain with geographic, product and channel views.

Deliverables:
• KPIs for Gross Sales, Net Sales, Discount and Margin
• Monthly and business-type analysis
• Geographic analysis by city
• Breakdown by category, subcategory and product

Business Value:
Identifies the most profitable products and regions, guiding commercial strategy and expansion.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiNGQzN2U2ZjYtNDFiMS00MGFjLWE2NzItYzQ5OWRjNmU3OWE5IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
      ],
    },
  },
  'es-ES': {
    // Navbar
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      skills: 'Habilidades',
      projects: 'Proyectos',
      about: 'Sobre mí',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      hire: 'Contrátame',
      downloadCV: 'Currículum',
      cvPortuguese: 'Descargar en Portugués',
      cvEnglish: 'Descargar en Inglés',
      cvSpanish: 'Descargar en Español',
    },
    // Hero
    hero: {
      available: 'Disponible para oportunidades',
      title1: 'Transformando',
      title2: 'Datos',
      title3: 'en',
      title4: 'Decisión',
      subtitle: 'Análisis claros, dashboards estratégicos y automatizaciones que ayudan a las empresas a',
      decideBetter: 'decidir mejor',
      faster: 'más rápido',
      lessRisk: 'menos riesgo',
      and: 'y con',
      biLabel: 'BI & Analytics',
      biValue: 'Experto',
      sqlLabel: 'SQL & Data',
      sqlValue: 'Fluido',
      autoLabel: 'Automatización',
      autoValue: 'Ágil',
      cta1: 'Hablemos',
      cta2: 'Ver Servicios',
      explore: 'Explorar',
    },
    // Services
    services: {
      subtitle: 'Lo que puedo hacer por ti',
      title: 'Servicios',
      titleHighlight: 'Especializados',
      description: 'Soluciones completas para transformar la forma en que tu empresa utiliza los datos',
      cta: 'Saber Más',
      bottomText: '¿Quieres saber más? Ponte en contacto.',
      bottomCta: 'Contáctame',
      modalIncludesLabel: 'Qué incluye:',
      modalCtaLabel: 'Hablar sobre este servicio',
      dataAnalysis: {
        title: 'Análisis de Datos & BI',
        description: 'Dashboards que cuentan historias y revelan oportunidades ocultas en tus datos.',
        features: [
          'Dashboards interactivos en Power BI',
          'Visualizaciones avanzadas en Excel',
          'Análisis con Python (Pandas, Matplotlib)',
          'Informes ejecutivos automatizados',
          'KPIs y métricas de negocio',
        ],
        modalTitle: 'Análisis de Datos & Business Intelligence',
        modalDescription: 'Transformo datos brutos en insights accionables a través de dashboards interactivos e informes estratégicos que impulsan la toma de decisiones.',
        modalFeatures: [
          { title: 'Power BI', description: 'Dashboards interactivos con DAX avanzado, modelado de datos y visualizaciones impactantes' },
          { title: 'Excel Avanzado', description: 'Fórmulas complejas, tablas dinámicas, macros VBA y análisis estadístico' },
          { title: 'Python Analytics', description: 'Análisis con Pandas, visualizaciones con Matplotlib y Plotly, informes automatizados' },
          { title: 'Storytelling con Datos', description: 'Presentación de insights de forma clara y persuasiva para diferentes públicos' },
        ],
      },
      sql: {
        title: 'SQL & Ingeniería de Datos',
        description: 'Datos organizados, limpios y listos para generar valor real para tu empresa.',
        features: [
          'Modelado de datos eficiente',
          'Queries optimizadas y performantes',
          'ETL e integración de fuentes',
          'Calidad y gobernanza de datos',
        ],
        modalTitle: 'SQL & Ingeniería de Datos',
        modalDescription: 'Estructuro y organizo tus datos de forma eficiente, garantizando calidad, rendimiento y accesibilidad para análisis.',
        modalFeatures: [
          { title: 'Modelado de Datos', description: 'Creación de estructuras relacionales eficientes y normalizadas' },
          { title: 'SQL Avanzado', description: 'Queries optimizadas, CTEs, Window Functions y procedimientos' },
          { title: 'ETL/ELT', description: 'Integración y transformación de datos de múltiples fuentes' },
          { title: 'Calidad de Datos', description: 'Validación, limpieza y gobernanza de datos' },
        ],
      },
      automation: {
        title: 'Automatización & Pipelines',
        description: 'Procesos manuales transformados en flujos automáticos que trabajan por ti.',
        features: [
          'Automatización completa con N8N',
          'Integración de sistemas y APIs',
          'Workflows automatizados',
          'Eliminación de tareas repetitivas',
        ],
        modalTitle: 'Automatización & Pipelines de Datos',
        modalDescription: 'Automatizo procesos manuales y repetitivos, creando flujos inteligentes que ahorran tiempo y reducen errores.',
        modalFeatures: [
          { title: 'N8N Expert', description: 'Cualquier tipo de automatización: integraciones, notificaciones, sincronizaciones, workflows complejos' },
          { title: 'APIs & Integraciones', description: 'Conexión entre sistemas, webhooks, automatización de procesos entre plataformas' },
          { title: 'Workflows Inteligentes', description: 'Flujos automatizados con lógica condicional y manejo de errores' },
          { title: 'Informes Automáticos', description: 'Generación y envío automatizado de informes por email, Slack, etc.' },
        ],
      },
    },
    // Skills
    skills: {
      subtitle: 'Expertise Técnica',
      title: 'Habilidades &',
      titleHighlight: 'Herramientas',
      description: 'Stack moderna y comprobada para entregar resultados de alto impacto',
      hardSkillsTitle: 'Hard Skills',
      softSkillsTitle: 'Soft Skills',
      footer1: 'Aprendizaje continuo',
      footer2: 'Metodología SCRUM',
      footer3: 'Enfoque en resultados',
      skillItems: {
        powerbi: { name: 'Power BI', description: 'Modelado, dashboards y reportes ejecutivos' },
        excel: { name: 'Excel', description: 'Fórmulas avanzadas, tablas dinámicas y análisis' },
        dax: { name: 'DAX', description: 'Medidas, cálculos e inteligencia de tiempo en Power BI' },
        powerquery: { name: 'Power Query', description: 'ETL, limpieza y transformación de datos' },
        languageM: { name: 'Lenguaje M', description: 'Scripts avanzados en Power Query' },
        storytelling: { name: 'Storytelling de Datos', description: 'Comunicación visual clara y orientada a la decisión' },
        machinelearning: { name: 'Machine Learning', description: 'Modelos predictivos y analítica avanzada' },
        sql: { name: 'SQL', description: 'Consultas optimizadas, joins y modelado relacional' },
        fabric: { name: 'Microsoft Fabric', description: 'Plataforma unificada de datos y analytics' },
        n8n: { name: 'Automatizaciones N8N', description: 'Workflows e integraciones entre sistemas' },
        apachehop: { name: 'Apache Hop', description: 'Pipelines y orquestación de datos' },
        python: { name: 'Python', description: 'Pandas, automatizaciones y análisis de datos' },
        kpis: { name: 'KPIs', description: 'Definición y seguimiento de indicadores' },
        spark: { name: 'Apache Spark', description: 'Procesamiento distribuido de big data' },
        databricks: { name: 'Databricks', description: 'Lakehouse, notebooks e ingeniería de datos' },
        datawarehouse: { name: 'Data Warehouse', description: 'Modelado dimensional y arquitectura analítica' },
        linux: { name: 'Linux', description: 'Terminal, scripts y administración de entornos' },
        ai: { name: 'IA', description: 'IA generativa aplicada y productividad' },
        git: { name: 'Git', description: 'Control de versiones y colaboración' },
        communication: { name: 'Comunicación', description: 'Comunicación clara con áreas de negocio y traducción de datos en decisiones' },
      },
    },
    // About
    about: {
      subtitle: 'Quién soy',
      name: 'João',
      nameHighlight: 'Breno',
      description1: 'Analista de Datos Jr con experiencia en análisis de indicadores, monitoreo y soporte a la toma de decisiones basada en datos. Trabajo en el segmento de redes de computadoras, transformando datos operativos en información estratégica que apoya a clientes, operación y áreas técnicas.',
      description2: 'Perfil analítico, hands-on y enfocado en la identificación de patrones, mejora continua y optimización de procesos, con experiencia en entornos ágiles (Scrum) y contacto directo con clientes y operaciones. Profesional dedicado, con muchas ganas de servir y aprender.',
      valueTitle: '¿Por qué elegirme?',
      valueDescription: 'Combino dominio técnico en Power BI, SQL, Python y automatizaciones (n8n) con visión de negocio y comunicación clara. Entrego dashboards que cuentan historias, KPIs que orientan decisiones y automatizaciones que ahorran tiempo — siempre alineado a la realidad de la operación y del cliente.',
      timeline: {
        education: {
          title: 'Formación & Base Técnica',
          description: 'Base sólida en análisis de datos, SQL, estadística y herramientas de BI, con estudio continuo de Python, Microsoft Fabric e ingeniería de datos.',
        },
        internship: {
          title: 'Analista de Datos — Fimm Brasil (06/2023 – 06/2024)',
          description: 'Proyectos de BI y automatización para CAGECE: recolección y tratamiento de datos con Python, SQL Server y Excel, web scraping en sistemas internos, dashboards en Power BI (Power Query, DAX, modelado) y automatizaciones administrativas.',
        },
        current: {
          title: 'Analista de Datos — UP-ISP (07/2024 – Actual)',
          description: 'Análisis, monitoreo y BI para proveedores de internet: Zabbix, Grafana y Power BI para rendimiento e incidentes; SQL, Python y Microsoft Fabric para extracción y automatización; n8n para flujos internos; interfaz directa con clientes y operación en rutinas Scrum vía Tiflux.',
        },
        next: {
          title: 'Próximos Pasos',
          description: 'Profundización en Microsoft Fabric, Databricks/Spark, Data Warehouse y Machine Learning aplicados a operaciones de red.',
        },
      },
    },
    // Contact
    contact: {
      subtitle: 'Oportunidades',
      title: 'Ponte en',
      titleHighlight: 'Contacto',
      description: '¿Interesado en tener un analista de datos en tu equipo? Hablemos sobre cómo puedo agregar valor a tu equipo.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Oportunidad, proyecto, etc.',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame más sobre la oportunidad...',
      submit: 'Enviar Mensaje',
      submitting: 'Enviando...',
      successTitle: '¡Mensaje enviado!',
      successDescription: 'Gracias por contactarme. ¡Responderé pronto!',
      whyContact: '¿Por qué contratarme?',
      reasons: [
        'Listo para agregar valor al equipo',
        'Experiencia comprobada con datos',
        'Proactivo y comprometido con resultados',
        'Disponible para inicio inmediato',
      ],
      connectWith: 'Conéctate conmigo:',
    },
    // Footer
    footer: {
      madeWith: 'Hecho con',
      in: 'en',
    },
    // Tools
    tools: {
      subtitle: 'Tech Stack',
      title: 'Herramientas &',
      titleHighlight: 'Tecnologías',
      description: 'Las herramientas que domino para entregar soluciones de datos de alto impacto',
      certNote: '+ Certificaciones en Power BI, SQL y metodologías ágiles',
    },
    // Stats
    stats: {
      dashboards: { value: 50, label: 'Dashboards Creados' },
      clients: { value: 15, label: 'Clientes Atendidos' },
      projects: { value: 30, label: 'Proyectos Entregados' },
      experience: { value: 3, label: 'Años de Experiencia' },
    },
    // Testimonials
    testimonials: {
      subtitle: 'Recomendaciones',
      title: 'Lo que dicen',
      titleHighlight: 'sobre mí',
      description: 'Feedback de colegas, gerentes y clientes con quienes he trabajado',
      note: '💡 Puedes agregar testimonios reales de colegas, gerentes o clientes aquí',
      items: [
        {
          quote: 'Tuve la oportunidad de seguir su trabajo y puedo destacar el profesionalismo y la motivación que demuestra en cada desafío. Tiene sólida experiencia en soluciones lógicas y se destaca por la forma en que analiza escenarios y propone soluciones prácticas y eficaces. Más allá de la competencia técnica, también impresiona por su rapidez para aprender nuevas tecnologías y su disposición para compartir conocimiento, agregando mucho valor a los equipos en los que trabaja.',
          author: 'Iarlley Gomes',
          role: 'Analista de Redes | NOC | FCF',
        },
        {
          quote: 'João Breno es una persona disciplinada, talentosa y comunicativa. Tiene gran conocimiento en el área de programación, domina las principales herramientas y siempre se dedica a estudiar para mejorar aún más. Fue muy bueno haber aprendido tanto de él.',
          author: 'Lucas Guilherme',
          role: 'Analista de Datos | Excel | Power BI | SQL',
        },
        {
          quote: 'João Breno es un profesional con excelente dominio en programación, siempre dispuesto a aprender y enfrentar nuevos desafíos. Su dedicación y talento marcan la diferencia en el equipo.',
          author: 'Pedro Davi',
          role: 'Analista de Monitoreo',
        },
        {
          quote: 'João Breno es un profesional que se destaca por su gran conocimiento en programación, su constante deseo de aprender y su rápido razonamiento lógico. Su capacidad de evolución es admirable e inspiradora, mostrando siempre que está listo para enfrentar nuevos desafíos y crecer aún más. ¡Es un privilegio tener a alguien tan dedicado y talentoso en el equipo!',
          author: 'Eduardo Ferreira',
          role: 'Analista de Monitoreo',
        },
        {
          quote: 'Breno es un colaborador que rápidamente gana tu confianza por su capacidad técnica, compromiso y facilidad de relacionamiento. Es un excelente profesional para desarrollo ágil, pues tiene gran facilidad para el trabajo en equipo, se aplica en las actividades y demanda poca gerencia. Recomiendo su trabajo sin dudas. Enfocado en resultados, tiene gran capacidad de convertir proyectos en realidad. Entre sus virtudes destaco su capacidad técnica y la facilidad para captar nuevos conocimientos.',
          author: 'Dnivaldo A O Filho',
          role: 'Analista de Redes y Comunicación de Datos',
        },
      ],
    },
    // Projects
    projects: {
      subtitle: 'Portafolio',
      title: 'Mis',
      titleHighlight: 'Proyectos',
      description: 'Dashboards y soluciones desarrolladas para diferentes áreas de negocio',
      viewProject: 'Ver Proyecto',
      items: [
        {
          id: 'real-x-meta',
          name: 'Real X Meta',
          shortDescription: 'Dashboard de Facturación vs Meta',
          description: `Real X Meta

Objetivo:
Analizar la facturación y el cumplimiento de metas a lo largo del tiempo, comparando períodos e identificando tendencias.

Qué entrega:
• Visión general y evolución temporal de la facturación
• Comparativo Facturación vs Meta por mes
• Análisis Año Actual vs Año Anterior
• Comparación entre períodos distintos

Valor para la empresa:
Apoya decisiones estratégicas con claridad sobre el desempeño comercial y el cumplimiento de metas.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiODQxMmU5YWEtZDJhMC00MGZkLWFkM2QtMTNlODc4OGY0MGU0IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'real-x-meta-comercial',
          name: 'Realizado X Meta Comercial',
          shortDescription: 'Desempeño Comercial Detallado',
          description: `Realizado X Meta Comercial

Objetivo:
Seguir el desempeño comercial detallado por vendedor, gerente y producto, comparando realizado con meta.

Qué entrega:
• KPIs de Facturación, Facturas emitidas y Ticket medio
• Facturación vs Meta por mes y por producto
• Ranking de vendedores y desempeño por gerente
• Identificación de quién cumplió o no la meta

Valor para la empresa:
Orienta acciones comerciales con datos y mejora la productividad del equipo de ventas.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiN2JhY2M4NzAtNzQ2Mi00YjU0LTllYjQtYjJmNGI1MGNiNmU4IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'mr-bolos',
          name: 'Mr Bolos e Doces',
          shortDescription: 'Dashboard Comercial y Estratégico',
          description: `Mr Bolos e Doces

Objetivo:
Analizar facturación, costos y margen de una pastelería, apoyando decisiones de precios y mix de productos.

Qué entrega:
• Visión general de Facturación, Costos y Margen Bruto
• Análisis mensual y promedio de pedidos por día de la semana
• Detalle por tipo, categoría y producto
• Alerta de productos por debajo del margen de seguridad

Valor para la empresa:
Aumenta la rentabilidad al identificar productos deficitarios y optimizar el mix de ventas.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiYTU1NDkzOGYtMWExNi00OWFjLWI2YzYtNjRmMDUzYjAzMjE4IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'real-x-meta-controladoria',
          name: 'Real X Meta Controladoria',
          shortDescription: 'Estado de Resultados - Real vs Previsto',
          description: `Real X Meta Controladoria

Objetivo:
Seguir el Estado de Resultados comparando Real con Previsto por sucursal y período.

Qué entrega:
• Análisis Real vs Meta con AV y AH
• Análisis horizontal, vertical y de gastos
• Detalle por cuenta gerencial y sucursal
• Resultado neto del ejercicio y acumulado

Valor para la empresa:
Ofrece visibilidad contable y gerencial para decisiones financieras basadas en datos confiables.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiZmY0YmVlNzUtOTZjOC00NjdlLTk3NjUtYjJiOGEwZDQwMDU0IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'financeiro-dre',
          name: 'Financeiro - DRE',
          shortDescription: 'Dashboard Financiero Ejecutivo',
          description: `Financeiro - DRE

Objetivo:
Consolidar el Estado de Resultados con una visión ejecutiva de indicadores financieros.

Qué entrega:
• KPIs de Ingresos Netos, Margen de Contribución, EBITDA y Beneficio Neto
• Análisis mes a mes del Estado de Resultados completo
• Análisis Horizontal por cuenta gerencial
• Porcentajes sobre los ingresos brutos

Valor para la empresa:
Facilita la lectura de la salud financiera y apoya decisiones de control de costos e inversiones.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiNGQ5ZDNkMTEtODEyOC00ZDc0LWEyZjctNTYzYWRiYjA5YTk3IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
        {
          id: 'heavy-power-nutrition',
          name: 'Heavy Power Nutrition',
          shortDescription: 'Sales Overview - Suplementos',
          description: `Heavy Power Nutrition

Objetivo:
Analizar las ventas de una cadena de suplementos con visión geográfica, por producto y canal.

Qué entrega:
• KPIs de Gross Sales, Net Sales, Discount y Margin
• Análisis mensual y por tipo de negocio
• Análisis geográfico por ciudad
• Detalle por categoría, subcategoría y producto

Valor para la empresa:
Identifica los productos y regiones más rentables, orientando estrategia comercial y expansión.`,
          link: 'https://app.powerbi.com/view?r=eyJrIjoiNGQzN2U2ZjYtNDFiMS00MGFjLWE2NzItYzQ5OWRjNmU3OWE5IiwidCI6IjVjNTcwY2M3LTNjMDEtNGNmNC04YmQ1LTBmZDc1MWY2Zjg2YiJ9',
        },
      ],
    },
  },
};

export const languageNames: Record<Language, string> = {
  'pt-BR': 'Português',
  'en-US': 'English',
  'es-ES': 'Español',
};

export const languageFlags: Record<Language, string> = {
  'pt-BR': '🇧🇷',
  'en-US': '🇺🇸',
  'es-ES': '🇪🇸',
};
