import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  navLinks = [
    { label: 'Inicio', route: '/' },
    { label: 'Servicios', route: '/servicios' },
    { label: 'Nuestra manada', route: '/manada' },
    { label: 'Preguntas frecuentes', route: '/faq' },
    { label: 'Contacto', route: '/contacto' }
  ];

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isOpen) {
      this.closeMenu();
    }
  }

  closeMenu(): void {
    this.close.emit();
  }

  onLinkClick(): void {
    this.closeMenu();
  }
}
