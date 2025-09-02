<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Fases del proceso productivo de marroquinería
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La marroquinería combina diseño, técnica artesanal e industrialización. El proceso productivo se compone de fases secuenciales que transforman los materiales en productos terminados con altos estándares de calidad, funcionalidad y estética. Cada fase incluye tareas específicas que permiten avanzar desde el concepto inicial hasta el control final del producto.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/2.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Diseño y desarrollo
              p Se define el concepto, función y estilo del artículo. 
              p <b>Tareas</b>: bocetos manuales o digitales, ficha técnica con medidas y materiales, selección de cueros, textiles y herrajes.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Patronaje y moldes
              p Se crean los patrones de cada pieza, asegurando proporción y funcionalidad. 
              p <b>Tareas</b>: desarrollo de moldes base y variantes, señales técnicas, maquetas, prototipo.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Corte de materiales
              p Se cortan las piezas con herramientas específicas. 
              p <b>Tareas</b>: corte manual, mecánico o sistematizado; clasificación de partes; optimización del material.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Desbaste o rebajado
              p Se reduce el grosor de piezas para facilitar el doblado y el armado. 
              p <b>Tareas</b>: rebajado parcial o total con máquina o manual, según diseño.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Marcado y preparación
              p Se marcan puntos de unión y se preparan los refuerzos. 
              p <b>Tareas</b>: señalado de costuras, piquetes, perforaciones; aplicación de adhesivos y refilados.
          
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Prearmado
              p Se unen piezas internas antes del armado final. 
              p <b>Tareas</b>: pegado o costura de bolsillos, cremalleras, refuerzos.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Armado del producto
              p Se ensambla el producto completo. 
              p <b>Tareas</b>: unión de cuerpo, tapa, forros y correas; inserción de herrajes; ensamblaje manual.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Costura
              p Fase crítica que garantiza firmeza y estética. Se realiza con máquinas industriales especializadas. 
              p <b>Tareas</b>: preparación de piezas, calibración de máquina, costura, control de calidad intermedio.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Acabado
              p Mejora la presentación y corrige imperfecciones. 
              p <b>Tareas</b>: limpieza, corte de hilos, sellado de bordes, planchado, aplicación de ceras, colocación de etiquetas o logos.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Control de calidad
              p Verificación final del cumplimiento técnico, funcional y estético. 
              p <b>Tareas</b>: inspección visual, medición, pruebas de resistencia, chequeo funcional, detección de defectos, clasificación del producto.

</template>

<script>
export default {
  name: 'Tema3',
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
