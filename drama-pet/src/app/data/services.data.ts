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
    description: 'Evaluación completa de salud para tu mascota. Incluye examen físico, revisión de antecedentes y recomendaciones personalizadas.',
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
        text: '¿Cuál es el motivo de la consulta?',
        type: 'textarea',
        required: true
      },
      {
        id: 'edad-mascota',
        text: 'Edad de la mascota',
        type: 'select',
        options: ['Menor de 1 año', '1-3 años', '3-7 años', '7-10 años', 'Mayor de 10 años'],
        required: true
      },
      {
        id: 'esterilizado',
        text: '¿La mascota está esterilizada?',
        type: 'radio',
        options: ['Sí', 'No', 'No estoy seguro'],
        required: true
      }
    ]
  },
  {
    id: 'vacunacion-desparasitacion',
    name: 'Vacunacion y Desparasitacion',
    description: 'Protección completa contra enfermedades comunes. Vacunas esquemáticas y desparasitación interna y externa.',
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
        text: '¿Qué tipo de vacuna necesita?',
        type: 'select',
        options: ['Primera vez (cachorro)', 'Refuerzo anual', 'Vacuna antirrábica', 'No estoy seguro'],
        required: true
      },
      {
        id: 'ultima-desparasitacion',
        text: '¿Cuándo fue la última desparasitación?',
        type: 'select',
        options: ['Menos de 3 meses', '3-6 meses', 'Más de 6 meses', 'Nunca he desparasitado'],
        required: true
      },
      {
        id: 'reacciones-previas',
        text: '¿Ha tenido reacciones a vacunas anteriormente?',
        type: 'radio',
        options: ['Sí', 'No'],
        required: true
      }
    ]
  },
  {
    id: 'emergencias',
    name: 'Emergencias',
    description: 'Atención inmediata para situaciones críticas. Nuestro equipo está disponible para emergencias durante horario de atención.',
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
        text: '¿Qué tipo de emergencia presenta la mascota?',
        type: 'select',
        options: ['Accidente', 'Dificultad respiratoria', 'Vómito o diarrea severa', 'Envenenamiento', 'Golpe o traumatismo', 'Otro'],
        required: true
      },
      {
        id: 'tiempo-sintomas',
        text: '¿Desde cuándo presenta los síntomas?',
        type: 'select',
        options: ['Menos de 1 hora', '1-6 horas', '6-24 horas', 'Más de 24 horas'],
        required: true
      },
      {
        id: 'estado-mascota',
        text: '¿Cómo describiría el estado actual de la mascota?',
        type: 'textarea',
        required: true
      }
    ]
  },
  {
    id: 'grooming',
    name: 'Grooming',
    description: 'Servicio de estética integral para tu mascota. Baño, corte, secado, limpieza de oídos y corte de uñas.',
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
        text: 'Tamaño de la mascota',
        type: 'select',
        options: ['Pequeño (hasta 10 kg)', 'Mediano (10-25 kg)', 'Grande (25-45 kg)', 'Gigante (más de 45 kg)'],
        required: true
      },
      {
        id: 'tipo-servicio',
        text: '¿Qué servicio de grooming necesita?',
        type: 'select',
        options: ['Baño básico', 'Baño y corte', 'Paquete completo (baño, corte, uñas, oídos)', 'Solo uñas'],
        required: true
      },
      {
        id: 'condicion-piel',
        text: '¿Alguna condición especial de piel o pelaje?',
        type: 'textarea',
        required: false
      }
    ]
  },
  {
    id: 'nutricion',
    name: 'Nutricion',
    description: 'Asesoría nutricional personalizada. Dietas balanceadas, control de peso y planes alimenticios según la necesidad de tu mascota.',
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
        text: '¿Cuál es el objetivo de la consulta nutricional?',
        type: 'select',
        options: ['Control de peso (bajar)', 'Control de peso (subir)', 'Dieta para cachorro', 'Dieta para adulto mayor', 'Problemas digestivos', 'Alergias alimentarias'],
        required: true
      },
      {
        id: 'alimentacion-actual',
        text: '¿Qué tipo de alimento recibe actualmente?',
        type: 'select',
        options: ['Alimento seco premium', 'Alimento seco económico', 'Alimento húmedo', 'Comida casera', 'Mixto (seco y húmedo)', 'Otro'],
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
