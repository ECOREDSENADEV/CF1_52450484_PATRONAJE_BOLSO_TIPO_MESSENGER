<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Tipos de acabados en la confección de bolsos
    
    p.mb-5 Los acabados en marroquinería combinan funcionalidad y estética, reforzando los bordes del bolso y definiendo su calidad visual y estructural.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/1.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Acabado al corte
              p Unión directa de los bordes sin dobleces. Indicado para materiales que no se deshilachan, como cuero natural o sintético denso. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Aplicación</b>: diseños minimalistas, tapas o solapas rígidas.
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Ventajas</b>: rápido, resalta el grosor del material. 
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Desventajas</b>: puede deteriorarse; el entintado requiere precisión y tiempo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/2.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Acabado con ribete
              p Se cubre el borde con una cinta o bies de tela, cuero o sintético.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Aplicación</b>: mochilas, bolsos escolares y deportivos. 
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Ventajas</b>: protege del desgaste, aporta decoración. 
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Desventajas</b>: requiere doble costura y precisión en curvas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/3.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Acabado con dobladillo (embonado)
              p Se dobla el borde del material hacia adentro antes de coser, ocultando el canto. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Aplicación</b>: asas, bocas de bolsos, tapas y detalles. 
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Ventajas</b>: acabado limpio y profesional, refuerza bordes. 
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Desventajas</b>: no apto para materiales gruesos; demanda más tiempo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/4.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Acabado con vivo (cordón decorativo)
              p Se inserta un cordón entre dos piezas cosidas, quedando parcialmente expuesto.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Aplicación</b>: bolsos estructurados, maletas y diseños ejecutivos. 
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Ventajas</b>: aporta rigidez, elegancia y relieve decorativo. 
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Desventajas</b>: requiere técnica, herramientas y tiempo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/5.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Acabado cosido y vuelto
              p Se enfrentan las piezas por el derecho, se cosen por el revés y se voltean al final. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Aplicación</b>: bolsos forrados, estuches, monederos. 
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Ventajas</b>: oculta costuras, ofrece acabado pulido. 
                li.mb-0.d-flex
                  i.fa.fa-circle-check
                  p.mb-0 <b>Desventajas</b>: complejo en estructuras rígidas o curvas; el volteo requiere planificación.
    
    .bg-color-11.mb-5.tarjeta
      .px-4.px-md-5.py-4
        p.mb-0 La elección del acabado debe responder al tipo y espesor del material, el uso previsto del bolso, el nivel de resistencia requerido y los estándares estéticos de la marca. Un buen acabado transmite profesionalismo y eleva la percepción de calidad del producto. 



</template>

<script>
export default {
  name: 'Tema5',
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
