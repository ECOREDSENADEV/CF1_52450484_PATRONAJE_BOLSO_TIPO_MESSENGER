<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Fundamentos técnicos del patronaje para bolsos tipo <em>Messenger</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave sobre componentes, materiales, procesos productivos, tipos de construcción, acabados y fichas técnicas en la elaboración de bolsos tipo <em>Messenger</em>.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal del fuelle en un bolso tipo <em>Messenger</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permitir el acceso al interior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aportar profundidad y capacidad de carga.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Unir la tapa con el cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Servir como refuerzo decorativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de cuero es más usado por su resistencia y durabilidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuero de oveja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuero de vaca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuero de cabra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuero porcino.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'El curtido vegetal se caracteriza por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color gris verdoso, alta flexibilidad y rápido proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Uso de taninos naturales, rigidez inicial y biodegradabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Alta resistencia al agua y elasticidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proceso con polímeros sintéticos y color blanco.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es el principal beneficio del acabado plena flor?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener la superficie natural intacta y duradera.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cubrir imperfecciones con pigmento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la absorción de tintes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Generar una textura aterciopelada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué material sintético se fabrica a partir de poliuretano e imita al cuero natural?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nylon.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'PVC.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'PU.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Poliéster.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué aguja crea una costura diagonal inclinada hacia la derecha?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'LR.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'LL.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'S.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'D.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la principal ventaja del hilo de nylon multifilamento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bajo costo y apariencia mate.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta resistencia a la tracción y flexibilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Absorción limitada de tintes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rigidez para costuras estructurales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿En qué fase del proceso se elaboran los patrones y moldes?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Patronaje y elaboración de moldes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Corte de materiales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prearmado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es una ventaja de la construcción a partir del fuelle?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor control en el armado tridimensional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Más rapidez en la costura frontal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilita la colocación de bolsillos externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requiere refuerzos internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de acabado consiste en envolver el borde con una cinta o tira protectora?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Con ribete.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Al corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Con dobladillo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cosido y vuelto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El cuero gamuzado se caracteriza por tener la superficie aterciopelada.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El acabado con vivo utiliza un cordón interno decorativo entre las costuras.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El curtido al cromo es más ecológico que el curtido vegetal.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El algodón es un material sintético de alta tecnología usado en refuerzos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'En la ficha técnica se especifican materiales, procesos y observaciones técnicas del producto.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
