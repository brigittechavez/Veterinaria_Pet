import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';
import { IconComponent } from '../../../shared/icon/icon.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent, IconComponent, ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contactInfo = {
    address: 'Av. Larco 345, Miraflores, Lima',
    phone: '+51 999 888 777',
    email: 'contacto@dramapet.pe',
    hours: {
      weekdays: 'Lun - Vie: 08:00 - 20:00',
      saturday: 'Sáb: 09:00 - 18:00',
      sunday: 'Dom: Emergencias'
    }
  };

  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/dramapet', icon: 'message' },
    { name: 'Instagram', url: 'https://instagram.com/dramapet', icon: 'info' },
    { name: 'WhatsApp', url: 'https://wa.me/51999999999', icon: 'phone' }
  ];

  onFormSubmit(): void {
  }
}
