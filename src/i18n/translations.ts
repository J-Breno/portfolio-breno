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
      "available": "Engenheiro de Dados Júnior · UP-ISP",
      "title1": "João",
      "title2": "Breno",
      "title3": "Engenharia de",
      "title4": "Dados",
      "subtitle": "Conecto sistemas e transformo dados operacionais em bases prontas para análise, com",
      "decideBetter": "pipelines em produção",
      "faster": "integrações ágeis",
      "lessRisk": "dados confiáveis",
      "and": "e",
      "biLabel": "Pipelines",
      "biValue": "Databricks",
      "sqlLabel": "Integrações",
      "sqlValue": "FastAPI",
      "autoLabel": "Cloud",
      "autoValue": "Azure",
      "cta1": "Vamos Conversar",
      "cta2": "Ver Serviços",
      "explore": "Explore"
    },
    // Services
    services: {
      "subtitle": "Da ingestão à análise",
      "title": "Soluções em",
      "titleHighlight": "Dados",
      "description": "Engenharia que conecta fontes, reduz trabalho manual e entrega dados prontos para o negócio.",
      "cta": "Ver Detalhes",
      "bottomText": "Seu desafio começa em fontes desconectadas, dados inconsistentes ou processos manuais?",
      "bottomCta": "Conversar sobre o desafio",
      "modalIncludesLabel": "Como atuo:",
      "modalCtaLabel": "Conversar sobre este desafio",
      "sql": {
        "title": "Pipelines & Engenharia de Dados",
        "description": "Da fonte operacional à tabela de análise: pipelines diários com foco em confiabilidade, qualidade e desempenho.",
        "features": [
          "ETL/ELT com Python, SQL e PySpark",
          "Databricks e Delta Lake no Azure",
          "Ingestão de múltiplas fontes operacionais",
          "Validação e padronização com Pandas e PySpark"
        ],
        "modalTitle": "Pipelines ETL/ELT em Produção",
        "modalDescription": "Na UP-ISP, desenvolvo e mantenho pipelines que integram 5 fontes operacionais e processam cerca de 150 mil registros por dia. Transformo requisitos da operação em dados prontos para consumo.",
        "modalFeatures": [
          {
            "title": "Ingestão integrada",
            "description": "Conexão de fontes operacionais com Python e SQL para alimentar os fluxos de dados."
          },
          {
            "title": "Processamento no Azure",
            "description": "Transformações em Databricks com PySpark, SQL e Delta Lake, em execução diária em produção."
          },
          {
            "title": "Qualidade de dados",
            "description": "Tratamento de nulos, duplicidades e formatos com Pandas e PySpark."
          },
          {
            "title": "Tabelas para análise",
            "description": "Estruturas alinhadas aos requisitos das equipes técnicas e áreas de negócio."
          }
        ]
      },
      "automation": {
        "title": "APIs & Integrações",
        "description": "Sistemas conectados e informações disponíveis em minutos, sem depender de coleta manual.",
        "features": [
          "APIs de integração com FastAPI",
          "Extração com Python, SQL e Requests",
          "Automações operacionais com n8n",
          "Versionamento colaborativo com Git"
        ],
        "modalTitle": "Integrações que Reduzem Trabalho Manual",
        "modalDescription": "Desenvolvi 6 APIs com FastAPI para integrar sistemas internos à ingestão de dados, reduzindo o tempo de disponibilização das informações de horas para minutos.",
        "modalFeatures": [
          {
            "title": "FastAPI",
            "description": "APIs para conectar sistemas internos aos processos de ingestão."
          },
          {
            "title": "Extração automatizada",
            "description": "Experiência com 4 fontes de dados, incluindo APIs REST, bancos e sistemas internos."
          },
          {
            "title": "n8n",
            "description": "Criação de 2 automações para alertas e rotinas operacionais na UP-ISP."
          },
          {
            "title": "Git em equipe",
            "description": "Branches, merges e pull requests para versionamento e colaboração no desenvolvimento."
          }
        ]
      },
      "dataAnalysis": {
        "title": "Dados para BI & Decisão",
        "description": "Uma base sólida em análise para construir dados que respondem às perguntas reais da operação.",
        "features": [
          "Power BI, Power Query e DAX",
          "Modelagem orientada ao consumo analítico",
          "Padronização de CSV, Excel, JSON e Parquet",
          "Indicadores de rede e chamados"
        ],
        "modalTitle": "Engenharia com Visão de Negócio",
        "modalDescription": "Minha experiência em BI aproxima a engenharia de quem consome os dados. Desenvolvi 8 dashboards na UP-ISP e 4 no estágio na Fimm Brasil, para indicadores operacionais da CAGECE.",
        "modalFeatures": [
          {
            "title": "Power BI",
            "description": "Dashboards com Power Query, DAX e modelagem para acompanhamento operacional."
          },
          {
            "title": "Dados consistentes",
            "description": "Tratamento e padronização de arquivos com Python e Pandas para uma base confiável."
          },
          {
            "title": "Indicadores úteis",
            "description": "Acompanhamento de desempenho da rede e chamados para apoiar prioridades de manutenção."
          },
          {
            "title": "Conexão com o negócio",
            "description": "Colaboração com equipes técnicas e áreas de negócio para transformar requisitos em tabelas prontas para análise."
          }
        ]
      }
    },
    // Skills
    skills: {
      subtitle: "Stack em prática",
      title: 'Habilidades &',
      titleHighlight: 'Ferramentas',
      description: "Ferramentas que conectam minha experiência em engenharia de dados, integração e BI.",
      hardSkillsTitle: 'Hard Skills',
      softSkillsTitle: 'Soft Skills',
      footer1: 'Aprendizado contínuo',
      footer2: "Colaboração técnica e negócio",
      footer3: 'Foco em resultados',
      skillItems: {
        pyspark: {"name": "PySpark", "description": "Transformação e validação de dados em pipelines no Databricks"},
        delta: {"name": "Delta Lake", "description": "Tabelas e processamento de dados nos pipelines do Databricks"},
        azure: {"name": "Azure", "description": "Ambiente cloud dos pipelines de dados em produção"},
        fastapi: {"name": "FastAPI", "description": "APIs de integração entre sistemas e ingestão de dados"},
        pandas: {"name": "Pandas", "description": "Tratamento de nulos, duplicidades, formatos e arquivos"},
        powerbi: { name: 'Power BI', description: 'Modelagem, dashboards e relatórios executivos' },
        excel: { name: 'Excel', description: 'Fórmulas avançadas, tabelas dinâmicas e análises' },
        dax: { name: 'DAX', description: 'Medidas, cálculos e inteligência de tempo no Power BI' },
        powerquery: { name: 'Power Query', description: 'ETL, tratamento e transformação de dados' },
        languageM: { name: 'Linguagem M', description: 'Scripts avançados no Power Query' },
        storytelling: { name: 'Storytelling com Dados', description: 'Comunicação visual clara e orientada à decisão' },
        cicd: {"name": "CI/CD", "description": "Integração e entrega contínuas para projetos de dados"},
        sql: { name: 'SQL', description: 'Consultas otimizadas, joins e modelagem relacional' },
        fabric: { name: 'Microsoft Fabric', description: 'Plataforma unificada de dados e analytics' },
        n8n: { name: 'Automações N8N', description: 'Workflows e integrações entre sistemas' },
        airflow: {"name": "Airflow", "description": "Orquestração, agendamento e acompanhamento de pipelines"},
        python: { name: 'Python', description: "Pipelines ETL/ELT, integração e tratamento de dados" },
        dbt: {"name": "dbt", "description": "Transformação de dados com SQL, testes e documentação"},
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
      "subtitle": "Quem sou eu",
      "name": "João",
      "nameHighlight": "Breno",
      "description1": "Sou Engenheiro de Dados Júnior na UP-ISP, com cerca de 3 anos de experiência em dados e mais de 1 ano construindo soluções de engenharia em produção. Desenvolvo pipelines ETL/ELT com Python, SQL, PySpark e Databricks no Azure, conectando a operação a dados confiáveis para análise.",
      "description2": "Minha trajetória começou no BI: antes de construir pipelines, eu já conhecia os desafios de quem precisa usar os dados. Essa base em Power BI, DAX e modelagem me ajuda a traduzir requisitos de negócio em tabelas úteis, não apenas em processos que executam. Hoje, combino essa visão com integrações via FastAPI e validações com Pandas e PySpark.",
      "valueTitle": "Da origem ao dado que o negócio usa",
      "valueDescription": "Na UP-ISP, mantenho pipelines diários que integram 5 fontes e processam cerca de 150 mil registros por dia. Também desenvolvi 6 APIs com FastAPI que substituíram a coleta manual e reduziram a disponibilização das informações de horas para minutos. Meu foco é unir confiabilidade, qualidade e desempenho a uma entrega que faça sentido para a operação.",
      "journeyTitle": "Minha trajetória",
      "currentBadge": "Atual",
      "timeline": {
        "current": {
          "title": "Engenheiro de Dados Júnior — UP-ISP (07/2025 – Atual)",
          "description": "Promovido na mesma empresa. Desenvolvo e mantenho pipelines ETL/ELT em Databricks, PySpark, SQL e Delta Lake no Azure, com execução diária em produção. Integro sistemas com 6 APIs FastAPI, valido nulos, duplicidades e formatos e preparo tabelas para as áreas de negócio."
        },
        "previous": {
          "title": "Analista de Dados Júnior — UP-ISP (07/2024 – 07/2025)",
          "description": "Desenvolvi 8 dashboards Power BI para desempenho da rede e chamados, automatizei a extração de 4 fontes com Python, SQL e Requests e criei 2 automações n8n. Padronizei CSV, Excel, JSON e Parquet com Pandas e trabalhei com Git em equipe."
        },
        "internship": {
          "title": "Estagiário em Análise de Dados — Fimm Brasil (06/2023 – 06/2024)",
          "description": "Desenvolvi 4 dashboards Power BI para indicadores operacionais da CAGECE. Extraí e tratei dados com Python, SQL Server e Excel, utilizei web scraping e participei de automações administrativas para leitura de currículos e análise de e-mails."
        },
        "education": {
          "title": "Pós-graduação em Engenharia de Dados — Em andamento",
          "description": "Aprofundo conhecimentos em arquitetura de pipelines, qualidade de dados e orquestração, conectando os estudos aos desafios que encontro em produção."
        }
      }
    },
    // Contact
    contact: {
      subtitle: "Vamos construir juntos",
      title: 'Entre em',
      titleHighlight: 'Contato',
      description: "Dados fragmentados, ingestão manual ou pipelines que precisam evoluir? Vamos conversar sobre o seu cenário e como minha experiência em engenharia de dados pode contribuir.",
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'seu@email.com',
      subjectLabel: 'Assunto',
      subjectPlaceholder: "Pipelines, integrações, colaboração...",
      messageLabel: 'Mensagem',
      messagePlaceholder: "Qual desafio de dados sua equipe quer resolver?",
      submit: 'Enviar Mensagem',
      submitting: 'Enviando...',
      successTitle: 'Mensagem enviada!',
      successDescription: 'Obrigado pelo contato. Retornarei em breve!',
      whyContact: "O que levo para o seu time",
      reasons: ["Pipelines diários em produção no Azure", "Integrações que levaram dados de horas para minutos", "Qualidade de dados com Pandas e PySpark", "Visão de negócio construída na prática com BI"],
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
      "records": {
        "value": 150000,
        "label": "Registros por dia · cerca de"
      },
      "sources": {
        "value": 5,
        "label": "Fontes nos pipelines diários"
      },
      "apis": {
        "value": 6,
        "label": "APIs FastAPI desenvolvidas"
      },
      "dashboards": {
        "value": 12,
        "label": "Dashboards entre UP-ISP e Fimm"
      }
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
    // Loading screen
    loading: { text: 'Carregando dados...' },
    // 404
    notFound: {
      title: 'Página não encontrada',
      message: 'O endereço que você procurou não existe ou foi movido. Que tal voltar e continuar explorando meu trabalho?',
      cta: 'Voltar para o início',
      tried: 'Você tentou acessar',
    },
    // Projects
    projects: {
      subtitle: 'Portfólio',
      title: 'Meus',
      titleHighlight: 'Projetos',
      description: "Minha base em BI: dashboards que traduzem dados em decisões e orientam minha visão de engenharia.",
      viewProject: 'Ver Projeto',
      previous: 'Anterior',
      next: 'Próximo',
      close: 'Fechar',
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
      "available": "Junior Data Engineer · UP-ISP",
      "title1": "João",
      "title2": "Breno",
      "title3": "Data",
      "title4": "Engineering",
      "subtitle": "I connect systems and turn operational data into analysis-ready tables through",
      "decideBetter": "production pipelines",
      "faster": "efficient integrations",
      "lessRisk": "reliable data",
      "and": "and",
      "biLabel": "Pipelines",
      "biValue": "Databricks",
      "sqlLabel": "Integrations",
      "sqlValue": "FastAPI",
      "autoLabel": "Cloud",
      "autoValue": "Azure",
      "cta1": "Let's Talk",
      "cta2": "See Services",
      "explore": "Explore"
    },
    // Services
    services: {
      "subtitle": "From ingestion to analysis",
      "title": "Data",
      "titleHighlight": "Solutions",
      "description": "Engineering that connects sources, reduces manual work and delivers business-ready data.",
      "cta": "View Details",
      "bottomText": "Disconnected sources, inconsistent data or manual processes slowing your team down?",
      "bottomCta": "Discuss your data challenge",
      "modalIncludesLabel": "How I work:",
      "modalCtaLabel": "Discuss this challenge",
      "sql": {
        "title": "Pipelines & Data Engineering",
        "description": "From operational sources to analysis-ready tables: daily pipelines built for reliability, quality and performance.",
        "features": [
          "ETL/ELT with Python, SQL and PySpark",
          "Databricks and Delta Lake on Azure",
          "Ingestion from multiple operational sources",
          "Validation and standardization with Pandas and PySpark"
        ],
        "modalTitle": "ETL/ELT Pipelines in Production",
        "modalDescription": "At UP-ISP, I develop and maintain pipelines integrating 5 operational sources and processing around 150,000 records daily. I turn operational requirements into usable data.",
        "modalFeatures": [
          {
            "title": "Integrated ingestion",
            "description": "Connecting operational sources with Python and SQL to feed data workflows."
          },
          {
            "title": "Processing on Azure",
            "description": "Daily production transformations in Databricks using PySpark, SQL and Delta Lake."
          },
          {
            "title": "Data quality",
            "description": "Handling nulls, duplicates and inconsistent formats with Pandas and PySpark."
          },
          {
            "title": "Analysis-ready tables",
            "description": "Data structures aligned with technical teams and business requirements."
          }
        ]
      },
      "automation": {
        "title": "APIs & Integrations",
        "description": "Connected systems and information available in minutes, without relying on manual collection.",
        "features": [
          "Integration APIs with FastAPI",
          "Extraction with Python, SQL and Requests",
          "Operational automations with n8n",
          "Collaborative version control with Git"
        ],
        "modalTitle": "Integrations That Reduce Manual Work",
        "modalDescription": "I developed 6 FastAPI APIs to integrate internal systems into data ingestion, reducing data availability time from hours to minutes.",
        "modalFeatures": [
          {
            "title": "FastAPI",
            "description": "APIs connecting internal systems to data ingestion processes."
          },
          {
            "title": "Automated extraction",
            "description": "Experience with 4 data sources, including REST APIs, databases and internal systems."
          },
          {
            "title": "n8n",
            "description": "Built 2 automations for alerts and operational routines at UP-ISP."
          },
          {
            "title": "Teamwork with Git",
            "description": "Branches, merges and pull requests for version control and collaborative development."
          }
        ]
      },
      "dataAnalysis": {
        "title": "Data for BI & Decisions",
        "description": "A solid analytics foundation for building data that answers real operational questions.",
        "features": [
          "Power BI, Power Query and DAX",
          "Modeling for analytical consumption",
          "Standardizing CSV, Excel, JSON and Parquet",
          "Network performance and ticket indicators"
        ],
        "modalTitle": "Engineering with Business Context",
        "modalDescription": "My BI experience brings engineering closer to the people using the data. I developed 8 dashboards at UP-ISP and 4 during my Fimm Brasil internship for CAGECE operational indicators.",
        "modalFeatures": [
          {
            "title": "Power BI",
            "description": "Dashboards with Power Query, DAX and data modeling for operational monitoring."
          },
          {
            "title": "Consistent data",
            "description": "File processing and standardization with Python and Pandas for a reliable data foundation."
          },
          {
            "title": "Useful indicators",
            "description": "Tracking network performance and tickets to support maintenance priorities."
          },
          {
            "title": "Business collaboration",
            "description": "Working with technical and business teams to translate requirements into analysis-ready tables."
          }
        ]
      }
    },
    // Skills
    skills: {
      subtitle: "Hands-on stack",
      title: 'Skills &',
      titleHighlight: 'Tools',
      description: "Tools connecting my experience in data engineering, integration and BI.",
      hardSkillsTitle: 'Hard Skills',
      softSkillsTitle: 'Soft Skills',
      footer1: 'Continuous learning',
      footer2: "Technical and business collaboration",
      footer3: 'Results-focused',
      skillItems: {
        pyspark: {"name": "PySpark", "description": "Data transformation and validation in Databricks pipelines"},
        delta: {"name": "Delta Lake", "description": "Tables and data processing in Databricks pipelines"},
        azure: {"name": "Azure", "description": "Cloud environment for production data pipelines"},
        fastapi: {"name": "FastAPI", "description": "APIs connecting internal systems to data ingestion"},
        pandas: {"name": "Pandas", "description": "Handling nulls, duplicates, formats and files"},
        powerbi: { name: 'Power BI', description: 'Modeling, dashboards and executive reports' },
        excel: { name: 'Excel', description: 'Advanced formulas, pivot tables and analyses' },
        dax: { name: 'DAX', description: 'Measures, calculations and time intelligence in Power BI' },
        powerquery: { name: 'Power Query', description: 'ETL, data cleansing and transformation' },
        languageM: { name: 'M Language', description: 'Advanced scripting in Power Query' },
        storytelling: { name: 'Data Storytelling', description: 'Clear, decision-driven visual communication' },
        cicd: {"name": "CI/CD", "description": "Continuous integration and delivery for data projects"},
        sql: { name: 'SQL', description: 'Optimized queries, joins and relational modeling' },
        fabric: { name: 'Microsoft Fabric', description: 'Unified data and analytics platform' },
        n8n: { name: 'N8N Automations', description: 'Workflows and system integrations' },
        airflow: {"name": "Airflow", "description": "Pipeline orchestration, scheduling and monitoring"},
        python: { name: 'Python', description: "ETL/ELT pipelines, integration and data processing" },
        dbt: {"name": "dbt", "description": "SQL data transformations, testing and documentation"},
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
      "subtitle": "Who I am",
      "name": "João",
      "nameHighlight": "Breno",
      "description1": "I am a Junior Data Engineer at UP-ISP, with around 3 years of experience in data and over a year building data engineering solutions in production. I develop ETL/ELT pipelines with Python, SQL, PySpark and Databricks on Azure, connecting operations to reliable data for analysis.",
      "description2": "My journey started in BI: before building pipelines, I understood the challenges of the people using the data. That foundation in Power BI, DAX and modeling helps me translate business requirements into useful tables, not just processes that run. Today, I combine that perspective with FastAPI integrations and data validation using Pandas and PySpark.",
      "valueTitle": "From source to data the business can use",
      "valueDescription": "At UP-ISP, I maintain daily pipelines integrating 5 sources and processing around 150,000 records per day. I also developed 6 FastAPI APIs that replaced manual collection and cut data availability time from hours to minutes. My focus is reliability, quality and performance, with delivery grounded in operational needs.",
      "journeyTitle": "My journey",
      "currentBadge": "Current",
      "timeline": {
        "current": {
          "title": "Junior Data Engineer — UP-ISP (07/2025 – Present)",
          "description": "Promoted within the same company. I develop and maintain daily production ETL/ELT pipelines using Databricks, PySpark, SQL and Delta Lake on Azure. I integrate systems through 6 FastAPI APIs, validate nulls, duplicates and formats, and prepare tables for business teams."
        },
        "previous": {
          "title": "Junior Data Analyst — UP-ISP (07/2024 – 07/2025)",
          "description": "Developed 8 Power BI dashboards for network performance and tickets, automated extraction from 4 sources using Python, SQL and Requests, and created 2 n8n automations. Standardized CSV, Excel, JSON and Parquet with Pandas and collaborated using Git."
        },
        "internship": {
          "title": "Data Analysis Intern — Fimm Brasil (06/2023 – 06/2024)",
          "description": "Developed 4 Power BI dashboards for CAGECE operational indicators. Extracted and processed data with Python, SQL Server and Excel, used web scraping and contributed to administrative automations for résumé processing and email analysis."
        },
        "education": {
          "title": "Postgraduate Studies in Data Engineering — In progress",
          "description": "Deepening my knowledge of pipeline architecture, data quality and orchestration, connecting my studies to the challenges I encounter in production."
        }
      }
    },
    // Contact
    contact: {
      subtitle: "Let's build together",
      title: 'Get in',
      titleHighlight: 'Touch',
      description: "Fragmented data, manual ingestion or pipelines that need to evolve? Let’s discuss your context and how my data engineering experience can contribute.",
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: "Pipelines, integrations, collaboration...",
      messageLabel: 'Message',
      messagePlaceholder: "What data challenge does your team want to solve?",
      submit: 'Send Message',
      submitting: 'Sending...',
      successTitle: 'Message sent!',
      successDescription: 'Thanks for reaching out. I\'ll get back to you soon!',
      whyContact: "What I bring to your team",
      reasons: ["Daily production pipelines on Azure", "Integrations that cut data delivery from hours to minutes", "Data quality with Pandas and PySpark", "Business context built through hands-on BI"],
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
      "records": {
        "value": 150000,
        "label": "Records per day · approximately"
      },
      "sources": {
        "value": 5,
        "label": "Sources in daily pipelines"
      },
      "apis": {
        "value": 6,
        "label": "FastAPI APIs developed"
      },
      "dashboards": {
        "value": 12,
        "label": "Dashboards across UP-ISP and Fimm"
      }
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
    // Loading screen
    loading: { text: 'Loading data...' },
    // 404
    notFound: {
      title: 'Page not found',
      message: "The address you looked for doesn't exist or has been moved. Let's head back and keep exploring my work.",
      cta: 'Back to home',
      tried: 'You tried to access',
    },
    // Projects
    projects: {
      subtitle: 'Portfolio',
      title: 'My',
      titleHighlight: 'Projects',
      description: "My BI foundation: dashboards that turn data into decisions and shape my engineering perspective.",
      viewProject: 'View Project',
      previous: 'Previous',
      next: 'Next',
      close: 'Close',
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
      "available": "Ingeniero de Datos Júnior · UP-ISP",
      "title1": "João",
      "title2": "Breno",
      "title3": "Ingeniería de",
      "title4": "Datos",
      "subtitle": "Conecto sistemas y transformo datos operativos en tablas listas para el análisis, con",
      "decideBetter": "pipelines en producción",
      "faster": "integraciones ágiles",
      "lessRisk": "datos fiables",
      "and": "y",
      "biLabel": "Pipelines",
      "biValue": "Databricks",
      "sqlLabel": "Integraciones",
      "sqlValue": "FastAPI",
      "autoLabel": "Cloud",
      "autoValue": "Azure",
      "cta1": "Hablemos",
      "cta2": "Ver Servicios",
      "explore": "Explorar"
    },
    // Services
    services: {
      "subtitle": "De la ingesta al análisis",
      "title": "Soluciones de",
      "titleHighlight": "Datos",
      "description": "Ingeniería que conecta fuentes, reduce el trabajo manual y entrega datos listos para el negocio.",
      "cta": "Ver Detalles",
      "bottomText": "¿Fuentes desconectadas, datos inconsistentes o procesos manuales que frenan a tu equipo?",
      "bottomCta": "Hablemos de tu reto",
      "modalIncludesLabel": "Cómo trabajo:",
      "modalCtaLabel": "Hablar sobre este reto",
      "sql": {
        "title": "Pipelines e Ingeniería de Datos",
        "description": "De la fuente operativa a la tabla de análisis: pipelines diarios centrados en fiabilidad, calidad y rendimiento.",
        "features": [
          "ETL/ELT con Python, SQL y PySpark",
          "Databricks y Delta Lake en Azure",
          "Ingesta de múltiples fuentes operativas",
          "Validación y estandarización con Pandas y PySpark"
        ],
        "modalTitle": "Pipelines ETL/ELT en Producción",
        "modalDescription": "En UP-ISP desarrollo y mantengo pipelines que integran 5 fuentes operativas y procesan cerca de 150.000 registros al día. Transformo requisitos operativos en datos listos para su uso.",
        "modalFeatures": [
          {
            "title": "Ingesta integrada",
            "description": "Conexión de fuentes operativas con Python y SQL para alimentar los flujos de datos."
          },
          {
            "title": "Procesamiento en Azure",
            "description": "Transformaciones diarias en producción en Databricks con PySpark, SQL y Delta Lake."
          },
          {
            "title": "Calidad de datos",
            "description": "Tratamiento de nulos, duplicados y formatos con Pandas y PySpark."
          },
          {
            "title": "Tablas para análisis",
            "description": "Estructuras alineadas con los requisitos de los equipos técnicos y las áreas de negocio."
          }
        ]
      },
      "automation": {
        "title": "APIs e Integraciones",
        "description": "Sistemas conectados e información disponible en minutos, sin depender de la recopilación manual.",
        "features": [
          "APIs de integración con FastAPI",
          "Extracción con Python, SQL y Requests",
          "Automatizaciones operativas con n8n",
          "Control de versiones colaborativo con Git"
        ],
        "modalTitle": "Integraciones que Reducen el Trabajo Manual",
        "modalDescription": "Desarrollé 6 APIs con FastAPI para integrar sistemas internos en la ingesta de datos, reduciendo la disponibilidad de la información de horas a minutos.",
        "modalFeatures": [
          {
            "title": "FastAPI",
            "description": "APIs para conectar sistemas internos con los procesos de ingesta."
          },
          {
            "title": "Extracción automatizada",
            "description": "Experiencia con 4 fuentes de datos, incluidas APIs REST, bases de datos y sistemas internos."
          },
          {
            "title": "n8n",
            "description": "Creación de 2 automatizaciones para alertas y rutinas operativas en UP-ISP."
          },
          {
            "title": "Git en equipo",
            "description": "Branches, merges y pull requests para el control de versiones y el desarrollo colaborativo."
          }
        ]
      },
      "dataAnalysis": {
        "title": "Datos para BI y Decisiones",
        "description": "Una base sólida en análisis para construir datos que responden a las preguntas reales de la operación.",
        "features": [
          "Power BI, Power Query y DAX",
          "Modelado para el consumo analítico",
          "Estandarización de CSV, Excel, JSON y Parquet",
          "Indicadores de red y tickets"
        ],
        "modalTitle": "Ingeniería con Visión de Negocio",
        "modalDescription": "Mi experiencia en BI acerca la ingeniería a quienes utilizan los datos. Desarrollé 8 dashboards en UP-ISP y 4 durante mis prácticas en Fimm Brasil, para indicadores operativos de CAGECE.",
        "modalFeatures": [
          {
            "title": "Power BI",
            "description": "Dashboards con Power Query, DAX y modelado para el seguimiento operativo."
          },
          {
            "title": "Datos consistentes",
            "description": "Tratamiento y estandarización de archivos con Python y Pandas para una base fiable."
          },
          {
            "title": "Indicadores útiles",
            "description": "Seguimiento del rendimiento de la red y los tickets para apoyar las prioridades de mantenimiento."
          },
          {
            "title": "Colaboración con el negocio",
            "description": "Trabajo con equipos técnicos y áreas de negocio para traducir requisitos en tablas listas para el análisis."
          }
        ]
      }
    },
    // Skills
    skills: {
      subtitle: "Stack en práctica",
      title: 'Habilidades &',
      titleHighlight: 'Herramientas',
      description: "Herramientas que conectan mi experiencia en ingeniería de datos, integración y BI.",
      hardSkillsTitle: 'Hard Skills',
      softSkillsTitle: 'Soft Skills',
      footer1: 'Aprendizaje continuo',
      footer2: "Colaboración técnica y de negocio",
      footer3: 'Enfoque en resultados',
      skillItems: {
        pyspark: {"name": "PySpark", "description": "Transformación y validación de datos en pipelines de Databricks"},
        delta: {"name": "Delta Lake", "description": "Tablas y procesamiento de datos en pipelines de Databricks"},
        azure: {"name": "Azure", "description": "Entorno cloud de los pipelines de datos en producción"},
        fastapi: {"name": "FastAPI", "description": "APIs que conectan sistemas internos con la ingesta de datos"},
        pandas: {"name": "Pandas", "description": "Tratamiento de nulos, duplicados, formatos y archivos"},
        powerbi: { name: 'Power BI', description: 'Modelado, dashboards y reportes ejecutivos' },
        excel: { name: 'Excel', description: 'Fórmulas avanzadas, tablas dinámicas y análisis' },
        dax: { name: 'DAX', description: 'Medidas, cálculos e inteligencia de tiempo en Power BI' },
        powerquery: { name: 'Power Query', description: 'ETL, limpieza y transformación de datos' },
        languageM: { name: 'Lenguaje M', description: 'Scripts avanzados en Power Query' },
        storytelling: { name: 'Storytelling de Datos', description: 'Comunicación visual clara y orientada a la decisión' },
        cicd: {"name": "CI/CD", "description": "Integración y entrega continuas para proyectos de datos"},
        sql: { name: 'SQL', description: 'Consultas optimizadas, joins y modelado relacional' },
        fabric: { name: 'Microsoft Fabric', description: 'Plataforma unificada de datos y analytics' },
        n8n: { name: 'Automatizaciones N8N', description: 'Workflows e integraciones entre sistemas' },
        airflow: {"name": "Airflow", "description": "Orquestación, programación y seguimiento de pipelines"},
        python: { name: 'Python', description: "Pipelines ETL/ELT, integración y tratamiento de datos" },
        dbt: {"name": "dbt", "description": "Transformación de datos con SQL, pruebas y documentación"},
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
      "subtitle": "Quién soy",
      "name": "João",
      "nameHighlight": "Breno",
      "description1": "Soy Ingeniero de Datos Júnior en UP-ISP, con cerca de 3 años de experiencia en datos y más de un año desarrollando soluciones de ingeniería en producción. Desarrollo pipelines ETL/ELT con Python, SQL, PySpark y Databricks en Azure, conectando la operación con datos fiables para el análisis.",
      "description2": "Mi trayectoria comenzó en BI: antes de construir pipelines, ya conocía los retos de quienes utilizan los datos. Esa base en Power BI, DAX y modelado me ayuda a traducir requisitos de negocio en tablas útiles, no solo en procesos que se ejecutan. Hoy combino esa perspectiva con integraciones mediante FastAPI y validaciones con Pandas y PySpark.",
      "valueTitle": "Del origen al dato que el negocio utiliza",
      "valueDescription": "En UP-ISP mantengo pipelines diarios que integran 5 fuentes y procesan cerca de 150.000 registros al día. También desarrollé 6 APIs con FastAPI que sustituyeron la recopilación manual y redujeron la disponibilidad de la información de horas a minutos. Mi enfoque une fiabilidad, calidad y rendimiento con las necesidades de la operación.",
      "journeyTitle": "Mi trayectoria",
      "currentBadge": "Actual",
      "timeline": {
        "current": {
          "title": "Ingeniero de Datos Júnior — UP-ISP (07/2025 – Actualidad)",
          "description": "Ascenso dentro de la misma empresa. Desarrollo y mantengo pipelines ETL/ELT diarios en producción con Databricks, PySpark, SQL y Delta Lake en Azure. Integro sistemas mediante 6 APIs FastAPI, valido nulos, duplicados y formatos y preparo tablas para las áreas de negocio."
        },
        "previous": {
          "title": "Analista de Datos Júnior — UP-ISP (07/2024 – 07/2025)",
          "description": "Desarrollé 8 dashboards Power BI para el rendimiento de la red y los tickets, automaticé la extracción de 4 fuentes con Python, SQL y Requests y creé 2 automatizaciones n8n. Estandaricé CSV, Excel, JSON y Parquet con Pandas y colaboré con Git."
        },
        "internship": {
          "title": "Prácticas en Análisis de Datos — Fimm Brasil (06/2023 – 06/2024)",
          "description": "Desarrollé 4 dashboards Power BI para indicadores operativos de CAGECE. Extraje y procesé datos con Python, SQL Server y Excel, utilicé web scraping y participé en automatizaciones administrativas para procesar currículos y analizar correos."
        },
        "education": {
          "title": "Posgrado en Ingeniería de Datos — En curso",
          "description": "Profundizo en arquitectura de pipelines, calidad de datos y orquestación, conectando los estudios con los retos que encuentro en producción."
        }
      }
    },
    // Contact
    contact: {
      subtitle: "Construyamos juntos",
      title: 'Ponte en',
      titleHighlight: 'Contacto',
      description: "¿Datos fragmentados, ingesta manual o pipelines que necesitan evolucionar? Hablemos de tu contexto y de cómo mi experiencia en ingeniería de datos puede contribuir.",
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: "Pipelines, integraciones, colaboración...",
      messageLabel: 'Mensaje',
      messagePlaceholder: "¿Qué reto de datos quiere resolver tu equipo?",
      submit: 'Enviar Mensaje',
      submitting: 'Enviando...',
      successTitle: '¡Mensaje enviado!',
      successDescription: 'Gracias por contactarme. ¡Responderé pronto!',
      whyContact: "Lo que aporto a tu equipo",
      reasons: ["Pipelines diarios en producción en Azure", "Integraciones que redujeron la entrega de horas a minutos", "Calidad de datos con Pandas y PySpark", "Visión de negocio construida en la práctica con BI"],
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
      "records": {
        "value": 150000,
        "label": "Registros al día · aproximadamente"
      },
      "sources": {
        "value": 5,
        "label": "Fuentes en los pipelines diarios"
      },
      "apis": {
        "value": 6,
        "label": "APIs FastAPI desarrolladas"
      },
      "dashboards": {
        "value": 12,
        "label": "Dashboards entre UP-ISP y Fimm"
      }
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
    // Loading screen
    loading: { text: 'Cargando datos...' },
    // 404
    notFound: {
      title: 'Página no encontrada',
      message: 'La dirección que buscabas no existe o se ha movido. ¿Te parece volver y seguir explorando mi trabajo?',
      cta: 'Volver al inicio',
      tried: 'Has intentado acceder a',
    },
    // Projects
    projects: {
      subtitle: 'Portafolio',
      title: 'Mis',
      titleHighlight: 'Proyectos',
      description: "Mi base en BI: dashboards que traducen datos en decisiones y orientan mi visión de ingeniería.",
      viewProject: 'Ver Proyecto',
      previous: 'Anterior',
      next: 'Siguiente',
      close: 'Cerrar',
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
