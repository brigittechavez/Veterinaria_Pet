import { Component, Input, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SCHEDULE, TimeSlot } from '../../../data/schedule.data';

@Component({
  selector: 'app-date-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-step.component.html',
  styleUrls: ['./date-step.component.scss']
})
export class DateStepComponent {
  @Input() selectedDate: string = '';
  @Input() selectedTime: string = '';
  @Output() dateSelected = new EventEmitter<string>();
  @Output() timeSelected = new EventEmitter<string>();

  days = this.generateDays();
  schedule = SCHEDULE;

  generateDays(): { date: Date; label: string; dayName: string; dayNumber: string; monthName: string }[] {
    const days: { date: Date; label: string; dayName: string; dayNumber: string; monthName: string }[] = [];
    const today = new Date();
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date,
        label: this.formatDateKey(date),
        dayName: dayNames[date.getDay()],
        dayNumber: date.getDate().toString(),
        monthName: monthNames[date.getMonth()]
      });
    }

    return days;
  }

  formatDateKey(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getDaySchedule(day: { date: Date }): TimeSlot[] {
    const dayIndex = day.date.getDay();
    const scheduleIndex = dayIndex === 0 ? -1 : dayIndex - 1;
    if (scheduleIndex < 0 || scheduleIndex >= this.schedule.length) {
      return [];
    }
    return this.schedule[scheduleIndex].slots;
  }

  getAvailableSlots(): TimeSlot[] {
    const dateStr = this.selectedDate;
    if (!dateStr) return [];
    const day = this.days.find(d => d.label === dateStr);
    if (!day) return [];
    return this.getDaySchedule(day);
  }

  selectDate(day: { label: string }): void {
    this.dateSelected.emit(day.label);
  }

  selectTime(time: string): void {
    this.timeSelected.emit(time);
  }

  isToday(day: { date: Date }): boolean {
    const today = new Date();
    return day.date.toDateString() === today.toDateString();
  }
}
