<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Fichas técnicas de diseño en marroquinería
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ficha técnica de diseño es un documento esencial en el desarrollo y fabricación de productos de marroquinería como bolsos, carteras, mochilas o estuches. Su función principal es registrar de manera precisa y detallada todos los aspectos técnicos, estéticos y funcionales del producto, actuando como una guía unificada para los equipos de diseño, producción y control de calidad. Este documento permite estandarizar el proceso productivo, garantizar la coherencia entre modelos fabricados en diferentes lotes, y optimizar tanto la planificación como la estimación de costos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto ¿Para qué sirve una ficha técnica?
      
    p.mb-5 Una ficha técnica cumple múltiples funciones clave dentro del proceso de diseño y manufactura:
    
    .row.justify-content-center
      .col-xl-10
        .bg-color-10.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/2.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.d-flex
                    i.fa.fa-circle-check
                    p.mb-0 Garantiza que todas las áreas trabajen con la misma información técnica, evitando errores por malinterpretación.
                  li.d-flex
                    i.fa.fa-circle-check
                    p.mb-0 Facilita la reproducción exacta del producto en series, réplicas o pedidos recurrentes.
                  li.d-flex
                    i.fa.fa-circle-check
                    p.mb-0 Permite controlar los costos de producción al definir con claridad materiales, cantidades y procesos involucrados.
                  li.d-flex
                    i.fa.fa-circle-check
                    p.mb-0 Sirve como herramienta de control de calidad, permitiendo detectar desviaciones o fallos en el producto final. Es un insumo esencial para la planificación de la producción, cotización y documentación del desarrollo.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Componentes comunes de una ficha técnica de diseño
      
    p.mb-5 A continuación, se detallan los elementos que usualmente componen una ficha técnica en marroquinería. Estos pueden variar ligeramente según la empresa o el nivel de complejidad del producto. Una ficha técnica completa y bien elaborada es una herramienta indispensable para lograr un producto coherente, de calidad y fiel al diseño original, especialmente cuando intervienen distintos actores a lo largo del proceso de producción.

    .row.align-items-center.mb-5
      .col-lg-6.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-6.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="A" titulo="Información general") 
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Nombre del producto 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Código de identificación 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Versión o revisión 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Fecha de elaboración 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Línea o colección
          p(numero="B" titulo="Boceto o dibujo técnico")
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Representación gráfica (manual o digital) 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Vistas: frontal, lateral, trasera, superior e inferior 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Proporciones, escalas y detalles relevantes 
          p(numero="C" titulo="Descripción del producto") 
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Uso previsto (diario, viaje, oficina, etc.) 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Estilo (clásico, deportivo, urbano, etc.) 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Dimensiones (alto, ancho, profundidad) 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Género o público objetivo 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Funcionalidad principal
          p(numero="D" titulo="Materiales principales")
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Tipo de material (cuero, sintético, textil) 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Calibre o grosor 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Color y textura 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Acabado superficial (brillante, mate, grabado, etc.)
          p(numero="E" titulo="Forros y refuerzos") 
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Materiales internos 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Entretelas, espumas, bases rígidas 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Refuerzos de boca o base
          p(numero="F" titulo="Herrajes e insumos") 
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Cremalleras, broches magnéticos, aros, terminales 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Correderas, hebillas, remaches, sliders, mosquetones
     
    
    .row.align-items-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-6
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="G" titulo="Moldes o patrones") 
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Número total de piezas 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Nombre de cada molde  
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Uso (pieza principal, refuerzo, forro) 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Cantidad de cortes por molde
          p(numero="H" titulo="Tipos de costuras") 
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Tipo de puntada (recta, doble, decorativa, etc.)  
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Largo de puntada recomendado  
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Tipo y calibre de hilo 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Tipo de aguja según material

          p(numero="I" titulo="Procesos productivos") 
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Secuencia sugerida: 
            | Corte → Desbaste → Marcado → Prearmado → Costura → Acabados

          p(numero="J" titulo="Acabados finales")
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Tipo de entintado o pintura de bordes 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Aplicación de ceras, cremas o tintas protectoras  
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Limpieza general 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Planchado o conformado
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Colocación de etiquetas, logos o marcados
 
          p(numero="K" titulo="Observaciones técnicas") 
            ul.lista-ul--color.pst-2
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Instrucciones especiales 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Tolerancias (en medidas, materiales o procesos) 
              li.d-flex
                i.fa.fa-circle.fa-xs.bg-color-12
                | Notas del diseñador o recomendaciones específicas

   
        


</template>

<script>
export default {
  name: 'Tema6',
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
