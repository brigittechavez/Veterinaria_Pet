// ARCHIVO DE DATOS MOCK - Horarios de Drama Pet
// Estos son datos ficticios para desarrollo y pruebas.
// NO representan la disponibilidad real de la clinica.

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DaySchedule {
  day: string;
  slots: TimeSlot[];
}

export const SCHEDULE: DaySchedule[] = [
  {
    day: 'Lunes',
    slots: [
      { time: '08:00', available: true },
      { time: '08:30', available: true },
      { time: '09:00', available: true },
      { time: '09:30', available: false },
      { time: '10:00', available: true },
      { time: '10:30', available: true },
      { time: '11:00', available: true },
      { time: '11:30', available: false },
      { time: '12:00', available: false },
      { time: '12:30', available: false },
      { time: '15:00', available: true },
      { time: '15:30', available: true },
      { time: '16:00', available: false },
      { time: '16:30', available: true },
      { time: '17:00', available: true },
      { time: '17:30', available: true }
    ]
  },
  {
    day: 'Martes',
    slots: [
      { time: '08:00', available: true },
      { time: '08:30', available: false },
      { time: '09:00', available: true },
      { time: '09:30', available: true },
      { time: '10:00', available: false },
      { time: '10:30', available: true },
      { time: '11:00', available: true },
      { time: '11:30', available: true },
      { time: '12:00', available: false },
      { time: '12:30', available: false },
      { time: '15:00', available: true },
      { time: '15:30', available: false },
      { time: '16:00', available: true },
      { time: '16:30', available: true },
      { time: '17:00', available: false },
      { time: '17:30', available: true }
    ]
  },
  {
    day: 'Miércoles',
    slots: [
      { time: '08:00', available: true },
      { time: '08:30', available: true },
      { time: '09:00', available: false },
      { time: '09:30', available: true },
      { time: '10:00', available: true },
      { time: '10:30', available: true },
      { time: '11:00', available: false },
      { time: '11:30', available: true },
      { time: '12:00', available: false },
      { time: '12:30', available: false },
      { time: '15:00', available: true },
      { time: '15:30', available: true },
      { time: '16:00', available: true },
      { time: '16:30', available: false },
      { time: '17:00', available: true },
      { time: '17:30', available: true }
    ]
  },
  {
    day: 'Jueves',
    slots: [
      { time: '08:00', available: true },
      { time: '08:30', available: true },
      { time: '09:00', available: true },
      { time: '09:30', available: false },
      { time: '10:00', available: true },
      { time: '10:30', available: false },
      { time: '11:00', available: true },
      { time: '11:30', available: true },
      { time: '12:00', available: false },
      { time: '12:30', available: false },
      { time: '15:00', available: false },
      { time: '15:30', available: true },
      { time: '16:00', available: true },
      { time: '16:30', available: true },
      { time: '17:00', available: true },
      { time: '17:30', available: false }
    ]
  },
  {
    day: 'Viernes',
    slots: [
      { time: '08:00', available: true },
      { time: '08:30', available: true },
      { time: '09:00', available: true },
      { time: '09:30', available: true },
      { time: '10:00', available: false },
      { time: '10:30', available: true },
      { time: '11:00', available: true },
      { time: '11:30', available: true },
      { time: '12:00', available: false },
      { time: '12:30', available: false },
      { time: '15:00', available: true },
      { time: '15:30', available: true },
      { time: '16:00', available: false },
      { time: '16:30', available: true },
      { time: '17:00', available: true },
      { time: '17:30', available: true }
    ]
  },
  {
    day: 'Sábado',
    slots: [
      { time: '09:00', available: true },
      { time: '09:30', available: true },
      { time: '10:00', available: true },
      { time: '10:30', available: false },
      { time: '11:00', available: true },
      { time: '11:30', available: true },
      { time: '12:00', available: true },
      { time: '12:30', available: false }
    ]
  }
];
