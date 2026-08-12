// ARCHIVO DE DATOS MOCK - Testimonios de Drama Pet
// Estos son datos ficticios para desarrollo y pruebas.
// NO representan opiniones reales de clientes.

export interface Testimonial {
  id: string;
  petName: string;
  species: 'perro' | 'gato';
  dramaLevel: number;
  comment: string;
  attribute: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-001',
    petName: 'Milo',
    species: 'perro',
    dramaLevel: 9,
    comment: 'Sobrevivio al banho. Apenas.',
    attribute: 'Paciente frecuente',
    image: 'assets/images/pets/milo.png'
  },
  {
    id: 'test-002',
    petName: 'Luna',
    species: 'gato',
    dramaLevel: 10,
    comment: 'Grito como si la estuvieran matando por una vacuna. La doctora Valeria la calmo en 2 minutos.',
    attribute: 'Paciente frecuente',
    image: 'assets/images/pets/luna.png'
  },
  {
    id: 'test-003',
    petName: 'Rocco',
    species: 'perro',
    dramaLevel: 7,
    comment: 'Lloro un poco en la consulta pero despues quiso jugar con todo el equipo. Muy profesionales.',
    attribute: 'Primera vez',
    image: 'assets/images/pets/rocco.png'
  },
  {
    id: 'test-004',
    petName: 'Nieve',
    species: 'gato',
    dramaLevel: 8,
    comment: 'Mi gata odia ir al veterinario, pero aqui la trataron con mucho cuidado. Regresare seguro.',
    attribute: 'Cliente nuevo',
    image: 'assets/images/pets/nieve.png'
  },
  {
    id: 'test-005',
    petName: 'Thor',
    species: 'perro',
    dramaLevel: 6,
    comment: 'El doctor Mateo es excelente. Le explico todo claramente y mi perro quedo como nuevo.',
    attribute: 'Paciente frecuente',
    image: 'assets/images/pets/thor.png'
  }
];
