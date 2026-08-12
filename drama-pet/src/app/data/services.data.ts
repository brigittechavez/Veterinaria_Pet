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
    description: 'Evaluacion completa de salud para tu mascota. Incluye examen fisico, revision de antecedentes y recomendaciones personalizadas.',
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
        text: 'Cual es el motivo de la consulta?',
        type: 'textarea',
        required: true
      },
      {
        id: 'edad-mascota',
        text: 'Edad de la mascota',
        type: 'select',
        options: ['Menor de 1 anio', '1-3 anios', '3-7 anios', '7-10 anios', 'Mayor de 10 anios'],
        required: true
      },
      {
        id: 'esterilizado',
        text: 'La mascota esta esterilizada?',
        type: 'radio',
        options: ['Si', 'No', 'No estoy seguro'],
        required: true
      }
    ]
  },
  {
    id: 'vacunacion-desparasitacion',
    name: 'Vacunacion y Desparasitacion',
    description: 'Proteccion completa contra enfermedades comunes. Vacunas esquematicas y desparasitacion interna y externa.',
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
        text: 'Que tipo de vacuna necesita?',
        type: 'select',
        options: ['Primera vez (cachorro)', 'Refuerzo anual', 'Vacuna antirrabica', 'No estoy seguro'],
        required: true
      },
      {
        id: 'ultima-desparasitacion',
        text: 'Cuando fue la ultima desparasitacion?',
        type: 'select',
        options: ['Menos de 3 meses', '3-6 meses', 'Mas de 6 meses', 'Nunca he desparasitado'],
        required: true
      },
      {
        id: 'reacciones-previas',
        text: 'Ha tenido reacciones a vacunas anteriormente?',
        type: 'radio',
        options: ['Si', 'No'],
        required: true
      }
    ]
  },
  {
    id: 'emergencias',
    name: 'Emergencias',
    description: 'Atencion inmediata para situaciones criticas. Nuestro equipo esta disponible para emergencias durante horario de atencion.',
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
        text: 'Que tipo de emergencia presenta la mascota?',
        type: 'select',
        options: ['Accidente', 'Dificultad respiratoria', 'Vomito o diarrea severa', 'Envenenamiento', 'Golpe o traumatismo', 'Otro'],
        required: true
      },
      {
        id: 'tiempo-sintomas',
        text: 'Desde cuando presenta los sintomas?',
        type: 'select',
        options: ['Menos de 1 hora', '1-6 horas', '6-24 horas', 'Mas de 24 horas'],
        required: true
      },
      {
        id: 'estado-mascota',
        text: 'Como describiria el estado actual de la mascota?',
        type: 'textarea',
        required: true
      }
    ]
  },
  {
    id: 'grooming',
    name: 'Grooming',
    description: 'Servicio de estetistica integral para tu mascota. Banho, corte, secado, limpieza de oidos y corte de uinas.',
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
        text: 'Tamano de la mascota',
        type: 'select',
        options: ['Pequeno (hasta 10 kg)', 'Mediano (10-25 kg)', 'Grande (25-45 kg)', 'Gigante (mas de 45 kg)'],
        required: true
      },
      {
        id: 'tipo-servicio',
        text: 'Que servicio de grooming necesita?',
        type: 'select',
        options: ['Banho basico', 'Banho y corte', 'Paquete completo (banho, corte, uinas, oidos)', 'Solo uinas'],
        required: true
      },
      {
        id: 'condicion-piel',
        text: 'Alguna condicion especial de piel o pelaje?',
        type: 'textarea',
        required: false
      }
    ]
  },
  {
    id: 'nutricion',
    name: 'Nutricion',
    description: 'Asesoria nutricional personalizada. Dietas balanceadas, control de peso y planes alimenticios segun la necesidad de tu mascota.',
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
        text: 'Cual es el objetivo de la consulta nutricional?',
        type: 'select',
        options: ['Control de peso (bajar)', 'Control de peso (subir)', 'Dieta para cachorro', 'Dieta para adulto mayor', 'Problemas digestivos', 'Alergias alimentarias'],
        required: true
      },
      {
        id: 'alimentacion-actual',
        text: 'Que tipo de alimento recibe actualmente?',
        type: 'select',
        options: ['Alimento seco premium', 'Alimento seco economico', 'Alimento humedo', 'Comida casera', 'Mixto (seco y humedo)', 'Otro'],
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
