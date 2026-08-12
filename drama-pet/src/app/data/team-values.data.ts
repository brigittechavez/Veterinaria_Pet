// ARCHIVO DE DATOS MOCK - Valores y Filosofia de Drama Pet
// Estos son datos ficticios para desarrollo y pruebas.
// NO representan la mision o vision oficial del negocio.

export interface Value {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const VALUES: Value[] = [
  {
    id: 'val-sin-vueltas',
    name: 'Cuidado sin vueltas',
    description: 'No hacemos rodeos. Si tu mascota necesita atenci\u00f3n, la recibe con eficiencia y profesionalismo. Sin excusas, sin complicaciones.',
    icon: 'zap'
  },
  {
    id: 'val-claridad',
    name: 'Claridad',
    description: 'Te explicamos todo en t\u00e9rminos que entiendas. Sin jerga m\u00e9dica confusa, sin sorpresas en la factura. Transparencia total en cada paso.',
    icon: 'eye'
  },
  {
    id: 'val-cercania',
    name: 'Cercan\u00eda',
    description: 'Tratamos a tu mascota como si fuera nuestra. Con cari\u00f1o, paciencia y respeto. Porque sabemos que es parte de tu familia.',
    icon: 'users'
  },
  {
    id: 'val-bienestar',
    name: 'Bienestar',
    description: 'El bienestar de tu mascota es nuestra prioridad. No solo tratamos enfermedades, sino que promovemos una vida saludable y feliz.',
    icon: 'heart'
  },
  {
    id: 'val-respeto',
    name: 'Respeto por cada mascota',
    description: 'Cada animal es \u00fanico y merece un trato personalizado. Respetamos sus tiempos, sus miedos y su personalidad.',
    icon: 'award'
  }
];

export const PHILOSOPHY: string = `En Drama Pet creemos que cada mascota merece una atenci\u00f3n m\u00e9dica de calidad, sin vueltas ni complicaciones. Nuestro enfoque combina la experiencia veterinaria con un trato humano y cercano, porque entendemos que detr\u00e1s de cada mascota hay una familia que conf\u00eda en nosotros.`;

export const STORY: string = `Drama Pet naci\u00f3 de una idea simple: hacer que la experiencia veterinaria sea menos estresante tanto para las mascotas como para sus due\u00f1os. Fundada por un grupo de veterinarios apasionados, nuestra cl\u00ednica se caracteriza por un ambiente relajado, un equipo que genuinamente ama a los animales y una filosof\u00eda que pone el bienestar primero. No somos la cl\u00ednica m\u00e1s grande, pero podemos decir con seguridad que nos importa cada paciente que cruza nuestras puertas.`;

export const TEAM_INFO = {
  clinicName: 'Drama Pet',
  foundedYear: 2019,
  location: 'Lima, Peru',
  motto: 'Porque cada mascota merece una buena historia',
  socialMedia: {
    instagram: '@dramapet.pe',
    facebook: 'Drama Pet Peru',
    whatsapp: '999 888 777'
  }
};
