import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Inicio', route: '/' },
    { label: 'Servicios', route: '/servicios' },
    { label: 'Nuestra manada', route: '/nuestra-manada' },
    { label: 'Preguntas frecuentes', route: '/preguntas-frecuentes' },
    { label: 'Contacto', route: '/contacto' }
  ];

  serviceLinks = [
    { label: 'Consulta general', route: '/servicios' },
    { label: 'Vacunacion', route: '/servicios' },
    { label: 'Grooming', route: '/servicios' },
    { label: 'Nutricion', route: '/servicios' },
    { label: 'Emergencias', route: '/servicios' }
  ];

  socialLinks = [
    { label: 'Instagram', url: 'https://instagram.com/dramapet', icon: 'instagram' },
    { label: 'Facebook', url: 'https://facebook.com/dramapet', icon: 'facebook' },
    { label: 'TikTok', url: 'https://tiktok.com/@dramapet', icon: 'tiktok' }
  ];
}
