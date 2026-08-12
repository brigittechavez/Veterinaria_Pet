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
        question: 'Como puedo agendar una cita?',
        answer: 'Puedes agendar tu cita a traves de nuestra pagina web, por WhatsApp al numero 999 888 777, o llamando directamente a nuestra clinica. Te recomendamos agendar con al menos 24 horas de anticipacion.'
      },
      {
        id: 'faq-cita-002',
        question: 'Puedo cancelar o reprogramar mi cita?',
        answer: 'Si, puedes cancelar o reprogramar tu cita hasta 12 horas antes de la hora programada sin ningun costo. Para cancelaciones de ultimo momento, te pedimos que nos avises lo antes posible para poder atender a otros pacientes.'
      },
      {
        id: 'faq-cita-003',
        question: 'Que debo llevar a la primera cita?',
        answer: 'Trae la cedula de identidad de tu mascota (si la tiene), los registros de vacunas anteriores, una lista de los alimentos que consume actualmente y cualquier medicamento que este tomando. Si es la primera vez que vienes, tambien te pediremos tus datos de contacto.'
      }
    ]
  },
  {
    id: 'servicios',
    name: 'Servicios',
    items: [
      {
        id: 'faq-serv-001',
        question: 'Que servicios ofrecen?',
        answer: 'Ofrecemos consultas generales, vacunacion y desparasitacion, grooming (estetistica animal), asesoria nutricional y atencion de emergencias. Cada servicio esta disenado para cubrir las necesidades de tu mascota con la mejor calidad.'
      },
      {
        id: 'faq-serv-002',
        question: 'Tratan todo tipo de mascotas?',
        answer: 'Atendemos perros, gatos y otras mascotas pequenas como conejos y hámsteres. Para mascotas exoticas o de gran tamano, te recomendamos consultar con anticipacion para confirmar disponibilidad.'
      },
      {
        id: 'faq-serv-003',
        question: 'Ofrecen servicios a domicilio?',
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
        question: 'Cuales son las horas de atencion de emergencias?',
        answer: 'Nuestras emergencias se atienden de lunes a sabado de 8:00 AM a 8:00 PM. Para emergencias fuera de este horario, te recomendamos acudir a la clinica veterinaria de guardia mas cercana.'
      },
      {
        id: 'faq-emer-002',
        question: 'Como saber si mi mascota tiene una emergencia?',
        answer: 'Se considera emergencia: dificultad respiratoria, vomito o diarrea con sangre, convulsiones, intoxicacion, traumatismos severos, incapacidad para orinar o defecar, y cualquier cambio repentino de comportamiento. Si no estas seguro, llamanos y te orientaremos.'
      }
    ]
  },
  {
    id: 'grooming',
    name: 'Grooming',
    items: [
      {
        id: 'faq-groom-001',
        question: 'Cada cuant tiempo debo hacer grooming a mi mascota?',
        answer: 'Depende de la raza y tipo de pelaje. Para perros de pelo largo, se recomienda cada 4-6 semanas. Para perros de pelo corto, cada 6-8 semanas. Los gatos pueden necesitar grooming cada 8-12 semanas, aunque algunos prefieren hacerlo en casa.'
      },
      {
        id: 'faq-groom-002',
        question: 'Mi mascota tiene miedo al banho, que hago?',
        answer: 'Nuestro equipo esta entrenado para manejar mascotas con ansiedad. Utilizamos tecnicas de calmado y productos suaves. Si tu mascota tiene mucho estrés, podemos hacer sesiones mas cortas o programar un dia con menos afluencia.'
      },
      {
        id: 'faq-groom-003',
        question: 'Incluye el servicio de grooming el corte de uinas?',
        answer: 'Si, todos nuestros paquetes de grooming incluyen corte de uinas y limpieza de oidos. Si solo necesitas el servicio de uinas, ofrecemos esa opcion por separado.'
      }
    ]
  },
  {
    id: 'vacunacion',
    name: 'Vacunacion',
    items: [
      {
        id: 'faq-vac-001',
        question: 'Que vacunas necesita mi cachorro?',
        answer: 'Los cachorros necesitan un esquema de vacunacion que incluye: triple viral, moquillo, parvovirus y rabia. La primera vacuna se aplica a las 6-8 semanas de edad, con refuerzos cada 3-4 semanas hasta completar el esquema.'
      },
      {
        id: 'faq-vac-002',
        question: 'Es obligatoria la vacuna antirrabica?',
        answer: 'Si, la vacuna antirrabica es obligatoria por ley en el Peru. Debe aplicarse a partir de los 3 meses de edad y refrescarse anualmente. Te proporcionamos el certificado oficial despues de la aplicacion.'
      },
      {
        id: 'faq-vac-003',
        question: 'Mi mascota puede tener reacciones a la vacuna?',
        answer: 'Como en cualquier vacuna, pueden presentarse reacciones leves como somnolencia, perdida de apetito o hinchazon en el sitio de aplicacion. Estos síntomas suelen desaparecer en 24-48 horas. En casos raros pueden ocurrir reacciones alergicas, por lo que recomendamos esperar 15 minutos en la clinica despues de la aplicacion.'
      }
    ]
  },
  {
    id: 'pagos',
    name: 'Pagos',
    items: [
      {
        id: 'faq-pag-001',
        question: 'Que metodos de pago aceptan?',
        answer: 'Aceptamos efectivo, tarjetas de debito y credito (Visa, Mastercard, American Express), transferencias bancarias y pagos por Yape o Plin. No aceptamos cheques.'
      },
      {
        id: 'faq-pag-002',
        question: 'Ofrecen planes de pago o financiamiento?',
        answer: 'Si, para tratamientos de mayor costo ofrecemos la posibilidad de dividir el pago en 2 o 3 cuotas sin interes. Consulta con nuestro equipo para conocer los detalles segun el tratamiento.'
      },
      {
        id: 'faq-pag-003',
        question: 'Tienen precios especiales para mascotas multiples?',
        answer: 'Si, si traes a 2 o mas mascotas en la misma visita, te ofrecemos un descuento del 10% en consultas y un 15% en servicios de grooming. Es nuestra forma de premiar a las familias grandes.'
      }
    ]
  }
];
