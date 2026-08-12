import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @Output() formSubmit = new EventEmitter<void>();

  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;

  asuntos = [
    { value: 'general', label: 'Consulta general' },
    { value: 'cita', label: 'Agendar cita' },
    { value: 'urgencia', label: 'Urgencia' },
    { value: 'otro', label: 'Otro' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      asunto: ['general', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get nombre() {
    return this.contactForm.get('nombre');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get telefono() {
    return this.contactForm.get('telefono');
  }

  get asunto() {
    return this.contactForm.get('asunto');
  }

  get mensaje() {
    return this.contactForm.get('mensaje');
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.formSubmit.emit();
      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.contactForm.reset({ asunto: 'general' });
    this.isSubmitted = false;
  }
}
