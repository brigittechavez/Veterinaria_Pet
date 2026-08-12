import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VALUES, PHILOSOPHY, STORY, TEAM_INFO } from '../../../data/team-values.data';
import { VETS } from '../../../data/vets.data';
import { IconComponent } from '../../../shared/icon/icon.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IconComponent,
    ButtonComponent,
    TeamCardComponent,
    RevealDirective
  ],
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent {
  values = VALUES;
  philosophy = PHILOSOPHY;
  story = STORY;
  teamInfo = TEAM_INFO;
  vets = VETS;
}
