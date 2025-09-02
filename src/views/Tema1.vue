<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Componentes del bolso tipo <em>Messenger</em>
    
    p.mb-5 El bolso tipo <em>Messenger</em> es un accesorio funcional, cómodo y adaptable a contextos urbanos y profesionales. Su diseño se caracteriza por una forma rectangular o trapezoidal, una solapa frontal amplia y una correa larga para llevarlo cruzado o al hombro. Esta configuración facilita el transporte de objetos personales y documentos.

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Conocer cada uno de los componentes del bolso tipo <em>Messenger</em> resulta clave para su diseño, patronaje y ensamblaje. Elementos como el cuerpo principal, la tapa, los fuelles, la base, los bolsillos, el forro y el sistema de cierre cumplen funciones específicas que influyen en la estética, la ergonomía y la funcionalidad. Este conocimiento permite elaborar patrones precisos y tomar decisiones acertadas sobre materiales, procesos y acabados. 
    
    p.mb-5 A continuación, se presentan los principales componentes externos y estructurales del bolso tipo <em>Messenger</em>. Cada elemento desempeña un papel específico en la definición de la forma, la capacidad y la funcionalidad del accesorio, contribuyendo tanto a su resistencia como a su estética final.

    .bg-full-width.bg-color-2.mb-3
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Partes del bolso

            ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/2.png', alt='', style="max-width: 1106px;").mx-auto
              .bg-color-1.tarjeta.box-shadow.p-3(x="46%" y="0%" numero="A")
                h5 Manija
                p Asa corta en la parte superior. Permite llevar el bolso en la mano.
              .bg-color-1.tarjeta.box-shadow.p-3(x="82%" y="4%" numero="B")
                h5 Tapa o solapa
                p Cubierta frontal que cierra con broches o velcro. Protege el contenido y define la identidad estética.
              .bg-color-1.tarjeta.box-shadow.p-3(x="94%" y="17%" numero="C")
                h5 Contra tapa
                p Pieza interior de la tapa, a veces con bolsillos. Refuerza, mejora presentación y añade funciones.
              .bg-color-1.tarjeta.box-shadow.p-3(x="98%" y="35%" numero="D")
                h5 Cuerpo (frontal y espaldar)
                p Partes frontal y posterior, generalmente rectangulares o cuadradas. Contienen el volumen principal y definen la forma externa.
              .bg-color-1.tarjeta.box-shadow.p-3(x="99%" y="53%" numero="E")
                h5 Fuelle, falso o costado
                p Tiras verticales que unen los costados. Aportan profundidad y aumentan la capacidad de carga.
              .bg-color-1.tarjeta.box-shadow.p-3(x="100%" y="71%" numero="F")
                h5 Base o fondo
                p Pieza inferior que conecta frontal y posterior. Proporciona estabilidad y soporte al contenido.
              .bg-color-1.tarjeta.box-shadow.p-3(x="26%" y="86%" numero="G")
                h5 Correas de los bolsillos
                p Tiras pequeñas con broche, velcro o hebilla que aseguran bolsillos. Aportan seguridad y diseño.
              .bg-color-1.tarjeta.box-shadow.p-3(x="2%" y="53%" numero="H")
                h5 Bolsillos (externos o internos)
                p Compartimentos adicionales para organizar objetos pequeños.
    
    p.mb-5 A continuación, se describen los componentes internos y de cierre del bolso tipo <em>Messenger</em>. Estos elementos están orientados a proteger el contenido, optimizar la organización interna y garantizar un acceso seguro y práctico, aportando funcionalidad y un acabado estético al diseño final.

    .bg-full-width.bg-color-2.mb-3
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span Parte interna del bolso

            ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/3.png', alt='', style="max-width: 1106px;").mx-auto
              .bg-color-1.tarjeta.box-shadow.p-3(x="97%" y="10%" numero="A")
                h5 Boca
                p Parte superior del cuerpo, donde está la abertura principal. Permite acceso al interior y se une a la cremallera y forro.
              .bg-color-1.tarjeta.box-shadow.p-3(x="99%" y="37%" numero="B")
                h5 Laterales de cremallera
                p Franjas que unen cremallera con boca y/o forro. Permiten ajustar capacidad y volumen.
              .bg-color-1.tarjeta.box-shadow.p-3(x="100%" y="58%" numero="C")
                h5 Terminal de cremallera
                p Acabado de los extremos de la cremallera, evita que el slider se salga y mejora estética.
              .bg-color-1.tarjeta.box-shadow.p-3(x="18%" y="88%" numero="D")
                h5 Organizadores internos
                p Bolsillos o divisiones internas para clasificar objetos.
              .bg-color-1.tarjeta.box-shadow.p-3(x="7%" y="69%" numero="E")
                h5 Slider
                p Pieza metálica o plástica que desliza sobre los dientes de la cremallera para abrir o cerrar.
              .bg-color-1.tarjeta.box-shadow.p-3(x="7%" y="52%" numero="F")
                h5 Forro interno
                p Revestimiento interior de tela liviana o sintética. Protege, mejora apariencia y durabilidad.
              .bg-color-1.tarjeta.box-shadow.p-3(x="7%" y="37%" numero="G")
                h5 Cierres
                p Mecanismos como cremalleras que aseguran y permiten acceso al contenido.
    
    p.mb-5 A continuación, se presentan los componentes de sujeción y refuerzo del bolso tipo <em>Messenger</em>. Estos elementos aseguran la comodidad en el transporte, incrementan la resistencia estructural y añaden detalles estéticos o funcionales que completan la presentación y durabilidad del accesorio.

    .bg-full-width.bg-color-2.mb-3
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 3.
              span Parte lateral del bolso

            ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/4.png', alt='', style="max-width: 1106px;").mx-auto
              .bg-color-1.tarjeta.box-shadow.p-3(x="86%" y="32%" numero="A")
                h5 Chapetas
                p Refuerzos en puntos de tensión o elementos decorativos. Mejoran resistencia y acabado.
              .bg-color-1.tarjeta.box-shadow.p-3(x="89%" y="66%" numero="B")
                h5 Herrajes
                p Elementos como argollas, mosquetones o pasadores para ensamblar y ajustar piezas.
              .bg-color-1.tarjeta.box-shadow.p-3(x="92%" y="84%" numero="C")
                h5 Correa ajustable
                p Tira larga con regulador para llevar cruzado o al hombro. Ajusta comodidad y longitud.
              .bg-color-1.tarjeta.box-shadow.p-3(x="14%" y="47%" numero="D")
                h5 Correas de la tapa
                p Tiras sobre la solapa con broches o hebillas. Aseguran cierre y aportan carácter técnico.Bolsillos o divisiones internas para clasificar objetos.
             
         

    
    

    
  
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
