import { Project } from './../models/Project-interface';
import { ProjectsService } from './../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { Technologies } from '../models/technologies';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule, ModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  projects ={} as Project[]
  constructor(private projectsService:ProjectsService){}
  
  ngOnInit(): void {
  this.projects=this.projectsService.GetProjects();
  }
  

}
