import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';
import { IconComponent } from '../../../shared/icon/icon.component';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent {
  steps = [
    {
      number: '01',
      title: 'Elige tu mascota',
      description: 'Selecciona el servicio que necesitas y completa el formulario adaptativo.',
      icon: 'dog'
    },
    {
      number: '02',
      title: 'Reserva tu cita',
      description: 'Elige la fecha y hora que mejor se adapte a tu horario.',
      icon: 'calendar'
    },
    {
      number: '03',
      title: 'Nosotros nos encargamos',
      description: 'Nuestro equipo de profesionales cuidar\u00e1 a tu mascota con amor.',
      icon: 'heart'
    }
  ];
}
