import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project-interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  noImageURL: String="./assets/noPreview.jpg";
  @Input() project!: Project


}
