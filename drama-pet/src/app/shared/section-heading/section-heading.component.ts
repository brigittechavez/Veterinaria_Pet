import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent {
  @Input() title: string = '';
  @Input() subtitle: string | undefined;
  @Input() align: 'left' | 'center' = 'left';
  @Input() dark: boolean = false;
}
