import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../../../data/services.data';

@Component({
  selector: 'app-questions-step',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './questions-step.component.html',
  styleUrls: ['./questions-step.component.scss']
})
export class QuestionsStepComponent implements OnInit {
  @Input() selectedService: Service | null = null;
  @Input() questionsAnswers: Record<string, string> = {};
  @Output() answersChanged = new EventEmitter<Record<string, string>>();

  questionsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.questionsForm = this.fb.group({});
  }

  ngOnInit(): void {
    if (!this.selectedService) return;

    this.selectedService.adaptiveQuestions.forEach(question => {
      const validators = question.required ? [Validators.required] : [];
      const savedValue = this.questionsAnswers[question.id] || '';
      this.questionsForm.addControl(question.id, this.fb.control(savedValue, validators));
    });

    this.questionsForm.valueChanges.subscribe(values => {
      this.answersChanged.emit(values);
    });
  }

  getFieldError(fieldId: string): string {
    const control = this.questionsForm.get(fieldId);
    if (control?.invalid && control?.touched) {
      if (control.errors?.['required']) {
        return 'Este campo es obligatorio.';
      }
    }
    return '';
  }

  isFieldInvalid(fieldId: string): boolean {
    const control = this.questionsForm.get(fieldId);
    return !!(control?.invalid && control?.touched);
  }
}
