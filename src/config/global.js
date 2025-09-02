export default {
  global: {
    Name:
      'Fundamentos técnicos del patronaje para bolsos tipo <em>Messenger</em>',
    Description:
      'El componente formativo Fundamentos técnicos del patronaje para bolsos tipo <em>Messenger</em> aborda la morfología del bolso, funciones de sus partes y principios de patronaje para precisión, funcionalidad y estandarización. Incluye análisis de materiales, su impacto en moldes y producto final, así como la interpretación de especificaciones técnicas. Su enfoque práctico virtual fortalece competencias en el sector marroquinero.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Componentes del bolso tipo <em>Messenger</em>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Materiales e insumos para marroquinería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cueros',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Materiales sintéticos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Textiles',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Agujas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Hilos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fases del proceso productivo de marroquinería',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tipos de construcción del bolso <em>Messenger</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tipos de acabados en la confección de bolsos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Fichas técnicas de diseño en marroquinería',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Materiales e insumos para marroquinería',
      referencia:
        'Fabros Ec. (2025). Tipos de Cuero: ¿Cuál es el Mejor para Marroquinería? | Guía Completa FABROS". [Archivo de video] Youtube.  ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=uC0gF4rOo_s&ab_channel=FabrosEc ',
    },
    {
      tema: 'Tipos de construcción del bolso <em>Messenger</em>',
      referencia:
        'Von Baer. (2025, 9 abril). Tipos de bolsos de mensajero y guía de estilos. ',
      tipo: 'Página web',
      link:
        'https://vonbaer.com/blogs/blog/mens-<em>Messenger</em>-bag-guide-how-to-choose-the-right-shoulder-bag?srsltid=AfmBOooNicqFIurbzvGQn-np9XZAWMbZtpUUsCaR-IDsChDHrE27s0Jl ',
    },
  ],
  glosario: [
    {
      termino: 'Agujas',
      significado:
        'herramientas metálicas que perforan el material y transportan el hilo durante la costura. se clasifican por sistema.',
    },
    {
      termino: 'Componentes del bolso',
      significado:
        'conjunto de piezas que estructuran y dan funcionalidad al bolso, como tapa, cuerpo frontal, trasero, fuelle, base, correas, bolsillos, forro, cremalleras, chapetas, manija, organizadores, terminales, sliders, contra tapa y refuerzos internos (almas).',
    },
    {
      termino: 'Cuero',
      significado:
        'material natural obtenido de la piel de animales, principalmente vacuno, que se somete a un proceso de curtido para hacerlo resistente y flexible. se utiliza en la fabricación de marroquinería por su durabilidad, confort y capacidad de adaptarse a la forma del pie.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento técnico que reúne toda la información necesaria para fabricar un producto: bocetos, materiales, moldes, procesos, costuras, herrajes y acabados.',
    },
    {
      termino: 'Hilos',
      significado:
        'fibras trenzadas de nylon, poliéster o algodón que permiten unir piezas mediante costura. deben tener alta resistencia, flexibilidad y compatibilidad con el material y la máquina.',
    },
    {
      termino: 'Sintético',
      significado:
        'material artificial fabricado a partir de polímeros como el PVC o el poliuretano, diseñado para imitar características del cuero o de otros materiales naturales. se usa en marroquinería por su costo accesible, variedad de diseños y facilidad de mantenimiento.',
    },
    {
      termino: 'Textil',
      significado:
        'material compuesto por fibras naturales (algodón, lino, lana) o sintéticas (poliéster, nylon) que se utiliza en la fabricación de marroquinería, especialmente en modelos deportivos y casuales, debido a su ligereza y transpirabilidad.',
    },
  ],
  referencias: [
    {
      referencia: 'Asensio, O. (2011). El gran libro del cuero. Lexus.',
      link: '',
    },
    {
      referencia: 'Fogg, M. (2009). Bolsos Vintage. Parramón.',
      link: '',
    },
    {
      referencia:
        'Gonzalez Silva, J. C., Jimenez Lopez, H. D., Moreno Muñoz, E. D., & Villamil Moreno, C. A. (2015). Control de calidad en materias primas e insumos para el sector calzado y marroquinería (1.ª ed.). SENA.  ',
      link:
        'https://www.researchgate.net/publication/334430318_Control_de_Calidad_en_Materias_Primas_e_Insumos_para_el_Sector_Calzado_y_Marroquineria',
    },
    {
      referencia:
        'Johnson, A. (2005). Bolsos el poder de un accesorio. Konemann.',
      link: '',
    },
    {
      referencia:
        'Marulanda, G. (2007). Cartilla de marroquinería modelaje de bolsos. SENA. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4866/cartilla_marroquineria_modelaje_bolsos.pdf?sequence=1&isAllowed=y ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
