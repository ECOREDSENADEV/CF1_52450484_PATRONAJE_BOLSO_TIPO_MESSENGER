<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Materiales e insumos para marroquinería
    
    p.mb-5 La elección de materiales e insumos es un factor determinante en la marroquinería, ya que define no solo la apariencia, sino también el desempeño y la vida útil de cada pieza. Un producto bien elaborado requiere materiales que aporten resistencia, flexibilidad y confort, asegurando que el artículo mantenga su forma y funcionalidad con el paso del tiempo.

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La variedad de materiales disponibles permite seleccionar aquellos que mejor se adapten a las exigencias de cada diseño y uso previsto. Esta elección se basa en aspectos como el origen del material (natural o sintético), su función específica (estructura principal, forro, refuerzos o detalles decorativos) y sus propiedades técnicas, tales como resistencia al desgaste, facilidad de manipulación y acabado superficial.
    
    p El uso estratégico de materiales y combinaciones permite crear productos que destacan por su estética, pero también por su durabilidad y comodidad. Así, la marroquinería moderna integra tradición e innovación mediante una cuidadosa selección de insumos, adaptándose a las tendencias y necesidades del mercado.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Cueros
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-3.tarjeta.p-3.h-100(data-aos="fade-left").align-content-center
          p.mb-0(data-aos="fade-left") El cuero es uno de los materiales más tradicionales y valorados en la marroquinería debido a su resistencia, flexibilidad, elegancia y durabilidad. Se obtiene a partir de la piel de animales, principalmente bovinos, ovinos, caprinos y porcinos, mediante un proceso de curtido que evita su descomposición y mejora sus propiedades.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        figure.mb-2
          img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px" data-aos="zoom-in")
        p.mb-0(data-aos="fade-left") Sus aplicaciones incluyen calzado, marroquinería, tapicería y vestimenta, gracias a su transpirabilidad, adaptabilidad y resistencia al desgaste. Los cueros se clasifican principalmente por su procedencia animal, el tipo de curtido y el acabado.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Clasificación por procedencia animal
  
    p.mb-5 La siguiente tabla muestra la clasificación del cuero según su procedencia animal, destacando las características específicas de cada tipo y sus usos más comunes en marroquinería y otros sectores.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Bovino (vaca)
              p Muy utilizado. Resistente, grueso, duradero, fácil de teñir y limpiar. Ideal para artículos de uso intensivo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Caprino (cabra)
              p Ligero, flexible y suave. Grano atractivo. Usado en guantes y bolsos finos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Ovino (oveja)
              p Muy suave y transpirable. Ligero y cómodo. Utilizado en prendas y accesorios de alta gama.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Porcino
              p Flexible, con poros visibles. Menor resistencia. Común en forros y productos económicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Equino (caballo)
              p Fino, liso y uniforme. Se usa en artículos de lujo y talabartería.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Exóticos (reptiles)
              p Como cocodrilo, serpiente o nutria. Apreciados por su textura y exclusividad en la moda de lujo.
        
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tipos de curtido del cuero
  
    p.mb-5 El curtido transforma la piel cruda en cuero duradero. Dependiendo del agente curtiente utilizado, se obtienen diferentes resultados en textura, color, resistencia y sostenibilidad. A continuación, se detallan los principales tipos:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Tipos de curtido del cuero
    .pst.mb-5.tabla-a.color-primario.mb-5 
      table
        thead
          tr
            th.bg-color-5 Tipo de curtido
            th.bg-color-5 Características
            th.bg-color-5 Aplicaciones comunes
            th.bg-color-5 Ventajas / Desventajas
        tbody
          tr
            td Curtido al cromo
            td Color gris verdoso sin teñir. Muy flexible, resistente, soporta humedad. Rápido y económico.
            td Marroquinería en general
            td Flexible, buen teñido 
              br
              | Menos ecológico
          tr
            td Curtido vegetal
            td Color marrón claro a medio. Rígido al inicio, biodegradable, textura firme.
            td Cinturones, fundas, artículos estructurados
            td Ideal para repujado y moldes 
              br
              | Proceso largo y costoso
          tr
            td Curtido sintético
            td Suave, color blanco o crema. Sin metales pesados, hipoalergénico.
            td Artículos médicos, infantiles
            td Ecológico, hipoalergénico 
              br
              | Menor durabilidad que el cromo
          tr
            td Curtido mixto o combinado
            td Mezcla de vegetal/cromo o cromo/sintético. Buena rigidez y resistencia.
            td Calzado, tapicería, marroquinería
            td Versátil y adaptable 
              br
              | Puede ser más costoso
    
    p.mb-5 A continuación, se presentan algunos ejemplos de aplicación según el tipo de curtido, que permiten identificar cuál es el más adecuado en función de las características y exigencias del producto final.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Bolso rígido y ecológico tipo <em>Messenger</em>")
        .row.p-4.align-items-center
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Curtido vegetal
            p Aporta rigidez estructural y es biodegradable
        
          .col-md-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/10.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Bolso flexible y resistente a la humedad")
        .row.p-4.align-items-center
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Curtido al cromo
            p Ofrece flexibilidad, buena absorción de tintes y alta resistencia al agua
        
          .col-md-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/11.png', alt='Texto que describa la imagen')
        
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tipo de acabado
      
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El acabado superficial del cuero es el tratamiento final que se aplica para mejorar su apariencia estética, tacto, color, brillo, impermeabilidad y resistencia al desgaste. Este proceso es clave, ya que influye tanto en el estilo y el mantenimiento del producto como en su durabilidad y funcionalidad.
    
    p.mb-5 Dependiendo de si se trata de un bolso, una cartera, calzado o tapicería, se selecciona un tipo de acabado que responda a las exigencias funcionales y visuales del diseño. A continuación, se describen los acabados más comunes en marroquinería:
    
    .row.mb-3
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          div(titulo="Cuero plena flor (<em>full grain</em>)")
            div.ms-5
              p.mb-0 Superficie natural sin lijar. Muestra marcas originales de la piel. Grano fino, muy suave. Ideal para artículos premium como bolsos y carteras de lujo. 
              p.mb-0 <b>Ventaja</b>: muy duradero, desarrolla una pátina atractiva.
          div(titulo="Cuero flor corregida")
            div.ms-5
              p.mb-0 Lijado para eliminar imperfecciones. Superficie uniforme, puede llevar grabados. Usado en marroquinería estándar.  
              p.mb-0 <b>Ventaja</b>: más homogéneo y económico que la flor natural.
          div(titulo="Cuero pigmentado")
           div.ms-5
              p.mb-0 Capa de pigmento o pintura superficial. Color uniforme y gran resistencia al desgaste y al agua. Ideal para bolsos escolares, calzado utilitario. 
              p.mb-0 <b>Ventaja</b>: fácil de limpiar, alta durabilidad.
          div(titulo="Cuero anilina")
            div.ms-5
              p.mb-0 Teñido con colorantes solubles que no cubren la superficie natural. Textura suave, aspecto auténtico. Usado en marroquinería de lujo y tapicería. 
              p.mb-0 <b>Ventaja</b>: estética natural y elegante. 
              p.mb-0 <b>Desventaja</b>: poco resistente a manchas.

    .row
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      .col-lg-9.mb-3.mb-lg-0.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          div(titulo="Cuero semianilina")
            div.ms-5
              p.mb-0 Similar al anilina, pero con una ligera capa protectora. Mantiene el aspecto natural con mejor resistencia. Usado en productos de gama media-alta. 
              p.mb-0 <b>Ventaja</b>: buen equilibrio entre estética y protección.
          div(titulo="Cuero <em>Nobuck</em>")
            div.ms-5
              p.mb-0 Flor lijada para lograr una textura aterciopelada. Aspecto mate, elegante pero sensible a la humedad. Ideal para bolsos casuales o de estilo vintage.
              p.mb-0 <b>Ventaja</b>: estética sofisticada.
          div(titulo="Cuero gamuzado (<em>suede</em>)")
           div.ms-5
              p.mb-0 Superficie afelpada obtenida desde el reverso del cuero. Muy suave, menos resistente. Usado en forros, bolsos informales, detalles decorativos.  
              p.mb-0 <b>Ventaja</b>: buena presentación visual y bajo costo.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Materiales sintéticos
    
    p.mb-5 Los materiales sintéticos representan una alternativa versátil y económica al cuero natural, ofreciendo beneficios como resistencia al agua, facilidad de limpieza, ligereza y variedad estética. Su uso facilita la producción en masa, la personalización y la innovación en diseño y funcionalidad. Los principales tipos de materiales sintéticos son: 

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 PU (poliuretano)
              p Imitación del cuero natural en apariencia y textura. Resistente al agua, fácil de limpiar, disponible en diversos colores y acabados. Muy usado en bolsos, carteras y calzado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/16.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 PVC (cloruro de polivinilo)
              p Alta resistencia y bajo costo. Menos ecológico. Usado en artículos utilitarios y de gran volumen.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Microfibra
              p Sintético de alta tecnología. Ligero, flexible y resistente al desgaste. Utilizado en productos de calidad media-alta.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/17.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Otros (poliéster, <em>nylon</em>, acrílicos)
              p Se emplean en refuerzos, forros, correas o detalles decorativos. Aportan resistencia y variedad de acabados.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Textiles
    
    p.mb-5 A continuación, se presenta un video que analiza el uso de textiles en marroquinería, destacando sus características, aplicaciones y su papel clave en la mejora del diseño, la funcionalidad y la sostenibilidad de los productos.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Agujas
    
    p.mb-5 Las agujas para marroquinería están especialmente diseñadas para perforar materiales gruesos y resistentes como el cuero natural, los sintéticos o textiles técnicos. Estas agujas, fabricadas en acero de alta calidad, se diferencian según la punta, el grosor (calibre) y el sistema de la máquina para la cual están destinadas.

    .row.justify-content-center
      .col-xl-8
        .bg-color-3.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.order-2
              figure
                img(src='@/assets/curso/tema2/19.png', alt='')
            .col-lg.order-1.mb-3.mb-lg-0
              .p-4
                p.mb-0(data-aos="fade-up") La correcta elección de aguja influye directamente en la calidad de la costura, la preservación del material, y la vida útil del equipo.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Clasificación de agujas para marroquinería
    
    p.mb-5 A continuación se presenta la clasificación de agujas para marroquinería, organizada según los principales criterios técnicos que determinan su adecuación al tipo de material, costura y equipo utilizado.

    h4.bg-color-7.text-white.p-3 Según el tipo de punta

    p.mb-5.mt-5 La punta de la aguja determina cómo se perfora el material y qué tipo de acabado deja la costura. En marroquinería se utilizan principalmente puntas cortantes, diseñadas para atravesar materiales sin desgarrarlos, logrando costuras funcionales o decorativas.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Tipos de agujas 
    .pst.mb-5.tabla-a.color-primario.mb-5 
      table
        thead
          tr
            th.bg-color-5 Código
            th.bg-color-5 Tipo de punta
            th.bg-color-5 Características
            th.bg-color-5 Uso común
        tbody
          tr
            td R
            td Redonda
            td Penetra entre las fibras sin cortarlas.
            td Textiles, materiales blandos.
          tr
            td LR
            td Cortante hacia la derecha
            td Crea costura diagonal hacia la derecha.
            td Costuras decorativas en bolsos.
          tr
            td LL
            td Cortante hacia la izquierda
            td Costura inclinada hacia la izquierda.
            td Costuras decorativas.
          tr
            td S
            td Lanza recta
            td Puntada recta, limpia y técnica.
            td Costuras precisas y técnicas.
          tr
            td D
            td Diamante (triangular)
            td Corta en forma de diamante, fuerte penetración.
            td Cuero grueso, costuras de alta resistencia.
          tr
            td P
            td Pico
            td Perforación directa y robusta, más ancha.
            td Cuero rígido, artículos estructurados.

    p.mb-5  En marroquinería se evitan las puntas redondas estándar (tipo R) para materiales duros, ya que no realizan un corte efectivo en el cuero.

    h4.bg-color-7.text-white.p-3 Según el grosor o calibre (número)

    p.mb-5.mt-5 El número de aguja indica su diámetro, y debe seleccionarse en función del tipo de material y del grosor del hilo que se va a utilizar. A mayor número, mayor grosor.

    .row.justify-content-center
      .col-xl-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Según el grosor o calibre
        .pst.mb-5.tabla-a.color-primario.mb-5 
          table
            thead
              tr
                th.bg-color-5 Número de aguja
                th.bg-color-5 Diámetro aproximado
            tbody
              tr
                td 90/14
                td 0.90 mm
              tr
                td 100/16
                td 1.00 mm
              tr
                td 110/18
                td 1.10 mm
              tr
                td 120/19
                td 1.20 mm
              tr
                td 130/21
                td 1.30 mm
              tr
                td 140/22 - 160/23
                td >1.40 mm

    h4.bg-color-7.text-white.p-3 Según el sistema

    p.mb-5.mt-5 El sistema de aguja está relacionado con el tipo de máquina y su compatibilidad. Es importante seguir las especificaciones del fabricante.

    .row.justify-content-center
      .col-xl-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Según el sistema
        .pst.mb-5.tabla-a.color-primario.mb-5 
          table
            thead
              tr
                th.bg-color-5 Sistema (código)
                th.bg-color-5 Longitud aproximada
                th.bg-color-5 Uso principal
            tbody
              tr
                td 134
                td 38.9 mm
                td Coser materiales de mediano a grueso espesor.
              tr
                td 134-35
                td 42.0 mm
                td Coser materiales pesados y muy gruesos.

    .bg-color-8.mb-5.tarjeta
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 <b>Importante</b>. Una correcta combinación entre tipo de aguja, hilo y máquina evita roturas, mejora la calidad de costura y prolonga la vida útil del equipo.
    
    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Hilos
    
    p.mb-5 El hilo es un componente esencial en marroquinería. No solo cumple la función de unir las piezas, sino que también refuerza la estructura del producto y contribuye a su estética. Por ello, su elección debe realizarse cuidadosamente, considerando el tipo de material a trabajar y el uso final del artículo.

    .row.justify-content-center 
      .col-xl-10
        .bg-color-9.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/21.png', alt='')
            .col-lg
              .p-4
                p(data-aos="fade-up") En la marroquinería industrial, donde se utilizan máquinas planas, de brazo, columna o de doble/triple arrastre, los hilos deben ofrecer:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fa.fa-circle-check
                    p.mb-0 Alta resistencia mecánica.
                  li.mb-0.d-flex
                    i.fa.fa-circle-check
                    p.mb-0 Buen desempeño en el sistema de arrastre.
                  li.mb-0.d-flex
                    i.fa.fa-circle-check
                    p.mb-0 Puntadas uniformes sobre materiales exigentes como cuero, sintéticos y textiles gruesos.
    
    p.mb-5 Esto requiere hilos fabricados con materiales de alta tenacidad, capaces de soportar la fricción, tracción y el desgaste del proceso productivo.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Hilo recomendado: <em>nylon</em> multifilamento
    
    p.mb-5 El hilo de nylon multifilamento está compuesto por múltiples fibras finas de nylon unidas entre sí. Esta estructura le brinda una combinación única de resistencia, flexibilidad y suavidad, convirtiéndolo en la opción más adecuada para productos de marroquinería, calzado y tapicería pesada. Las propiedades del hilo de nylon multifilamento son: 

    .bg-full-width.bg-fondo-2.mb-3
      .px-4.px-md-5
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/22.svg' alt='AvatarTop')
            h2.text-center Alta resistencia a la tracción
            p.text-center Soporta tensiones elevadas sin romperse, ideal para productos que cargan peso.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/23.svg' alt='AvatarTop')
            h2.text-center Flexibilidad y elasticidad
            p.text-center Se adapta bien a curvas y dobleces sin aflojarse ni romperse.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/24.svg' alt='AvatarTop')
            h2.text-center Bajo coeficiente de fricción
            p.text-center Se desliza con facilidad, permitiendo costuras suaves y limpias.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/25.svg' alt='AvatarTop')
            h2.text-center Resistencia a la abrasión
            p.text-center Soporta el desgaste por uso continuo, ideal para artículos de uso intensivo.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/26.svg' alt='AvatarTop')
            h2.text-center Buena absorción de tintes
            p.text-center Puede teñirse en muchos colores, con acabados brillantes y duraderos.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop')
            h2.text-center Resistencia al moho y la humedad
            p.text-center No se deteriora fácilmente en ambientes húmedos.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/28.svg' alt='AvatarTop')
            h2.text-center Acabado brillante o satinado
            p.text-center Aporta una estética pulida a la costura, ideal en costuras visibles.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop')
            h2.text-center Uso a alta velocidad
            p.text-center Funciona eficientemente en máquinas industriales rápidas, sin generar fallos.

        .bg-color-1.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/30.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Estos materiales e insumos como cueros, sintéticos, textiles, agujas e hilos, conforman la base de la marroquinería moderna, permitiendo la creación de productos duraderos, funcionales y estéticamente atractivos, en sintonía con las tendencias y necesidades del mercado actual.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
