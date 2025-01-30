import { Injectable } from '@angular/core';
import { Technologies } from '../models/technologies';
import { Project } from '../models/Project-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id:1, ProjetTitle:"CRM as part of an erp solution" ,description:"For my end-of-year project at karriery, we developed a Customer Relationship Management (CRM) system titled NemoCRM as part of an ERP project The goal of our application is to simplify business management for Karriery’s client by providing a centralised platform that consolidates all their needs in one place. \n This platform will enable efficient tracking of progress, maintain a comprehensive history of all ongoing, achieved, or cancelled deals, and ensure seamless access to crucial information.",Technologies:[Technologies.ANGULAR,Technologies.NESTJS,Technologies.POSTGRES],images:["./assets/project-2.png"]},
    {id:1, ProjetTitle:"coffee shop template" ,description:"",Technologies:[Technologies.FIGMA],images:["./assets/project-1.png"]},
    {id:1, ProjetTitle:"Music Website" ,description:"",Technologies:[Technologies.HTML,Technologies.CSS,Technologies.JAVASCRIPT],images:["./assets/project-3.png"]},
    {id:1, ProjetTitle:"" ,description:"",Technologies:[],images:[]},
    {id:1, ProjetTitle:"" ,description:"",Technologies:[],images:["./assets/Desktop - 2.jpg"]},
     {id:1, ProjetTitle:"testing" ,description:"",Technologies:[],images:[]},      
  ]

  constructor() {  }

  GetProjects(){
    return  this.projects;
  }
  GetProjectByID(idP:number){
    return this.projects.find( project=>project.id === idP)
  }

}
