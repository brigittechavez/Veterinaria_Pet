// ARCHIVO DE DATOS MOCK - Servicios de Drama Pet
// Estos son datos ficticios para desarrollo y pruebas.
// NO representan servicios reales ni precios vigentes.

export interface AdaptiveQuestion {
  id: string;
  text: string;
  type: 'text' | 'select' | 'radio' | 'textarea';
  options?: string[];
  required: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string | null;
  icon: string;
  image: string;
  duration: string;
  adaptiveQuestions: AdaptiveQuestion[];
  hasBooking: boolean;
  actionLabel: string;
  actionType: 'book' | 'call';
}

export const SERVICES: Service[] = [
  {
    id: 'consulta-general',
    name: 'Consulta General',
    description: 'Evaluaci\u00f3n completa de salud para tu mascota. Incluye examen f\u00edsico, revisi\u00f3n de antecedentes y recomendaciones personalizadas.',
    price: 'S/ 75',
    icon: 'stethoscope',
    image: 'assets/images/services/consulta.png',
    duration: '30 min',
    hasBooking: true,
    actionLabel: 'Agendar cita',
    actionType: 'book',
    adaptiveQuestions: [
      {
        id: 'motivo-consulta',
        text: '\u00bfCu\u00e1l es el motivo de la consulta?',
        type: 'textarea',
        required: true
      },
      {
        id: 'edad-mascota',
        text: 'Edad de la mascota',
        type: 'select',
        options: ['Menor de 1 a\u00f1o', '1-3 a\u00f1os', '3-7 a\u00f1os', '7-10 a\u00f1os', 'Mayor de 10 a\u00f1os'],
        required: true
      },
      {
        id: 'esterilizado',
        text: '\u00bfLa mascota est\u00e1 esterilizada?',
        type: 'radio',
        options: ['S\u00ed', 'No', 'No estoy seguro'],
        required: true
      }
    ]
  },
  {
    id: 'vacunacion-desparasitacion',
    name: 'Vacunacion y Desparasitacion',
    description: 'Protecci\u00f3n completa contra enfermedades comunes. Vacunas esquem\u00e1ticas y desparasitaci\u00f3n interna y externa.',
    price: 'Desde S/ 55',
    icon: 'syringe',
    image: 'assets/images/services/vacunacion.png',
    duration: '20 min',
    hasBooking: true,
    actionLabel: 'Agendar cita',
    actionType: 'book',
    adaptiveQuestions: [
      {
        id: 'tipo-vacuna',
        text: '\u00bfQu\u00e9 tipo de vacuna necesita?',
        type: 'select',
        options: ['Primera vez (cachorro)', 'Refuerzo anual', 'Vacuna antirr\u00e1bica', 'No estoy seguro'],
        required: true
      },
      {
        id: 'ultima-desparasitacion',
        text: '\u00bfCu\u00e1ndo fue la \u00faltima desparasitaci\u00f3n?',
        type: 'select',
        options: ['Menos de 3 meses', '3-6 meses', 'M\u00e1s de 6 meses', 'Nunca he desparasitado'],
        required: true
      },
      {
        id: 'reacciones-previas',
        text: '\u00bfHa tenido reacciones a vacunas anteriormente?',
        type: 'radio',
        options: ['S\u00ed', 'No'],
        required: true
      }
    ]
  },
  {
    id: 'emergencias',
    name: 'Emergencias',
    description: 'Atenci\u00f3n inmediata para situaciones cr\u00edticas. Nuestro equipo est\u00e1 disponible para emergencias durante horario de atenci\u00f3n.',
    price: null,
    icon: 'alert-triangle',
    image: 'assets/images/services/emergencias.png',
    duration: 'Inmediato',
    hasBooking: false,
    actionLabel: 'Llamar ahora',
    actionType: 'call',
    adaptiveQuestions: [
      {
        id: 'tipo-emergencia',
        text: '\u00bfQu\u00e9 tipo de emergencia presenta la mascota?',
        type: 'select',
        options: ['Accidente', 'Dificultad respiratoria', 'V\u00f3mito o diarrea severa', 'Envenenamiento', 'Golpe o traumatismo', 'Otro'],
        required: true
      },
      {
        id: 'tiempo-sintomas',
        text: '\u00bfDesde cu\u00e1ndo presenta los s\u00edntomas?',
        type: 'select',
        options: ['Menos de 1 hora', '1-6 horas', '6-24 horas', 'M\u00e1s de 24 horas'],
        required: true
      },
      {
        id: 'estado-mascota',
        text: '\u00bfC\u00f3mo describir\u00eda el estado actual de la mascota?',
        type: 'textarea',
        required: true
      }
    ]
  },
  {
    id: 'grooming',
    name: 'Grooming',
    description: 'Servicio de est\u00e9tica integral para tu mascota. Ba\u00f1o, corte, secado, limpieza de o\u00eddos y corte de u\u00f1as.',
    price: 'Desde S/ 65',
    icon: 'scissors',
    image: 'assets/images/services/grooming.png',
    duration: '45-90 min',
    hasBooking: true,
    actionLabel: 'Agendar cita',
    actionType: 'book',
    adaptiveQuestions: [
      {
        id: 'tamano-mascota',
        text: 'Tama\u00f1o de la mascota',
        type: 'select',
        options: ['Peque\u00f1o (hasta 10 kg)', 'Mediano (10-25 kg)', 'Grande (25-45 kg)', 'Gigante (m\u00e1s de 45 kg)'],
        required: true
      },
      {
        id: 'tipo-servicio',
        text: '\u00bfQu\u00e9 servicio de grooming necesita?',
        type: 'select',
        options: ['Ba\u00f1o b\u00e1sico', 'Ba\u00f1o y corte', 'Paquete completo (ba\u00f1o, corte, u\u00f1as, o\u00eddos)', 'Solo u\u00f1as'],
        required: true
      },
      {
        id: 'condicion-piel',
        text: '\u00bfAlguna condici\u00f3n especial de piel o pelaje?',
        type: 'textarea',
        required: false
      }
    ]
  },
  {
    id: 'nutricion',
    name: 'Nutricion',
    description: 'Asesor\u00eda nutricional personalizada. Dietas balanceadas, control de peso y planes alimenticios seg\u00fan la necesidad de tu mascota.',
    price: 'S/ 90',
    icon: 'heart',
    image: 'assets/images/services/nutricion.png',
    duration: '40 min',
    hasBooking: true,
    actionLabel: 'Agendar cita',
    actionType: 'book',
    adaptiveQuestions: [
      {
        id: 'objetivo-nutricional',
        text: '\u00bfCu\u00e1l es el objetivo de la consulta nutricional?',
        type: 'select',
        options: ['Control de peso (bajar)', 'Control de peso (subir)', 'Dieta para cachorro', 'Dieta para adulto mayor', 'Problemas digestivos', 'Alergias alimentarias'],
        required: true
      },
      {
        id: 'alimentacion-actual',
        text: '\u00bfQu\u00e9 tipo de alimento recibe actualmente?',
        type: 'select',
        options: ['Alimento seco premium', 'Alimento seco econ\u00f3mico', 'Alimento h\u00famedo', 'Comida casera', 'Mixto (seco y h\u00famedo)', 'Otro'],
        required: true
      },
      {
        id: 'peso-actual',
        text: 'Peso actual aproximado de la mascota (kg)',
        type: 'text',
        required: true
      }
    ]
  }
];
