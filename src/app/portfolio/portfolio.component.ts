import { Project } from './../models/Project-interface';
import { ProjectsService } from './../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { Technologies } from '../models/technologies';
import { ModalComponent } from '../project-modal/modal.component';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule, ModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  projects ={} as Project[]
  openProject:Project ={id:1, ProjetTitle:"CRM as part of an erp solution" ,description:"For my end-of-year project at karriery, we developed a Customer Relationship Management (CRM) system titled NemoCRM as part of an ERP project The goal of our application is to simplify business management for Karriery’s client by providing a centralised platform that consolidates all their needs in one place. \n This platform will enable efficient tracking of progress, maintain a comprehensive history of all ongoing, achieved, or cancelled deals, and ensure seamless access to crucial information.",Technologies:[Technologies.ANGULAR,Technologies.NESTJS,Technologies.POSTGRES],images:["./assets/project-2.png"]};
  isModalOpen: boolean=false;


  constructor(private projectsService:ProjectsService){}
  
  ngOnInit(): void {
  this.projects=this.projectsService.GetProjects();
  }
  
  openProjectModal(project:Project) {
    this.openProject=project;
    this.isModalOpen=true;
  }

  closeProjectModal(){
    this.isModalOpen=false;
  }
  openLink(){
    
  }

}
