// ARCHIVO DE DATOS MOCK - Preguntas frecuentes de Drama Pet
// Estos son datos ficticios para desarrollo y pruebas.
// NO representan informacion oficial del negocio.

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  name: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'citas',
    name: 'Citas',
    items: [
      {
        id: 'faq-cita-001',
        question: '¿Cómo puedo agendar una cita?',
        answer: 'Puedes agendar tu cita a través de nuestra página web, por WhatsApp al número 999 888 777, o llamando directamente a nuestra clínica. Te recomendamos agendar con al menos 24 horas de anticipación.'
      },
      {
        id: 'faq-cita-002',
        question: '¿Puedo cancelar o reprogramar mi cita?',
        answer: 'Sí, puedes cancelar o reprogramar tu cita hasta 12 horas antes de la hora programada sin ningún costo. Para cancelaciones de último momento, te pedimos que nos avises lo antes posible para poder atender a otros pacientes.'
      },
      {
        id: 'faq-cita-003',
        question: '¿Qué debo llevar a la primera cita?',
        answer: 'Trae la cédula de identidad de tu mascota (si la tiene), los registros de vacunas anteriores, una lista de los alimentos que consume actualmente y cualquier medicamento que esté tomando. Si es la primera vez que vienes, también te pediremos tus datos de contacto.'
      }
    ]
  },
  {
    id: 'servicios',
    name: 'Servicios',
    items: [
      {
        id: 'faq-serv-001',
        question: '¿Qué servicios ofrecen?',
        answer: 'Ofrecemos consultas generales, vacunación y desparasitación, grooming (estética animal), asesoría nutricional y atención de emergencias. Cada servicio está diseñado para cubrir las necesidades de tu mascota con la mejor calidad.'
      },
      {
        id: 'faq-serv-002',
        question: '¿Tratan todo tipo de mascotas?',
        answer: 'Atendemos perros, gatos y otras mascotas pequeñas como conejos y hámsteres. Para mascotas exóticas o de gran tamaño, te recomendamos consultar con anticipación para confirmar disponibilidad.'
      },
      {
        id: 'faq-serv-003',
        question: '¿Ofrecen servicios a domicilio?',
        answer: 'Actualmente estamos trabajando para ofrecer servicios a domicilio. Por el momento, todos los servicios se realizan en nuestras instalaciones. Mantente informado por nuestras redes sociales para futuras novedades.'
      }
    ]
  },
  {
    id: 'emergencias',
    name: 'Emergencias',
    items: [
      {
        id: 'faq-emer-001',
        question: '¿Cuáles son las horas de atención de emergencias?',
        answer: 'Nuestras emergencias se atienden de lunes a sábado de 8:00 AM a 8:00 PM. Para emergencias fuera de este horario, te recomendamos acudir a la clínica veterinaria de guardia más cercana.'
      },
      {
        id: 'faq-emer-002',
        question: '¿Cómo saber si mi mascota tiene una emergencia?',
        answer: 'Se considera emergencia: dificultad respiratoria, vómito o diarrea con sangre, convulsiones, intoxicación, traumatismos severos, incapacidad para orinar o defecar, y cualquier cambio repentino de comportamiento. Si no estás seguro, llámanos y te orientaremos.'
      }
    ]
  },
  {
    id: 'grooming',
    name: 'Grooming',
    items: [
      {
        id: 'faq-groom-001',
        question: '¿Cada cuánto tiempo debo hacer grooming a mi mascota?',
        answer: 'Depende de la raza y tipo de pelaje. Para perros de pelo largo, se recomienda cada 4-6 semanas. Para perros de pelo corto, cada 6-8 semanas. Los gatos pueden necesitar grooming cada 8-12 semanas, aunque algunos prefieren hacerlo en casa.'
      },
      {
        id: 'faq-groom-002',
        question: '¿Mi mascota tiene miedo al baño, qué hago?',
        answer: 'Nuestro equipo está entrenado para manejar mascotas con ansiedad. Utilizamos técnicas de calmado y productos suaves. Si tu mascota tiene mucho estrés, podemos hacer sesiones más cortas o programar un día con menos afluencia.'
      },
      {
        id: 'faq-groom-003',
        question: '¿Incluye el servicio de grooming el corte de uñas?',
        answer: 'Sí, todos nuestros paquetes de grooming incluyen corte de uñas y limpieza de oídos. Si solo necesitas el servicio de uñas, ofrecemos esa opción por separado.'
      }
    ]
  },
  {
    id: 'vacunacion',
    name: 'Vacunación',
    items: [
      {
        id: 'faq-vac-001',
        question: '¿Qué vacunas necesita mi cachorro?',
        answer: 'Los cachorros necesitan un esquema de vacunación que incluye: triple viral, moquillo, parvovirus y rabia. La primera vacuna se aplica a las 6-8 semanas de edad, con refuerzos cada 3-4 semanas hasta completar el esquema.'
      },
      {
        id: 'faq-vac-002',
        question: '¿Es obligatoria la vacuna antirrábica?',
        answer: 'Sí, la vacuna antirrábica es obligatoria por ley en el Perú. Debe aplicarse a partir de los 3 meses de edad y refrescarse anualmente. Te proporcionamos el certificado oficial después de la aplicación.'
      },
      {
        id: 'faq-vac-003',
        question: '¿Mi mascota puede tener reacciones a la vacuna?',
        answer: 'Como en cualquier vacuna, pueden presentarse reacciones leves como somnolencia, pérdida de apetito o hinchazón en el sitio de aplicación. Estos síntomas suelen desaparecer en 24-48 horas. En casos raros pueden ocurrir reacciones alérgicas, por lo que recomendamos esperar 15 minutos en la clínica después de la aplicación.'
      }
    ]
  },
  {
    id: 'pagos',
    name: 'Pagos',
    items: [
      {
        id: 'faq-pag-001',
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos efectivo, tarjetas de débito y crédito (Visa, Mastercard, American Express), transferencias bancarias y pagos por Yape o Plin. No aceptamos cheques.'
      },
      {
        id: 'faq-pag-002',
        question: '¿Ofrecen planes de pago o financiamiento?',
        answer: 'Sí, para tratamientos de mayor costo ofrecemos la posibilidad de dividir el pago en 2 o 3 cuotas sin interés. Consulta con nuestro equipo para conocer los detalles según el tratamiento.'
      },
      {
        id: 'faq-pag-003',
        question: '¿Tienen precios especiales para mascotas múltiples?',
        answer: 'Sí, si traes a 2 o más mascotas en la misma visita, te ofrecemos un descuento del 10% en consultas y un 15% en servicios de grooming. Es nuestra forma de premiar a las familias grandes.'
      }
    ]
  }
];
