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
        question: '\u00bfC\u00f3mo puedo agendar una cita?',
        answer: 'Puedes agendar tu cita a trav\u00e9s de nuestra p\u00e1gina web, por WhatsApp al n\u00famero 999 888 777, o llamando directamente a nuestra cl\u00ednica. Te recomendamos agendar con al menos 24 horas de anticipaci\u00f3n.'
      },
      {
        id: 'faq-cita-002',
        question: '\u00bfPuedo cancelar o reprogramar mi cita?',
        answer: 'S\u00ed, puedes cancelar o reprogramar tu cita hasta 12 horas antes de la hora programada sin ning\u00fan costo. Para cancelaciones de \u00faltimo momento, te pedimos que nos avises lo antes posible para poder atender a otros pacientes.'
      },
      {
        id: 'faq-cita-003',
        question: '\u00bfQu\u00e9 debo llevar a la primera cita?',
        answer: 'Trae la c\u00e9dula de identidad de tu mascota (si la tiene), los registros de vacunas anteriores, una lista de los alimentos que consume actualmente y cualquier medicamento que est\u00e9 tomando. Si es la primera vez que vienes, tambi\u00e9n te pediremos tus datos de contacto.'
      }
    ]
  },
  {
    id: 'servicios',
    name: 'Servicios',
    items: [
      {
        id: 'faq-serv-001',
        question: '\u00bfQu\u00e9 servicios ofrecen?',
        answer: 'Ofrecemos consultas generales, vacunaci\u00f3n y desparasitaci\u00f3n, grooming (est\u00e9tica animal), asesor\u00eda nutricional y atenci\u00f3n de emergencias. Cada servicio est\u00e1 dise\u00f1ado para cubrir las necesidades de tu mascota con la mejor calidad.'
      },
      {
        id: 'faq-serv-002',
        question: '\u00bfTratan todo tipo de mascotas?',
        answer: 'Atendemos perros, gatos y otras mascotas peque\u00f1as como conejos y h\u00e1msteres. Para mascotas ex\u00f3ticas o de gran tama\u00f1o, te recomendamos consultar con anticipaci\u00f3n para confirmar disponibilidad.'
      },
      {
        id: 'faq-serv-003',
        question: '\u00bfOfrecen servicios a domicilio?',
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
        question: '\u00bfCu\u00e1les son las horas de atenci\u00f3n de emergencias?',
        answer: 'Nuestras emergencias se atienden de lunes a s\u00e1bado de 8:00 AM a 8:00 PM. Para emergencias fuera de este horario, te recomendamos acudir a la cl\u00ednica veterinaria de guardia m\u00e1s cercana.'
      },
      {
        id: 'faq-emer-002',
        question: '\u00bfC\u00f3mo saber si mi mascota tiene una emergencia?',
        answer: 'Se considera emergencia: dificultad respiratoria, v\u00f3mito o diarrea con sangre, convulsiones, intoxicaci\u00f3n, traumatismos severos, incapacidad para orinar o defecar, y cualquier cambio repentino de comportamiento. Si no est\u00e1s seguro, ll\u00e1manos y te orientaremos.'
      }
    ]
  },
  {
    id: 'grooming',
    name: 'Grooming',
    items: [
      {
        id: 'faq-groom-001',
        question: '\u00bfCada cu\u00e1nto tiempo debo hacer grooming a mi mascota?',
        answer: 'Depende de la raza y tipo de pelaje. Para perros de pelo largo, se recomienda cada 4-6 semanas. Para perros de pelo corto, cada 6-8 semanas. Los gatos pueden necesitar grooming cada 8-12 semanas, aunque algunos prefieren hacerlo en casa.'
      },
      {
        id: 'faq-groom-002',
        question: '\u00bfMi mascota tiene miedo al ba\u00f1o, qu\u00e9 hago?',
        answer: 'Nuestro equipo est\u00e1 entrenado para manejar mascotas con ansiedad. Utilizamos t\u00e9cnicas de calmado y productos suaves. Si tu mascota tiene mucho estr\u00e9s, podemos hacer sesiones m\u00e1s cortas o programar un d\u00eda con menos afluencia.'
      },
      {
        id: 'faq-groom-003',
        question: '\u00bfIncluye el servicio de grooming el corte de u\u00f1as?',
        answer: 'S\u00ed, todos nuestros paquetes de grooming incluyen corte de u\u00f1as y limpieza de o\u00eddos. Si solo necesitas el servicio de u\u00f1as, ofrecemos esa opci\u00f3n por separado.'
      }
    ]
  },
  {
    id: 'vacunacion',
    name: 'Vacunaci\u00f3n',
    items: [
      {
        id: 'faq-vac-001',
        question: '\u00bfQu\u00e9 vacunas necesita mi cachorro?',
        answer: 'Los cachorros necesitan un esquema de vacunaci\u00f3n que incluye: triple viral, moquillo, parvovirus y rabia. La primera vacuna se aplica a las 6-8 semanas de edad, con refuerzos cada 3-4 semanas hasta completar el esquema.'
      },
      {
        id: 'faq-vac-002',
        question: '\u00bfEs obligatoria la vacuna antirr\u00e1bica?',
        answer: 'S\u00ed, la vacuna antirr\u00e1bica es obligatoria por ley en el Per\u00fa. Debe aplicarse a partir de los 3 meses de edad y refrescarse anualmente. Te proporcionamos el certificado oficial despu\u00e9s de la aplicaci\u00f3n.'
      },
      {
        id: 'faq-vac-003',
        question: '\u00bfMi mascota puede tener reacciones a la vacuna?',
        answer: 'Como en cualquier vacuna, pueden presentarse reacciones leves como somnolencia, p\u00e9rdida de apetito o hinchaz\u00f3n en el sitio de aplicaci\u00f3n. Estos s\u00edntomas suelen desaparecer en 24-48 horas. En casos raros pueden ocurrir reacciones al\u00e9rgicas, por lo que recomendamos esperar 15 minutos en la cl\u00ednica despu\u00e9s de la aplicaci\u00f3n.'
      }
    ]
  },
  {
    id: 'pagos',
    name: 'Pagos',
    items: [
      {
        id: 'faq-pag-001',
        question: '\u00bfQu\u00e9 m\u00e9todos de pago aceptan?',
        answer: 'Aceptamos efectivo, tarjetas de d\u00e9bito y cr\u00e9dito (Visa, Mastercard, American Express), transferencias bancarias y pagos por Yape o Plin. No aceptamos cheques.'
      },
      {
        id: 'faq-pag-002',
        question: '\u00bfOfrecen planes de pago o financiamiento?',
        answer: 'S\u00ed, para tratamientos de mayor costo ofrecemos la posibilidad de dividir el pago en 2 o 3 cuotas sin inter\u00e9s. Consulta con nuestro equipo para conocer los detalles seg\u00fan el tratamiento.'
      },
      {
        id: 'faq-pag-003',
        question: '\u00bfTienen precios especiales para mascotas m\u00faltiples?',
        answer: 'S\u00ed, si traes a 2 o m\u00e1s mascotas en la misma visita, te ofrecemos un descuento del 10% en consultas y un 15% en servicios de grooming. Es nuestra forma de premiar a las familias grandes.'
      }
    ]
  }
];
