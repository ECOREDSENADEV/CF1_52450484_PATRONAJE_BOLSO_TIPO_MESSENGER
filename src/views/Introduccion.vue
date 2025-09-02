<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5
        p.mb-5 El patronaje técnico es una fase fundamental en el desarrollo de productos de marroquinería, pues constituye la base estructural que garantiza la forma, el ensamble y la funcionalidad de cada artículo. Este componente formativo está orientado a proporcionar al aprendiz los conocimientos esenciales para la elaboración de patrones aplicados al bolso tipo <em>Messenger</em>, uno de los modelos más demandados en el mercado por su diseño versátil y funcional.

        .bg-color-1.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/intro/1.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Para la gestión de proyectos, la elaboración de una propuesta completa es un elemento esencial que transforma una idea inicial en un plan estructurado y viable. Este proceso permite definir objetivos, establecer estrategias y garantizar que los recursos y esfuerzos estén alineados hacia el logro de metas específicas. Una propuesta bien diseñada actúa como un mapa detallado que guía al equipo de trabajo desde la concepción hasta la implementación y evaluación del proyecto.
    
    p Este componente brindará las herramientas necesarias para comprender la relación entre diseño, técnica y funcionalidad, estableciendo los fundamentos para la creación de prototipos y evidencias prácticas que reflejen calidad, precisión y cumplimiento con los estándares del sector marroquinero.

</template>

<script>
export default {
  name: 'Introduccion',
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
