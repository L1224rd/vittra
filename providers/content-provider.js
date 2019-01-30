// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const bodyParser = require('body-parser');

// ==================== INTERNAL IMPORTS ==================== //

require('./database-provider');

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

const data = {
  app: {
    info: {
      phone: '(81) 4101-7433',
      address: {
        street: 'Rua Hermílio Gomes, 278',
        city: 'Campo Grande, Recife/PE',
        complement: '',
        lat: '',
        long: '',
        mapUrl: 'https://www.google.com/maps/d/embed?mid=1V3Sjg7Bzz-Imk5cH-j5nC_DYiB_CfLfZ'
      },
      facebook_link: 'https://www.facebook.com/viitrainovacoes/',
      instagram_link: 'https://www.instagram.com/viitrainovacoes/',
      linkedin_link: 'https://www.linkedin.com/company/viitrainovacoes/',
      email: 'contato@viitra.com',
    },
    items: [
      { label: 'Home', link: '/home' },
      { label: 'Quem somos', link: '/sobre' },
      { label: 'Soluções', link: '/solucoes' },
      { label: 'Contato', link: '/contato' },
    ]
  },
  home: {
    banner: {
      title: 'Soluções inovadoras',
      description: 'para negócios de alto impacto'
    },
    solutions: {
      title: 'Áreas de atuação',
      description: '',
      cards: [
        {
          title: 'Soluções Educacionais',
          text: 'Nossas soluções de aprendizagem são otimizadas para os objetivos estratégicos do seu negócio. Além de fornecer plataforma e aplicativos, também produzimos diversos tipos de mídia como ebooks, vídeos, infográficos, questões, etc; todos adequados ao contexto e com o objetivo de tornar o processo de aprendizagem mais leve e mais dinâmico.',
          imageUrl: 'static/images/headers/solutions-edu.jpg',
          link: '/solucoes/educacionais',
          class: 'large-size',
        },
        {
          title: 'Gestão de Estágios',
          text: 'A solução de estágios proporciona a conexão entre estudante, instituição de ensino e empresas, visando a inclusão e acompanhamento do aluno no mercado de trabalho através de conteúdos preparatórios, captação e divulgação de oportunidades, gerenciamento de estágios e muito mais.',
          imageUrl: 'static/images/headers/solutions-est.jpg',
          link: '/solucoes/gestao-de-estagios',
          class: 'large-size',
        },
        {
          title: 'Comunicação Institucional',
          text: 'Nossa plataforma veicula notícias através Smartphones (Android e iOS) e SmartTVs para integrantes internos e externos à instituição. A solução possui integração automática com portais de conteúdos e proporciona interação entre os usuários.',
          imageUrl: 'static/images/headers/solutions-com.jpg',
          link: '/solucoes/comunicacao-institucional',
          class: 'large-size',
        },
        {
          title: 'Visualização de Dados',
          text: 'Possuímos equipe especializada em inteligência e análise de negócios (Business Intelligence) para desenvolvimento de painéis de visualizações integrados com as bases de dados da sua organização.',
          imageUrl: 'static/images/headers/solutions-vis.jpg',
          link: '/solucoes/visualizacao-de-dados',
          class: 'medium-size',
        },
        {
          title: 'Projetos Personalizados',
          text: 'Deseja adquirir um projeto personalizado para a sua empresa? Confira as diversas vantagens que nosso desenvolvimento customizado pode trazer para o seu negócio.',
          imageUrl: 'static/images/headers/solutions-pro.jpg',
          link: '/solucoes/projetos-personalizados',
          class: 'medium-size',
        },
      ],
    },
    callToAction: {
      title: {
        before: 'Potencialize',
        after: 'seu negócio!'
      },
      class: 'bg-gray',
      button: {
        text: 'Entre em contato!',
        link: '/contato'
      }
    },
    partners: [
      {
        imageUrl: 'static/images/partners/ufpe.png',
        link: ''
      },
      {
        imageUrl: 'static/images/partners/cin.png',
        link: ''
      },
      /*{
          imageUrl: 'static/images/partners/sebrae.png',
          link: ''
      },*/
      {
        imageUrl: 'static/images/partners/pesqueira.png',
        link: ''
      },
      {
        imageUrl: 'static/images/partners/samsung.png',
        link: ''
      },
      /*{
          imageUrl: 'static/images/partners/aneel.png',
          link: ''
      },*/
      {
        imageUrl: 'static/images/partners/isiti.png',
        link: ''
      },
      {
        imageUrl: 'static/images/partners/fade.png',
        link: ''
      },
      {
        imageUrl: 'static/images/partners/facepe.png',
        link: ''
      },
      {
        imageUrl: 'static/images/partners/mundoeducacional.png',
        link: ''
      },
      {
        imageUrl: 'static/images/partners/emitter.png',
        link: ''
      },
      {
        imageUrl: 'static/images/partners/positiva.png',
        link: ''
      },
      /*{
          imageUrl: 'static/images/partners/elcoma.png',
          link: ''
      },*/
      {
        imageUrl: 'static/images/partners/informe.png',
        link: ''
      },
      {
        imageUrl: 'static/images/partners/i9up.png',
        link: ''
      },
      {
        imageUrl: 'static/images/partners/nutes.png',
        link: ''
      },
    ],
    contact: {
      title: 'Fale conosco',
      description: 'Queremos te ouvir! Conte conosco para dar o próximo passo no seu negócio. Preencha o formulário com os seus dados e um integrante de nossa equipe entrará em contato para identificar melhor as suas necessidades.',
    }
  },
  solutions: {
    title: 'Conheça as soluções que a Viitra pode te oferecer',
    subtitle: 'Nossas atividades são focadas em inovar e melhorar os ambientes organizacionais para pessoas e empresas. Desenvolvemos e fornecemos soluções tecnológicas com qualidade, profissionalismo e ética.',
    cards: [
      {
        title: 'Soluções Educacionais',
        text: 'Nossas soluções de aprendizagem são otimizadas para os objetivos estratégicos do seu negócio. Além de fornecer plataforma e aplicativos, também produzimos diversos tipos de mídia como ebooks, vídeos, infográficos, questões, etc; todos adequados ao contexto e com o objetivo de tornar o processo de aprendizagem mais leve e mais dinâmico.',
        imageUrl: 'static/images/solutions/educational/card.jpg',
        link: '/solucoes/educacionais',
        class: {
          img: 'edu',
          size: 'large-size'
        },
      },
      {
        title: 'Gestão de Estágios',
        text: 'A solução de estágios proporciona a conexão entre estudante, instituição de ensino e empresas, visando a inclusão e acompanhamento do aluno no mercado de trabalho através de conteúdos preparatórios, captação e divulgação de oportunidades, gerenciamento de estágios e muito mais.',
        imageUrl: 'static/images/solutions/educational/card.jpg',
        link: '/solucoes/gestao-de-estagios',
        class: {
          img: 'est',
          size: 'large-size'
        },
      },
      {
        title: 'Comunicação Institucional',
        text: 'Nossa plataforma veicula notícias através Smartphones (Android e iOS) e SmartTVs para integrantes internos e externos à instituição. A solução possui integração automática com portais de conteúdos e proporciona interação entre os usuários.',
        imageUrl: 'static/images/solutions/educational/card.jpg',
        link: '/solucoes/comunicacao-institucional',
        class: {
          img: 'com',
          size: 'large-size'
        },
      },
      {
        title: 'Visualização de Dados',
        text: 'Possuímos equipe especializada em inteligência e análise de negócios (Business Intelligence) para desenvolvimento de painéis de visualizações integrados com as bases de dados da sua organização.',
        imageUrl: 'static/images/solutions/educational/card.jpg',
        link: '/solucoes/visualizacao-de-dados',
        class: {
          img: 'vis',
          size: 'medium-size'
        },
      },
      {
        title: 'Projetos Personalizados',
        text: 'Deseja adquirir um projeto personalizado para a sua empresa? Confira as diversas vantagens que nosso desenvolvimento customizado pode trazer para o seu negócio.',
        imageUrl: 'static/images/solutions/educational/card.jpg',
        link: '/solucoes/projetos-personalizados',
        class: {
          img: 'pro',
          size: 'medium-size'
        },
      },
    ],
    callToAction: {
      title: {
        before: 'Ficou alguma',
        after: 'dúvida?'
      },
      class: '',
      button: {
        text: 'Entre em contato!',
        link: '/contato'
      }
    },
  },
  specificsolutions: {
    header: {
      title: 'Soluções Educacionais',
      description: 'Nossas soluções de aprendizagem são otimizadas para os objetivos estratégicos do seu negócio. Desenvolvemos diversas mídias, desde ebooks a jogos, vídeos, aulas online e infográficos. Além disso, construímos ou adequamos o conteúdo com o objetivo de tornar o processo de aprendizagem mais leve e mais dinâmico.'
    },
    solutionItems: [
      {
        title: 'Ambiente Virtual de Aprendizagem',
        description: `
                <p>Plataforma educacional com formato de rede social que promove o engajamento dentro e fora da sala de aula através de um ambiente interativo e colaborativo onde o foco é o aprendizado.</p>
                <p>Alunos e educadores podem tirar dúvidas, preparar exercícios e compartilhar material didático (textos, vídeos e livros) pelo sistema, aproveitando as diversas formas de interação que só uma rede social proporciona.</p>
            `,
        imageArea: {
          type: 'gallery',
          images: [
            {
              src: '/static/images/solutions/educational/carousel-openredu/1.png',
              caption: 'Aula multimídia'
            },
            {
              src: '/static/images/solutions/educational/carousel-openredu/2.png',
              caption: 'Mural de discussão'
            },
            {
              src: '/static/images/solutions/educational/carousel-openredu/3.png',
              caption: 'Banco do questões'
            },
            {
              src: '/static/images/solutions/educational/carousel-openredu/4.png',
              caption: 'Troca de mensagens'
            },
            {
              src: '/static/images/solutions/educational/carousel-openredu/5.png',
              caption: 'Emblemas conquistados'
            },
            {
              src: '/static/images/solutions/educational/carousel-openredu/6.png',
              caption: 'Leaderbord de usuários'
            },
            {
              src: '/static/images/solutions/educational/carousel-openredu/7.png',
              caption: 'Atualizações no mural'
            },
            {
              src: '/static/images/solutions/educational/carousel-openredu/8.png',
              caption: 'Ferramentas de acessibilidade'
            },
          ]
        },
        topics: [
          { title: 'Organização de mídias digitais diversas' },
          { title: 'Interação entre usuários' },
          { title: 'Sistema de gamificação' },
          { title: 'Acompanhamento da aprendizagem' },
          { title: 'Banco de questões' },
          { title: 'Visualização e exportação de relatórios gerenciais' },
          { title: 'Customização e identidade visual' },
          { title: 'Simplicidade de uso e de formação' },
          { title: 'Ferramentas de acessibilidade' },
          { title: 'Aplicativo para Android e iOS' },
        ]
      },
      {
        title: 'Produção de Conteúdo',
        description: `
                <p>Há diversas dificuldades nos inúmeros processos que envolvem as áreas de e-learning para que o material educacional seja produzido e disponibilizado ao aluno. Nossa equipe pedagógica é composta por mestres e doutores especialistas na criação desses tipos de conteúdos.</p>
            `,
        imageArea: {
          type: 'image',
          src: '/static/images/solutions/educational/edu-figure-5.jpg'
        },
      },
      {
        title: 'Transposição de conteúdo',
        description: `
                <p>Somos especialistas em converter cursos tradicionais (com material didático em em livros e powerpoints) para o formato e-Learning, mais exclusivo e interativo. Nossa preocupação é com a perspectiva instrucional e a concepção de conteúdos antes de transpor os cursos tradicionais para o formato digital.</p>
            `,
        imageArea: {
          type: 'image',
          src: '/static/images/solutions/educational/edu-figure-2.jpg'
        },
      },
      {
        title: 'Formação de Tutores e Mediadores',
        description: `
                <p>Desenvolvemos nos participantes competências associadas à tutoria voltada para EAD, como familiaridade com o Ambiente Virtual de Aprendizagem, habilidades de motivação, acompanhamento e atendimento ao aluno, bem como praticar a mediação ao longo do curso.</p>
            `,
        imageArea: {
          type: 'image',
          src: '/static/images/solutions/educational/edu-figure-9.jpg'
        },
      },
      {
        title: 'Plataforma de Gestão Escolar',
        description: `
                <p>Nosso sistema de gestão escolar descomplica e torna mais eficaz a gestão dos processos escolares pelas secretarias de educação e escolas. Com ele é possível realizar o acompanhamento das informações em tempo real a partir de consultas e emissão de relatórios.</p>
            `,
        imageArea: {
          type: 'gallery',
          images: [
            {
              src: '/static/images/solutions/educational/carousel-ieducar/1.png',
              caption: 'Ficha cadastral do aluno'
            },
            {
              src: '/static/images/solutions/educational/carousel-ieducar/2.png',
              caption: 'Cadastro de séries'
            },
            {
              src: '/static/images/solutions/educational/carousel-ieducar/3.png',
              caption: 'Detalhes do curso'
            },
            {
              src: '/static/images/solutions/educational/carousel-ieducar/4.png',
              caption: 'Histórico escolar'
            },
            {
              src: '/static/images/solutions/educational/carousel-ieducar/5.png',
              caption: 'Quadro de horário'
            },
            {
              src: '/static/images/solutions/educational/carousel-ieducar/6.png',
              caption: 'Estrutura de cadastros'
            },
          ]
        },
        topics: [
          { title: 'Escolas, Séries e Turmas' },
          { title: 'Alunos, Professores e Servidores' },
          { title: 'Matrícula e Histórico Escolar' },
          { title: 'Notas e Diário de Classe' },
          { title: 'Relatórios gerenciais' },
          { title: 'Importação e Exportação para Educacenso/INEP' },
          { title: 'Biblioteca e Transporte Escolar' },
        ]
      },
      {
        title: 'Viitra Analytics',
        description: `
                <p>Uma plataforma de visualização que tem como objetivo dar vida aos dados educacionais para auxiliar gestores, diretores, professores e todos os interessados a fazerem melhores escolhas na educação. O sistema conta com tecnologias inovadoras de análise de dados educacionais e possui design moderno para facilitar o acesso às informações.</p>
            `,
        imageArea: {
          type: '',
          src: ''
        },
      },
    ]
  }
};

// ==================== MIDDLEWARE ==================== //

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ==================== FUNCTIONS ==================== //

// not a good practice, but this way we have way less code
// use to get the models dynamically
const getSession = section => require(`../models/${section}-model`);

// ==================== ROUTES ==================== //

app.get('/', (req, res) => {
  res.send(data);
});

app.get('/:section', (req, res) => {
  res.send(data[req.params.section]);
});

// Needs to be finifhed...
// app.get('/:section', (req, res) => {
//   getSession(req.params.section).findOne({}, (err, data) => {
//     if (err) {
//       res.send(err);
//       return;
//     }
//     res.send(data);
//   });
// });

app.post('/:section', (req, res) => {
  getSession(req.params.section).findOneAndUpdate({}, req.body, (err, doc) => {
    if (err) {
      res.send(err);
      return;
    }
    if (!doc) {
      getSession(req.params.section).create(req.body, (err2) => {
        if (err2) {
          res.send(err2);
          return;
        }
        res.send('ok');
      });
    } else {
      res.send('ok');
    }
  });
});

// ================================================ //

module.exports = app;
