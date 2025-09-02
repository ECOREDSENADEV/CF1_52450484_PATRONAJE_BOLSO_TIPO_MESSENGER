<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Tipos de construcción del bolso <em>Messenger</em>
    
    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-3.tarjeta.p-5(data-aos="fade-left").align-content-center
          p.mb-0(data-aos="fade-left") El bolso tipo <em>Messenger</em> se caracteriza por su forma rectangular o cuadrada, una tapa frontal abatible y una correa larga que permite llevarlo cruzado sobre el cuerpo. Este diseño versátil y funcional es ampliamente utilizado tanto en entornos urbanos como profesionales.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        figure.mb-2
          img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px" data-aos="zoom-in")
        p.mb-0(data-aos="fade-left") Desde el punto de vista técnico, el bolso <em>Messenger</em> puede construirse siguiendo dos enfoques estructurales diferentes, cada uno con ventajas particulares según el diseño, los materiales y el proceso de fabricación: la construcción a partir del frontal y la construcción a partir del fuelle.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción a partir del frontal
    
    .row.justify-content-center
      .col-xl-8
        .bg-color-10.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.order-2
              figure
                img(src='@/assets/curso/tema4/3.png', alt='')
            .col-lg.order-1.mb-3.mb-lg-0
              .p-4
                p.mb-0(data-aos="fade-up") Este método comienza trabajando directamente sobre la cara frontal del bolso, integrando en ella los elementos funcionales y decorativos antes de ensamblarla con el resto de las piezas. Es una técnica que favorece el control de detalles visibles y el acabado estético del frente. En la construcción del bolso tipo <em>Messenger</em>, el orden técnico de ensamblaje garantiza resistencia, simetría y funcionalidad. 
    
    p.mb-5 A continuación, se describen los pasos clave para su armado:

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.mb-3
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
              div(titulo="Preparación del frontal")
                div.ms-5
                  p.mb-0 Se ubican los bolsillos tipo parche, cremalleras u organizadores sobre la cara frontal del bolso. Luego se realiza el refilado, el doblado y la costura de los bordes para aportar firmeza estructural y un acabado limpio.
              div(titulo="Montaje de la tapa")
                div.ms-5
                  p.mb-0 La tapa se une al borde superior del frontal mediante una costura reforzada. Esta unión puede incluir refuerzos internos, forro o elementos decorativos según el diseño.
              div(titulo="Unión con el fuelle y la pieza trasera")
                div.ms-5
                  p.mb-0 El frontal armado se acopla a los fuelles laterales y de base, que pueden ser una sola pieza en forma de “U” o tres piezas separadas. Finalmente, se incorpora la parte trasera para cerrar el cuerpo del bolso.
              div(titulo="Colocación de correas y herrajes")
                div.ms-5
                  p.mb-0 Se fijan los pasadores, aros o bases metálicas que permitirán sujetar la manija o la correa larga del bolso. Este paso completa la estructura funcional del producto.

        .bg-color-11.mb-5.tarjeta
          .px-4.px-md-5.py-4
            p.mb-0 <b>Ventajas principales</b>: este sistema permite una mayor precisión en la alineación de bolsillos, cremalleras y elementos decorativos, así como la verificación previa de las costuras del frente antes del armado final.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción a partir del fuelle
    
    .row.justify-content-center
      .col-xl-8
        .bg-color-10.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.order-2
              figure
                img(src='@/assets/curso/tema4/5.png', alt='')
            .col-lg.order-1.mb-3.mb-lg-0
              .p-4
                p.mb-0(data-aos="fade-up") A diferencia del método anterior, este enfoque inicia el armado del bolso desde el fuelle, es decir, las piezas que conforman los laterales y la base del bolso. Es una técnica común en modelos de mayor volumen o estructura, ya que aporta estabilidad desde el interior hacia el exterior.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        p.mb-5 Este procedimiento detalla los pasos generales para ensamblar la estructura del bolso tipo <em>Messenger</em>, asegurando estabilidad, resistencia y un acabado profesional.
        .row.mb-3
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
              div(titulo="Preparación del fuelle")
                div.ms-5
                  p.mb-0 Se ensamblan los laterales y la base del fuelle, creando una sola unidad. En esta etapa pueden añadirse refuerzos internos o soportes estructurales si el diseño lo exige.
              div(titulo="Unión de la cara trasera")
                div.ms-5
                  p.mb-0 Se une el panel trasero al fuelle, lo que permite dar forma tridimensional al bolso y consolidar la estructura básica.
              div(titulo="Integración del frontal armado")
                div.ms-5
                  p.mb-0 Se incorpora la pieza frontal previamente trabajada (con tapa, bolsillos y cremalleras), completando así el armado del cuerpo del bolso.
              div(titulo="Acabado de bordes y refuerzos")
                div.ms-5
                  p.mb-0 Se finaliza con la aplicación de ribetes, vivos, refuerzos internos y costuras externas. También se colocan los herrajes funcionales y decorativos.

        .bg-color-11.mb-5.tarjeta
          .px-4.px-md-5.py-4
            p.mb-0 <b>Ventajas principales</b>: este sistema ofrece mayor control en el armado volumétrico del bolso, facilita el trabajo en máquinas de brazo o poste, y permite un mejor manejo de formas estructuradas o diseños complejos.


</template>

<script>
export default {
  name: 'Tema4',
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
