import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vet } from '../../../../data/vets.data';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {
  @Input() vet!: Vet;
}
