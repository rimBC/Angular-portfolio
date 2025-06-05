import { Project } from './../models/Project-interface';
import { Technologies } from './../models/technologies';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ProjectsService {
    pirateBay : Project={id:1, ProjetTitle:"pirate bay redesign challenge" ,description:"As part of the HCI module, we assessed the interface of the website The Pirate Bay, found it lacking in usability, and proposed a more modern and intuitive redesign using Figma. The new template needed to be more ergonomic, user-friendly, and feature a modern UI.",Technologies:[Technologies.FIGMA,Technologies.Canva,Technologies.SP,],images:["./assets/pirateBay/PB1.png","./assets/pirateBay/PB9.png","./assets/pirateBay/PB2.png","./assets/pirateBay/PB3.png","./assets/pirateBay/PB4.png","./assets/pirateBay/PB5.png","./assets/pirateBay/PB7.png","./assets/pirateBay/PB8.png",],Link:'https://www.figma.com/design/fKBi33EjLdg4qeWyXbJIi1/ihm-project---pirate-Bay-redesign?node-id=0-1&t=KTJTGj8ElzZcKK2e-1'}

    CRM:Project={id:1, ProjetTitle:"CRM as part of an erp solution" ,description:"For my end-of-year project at karriery, we developed a Customer Relationship Management (CRM) system titled NemoCRM as part of an ERP project The goal of our application is to simplify business management for Karriery’s client by providing a centralised platform that consolidates all their needs in one place. \n This platform will enable efficient tracking of progress, maintain a comprehensive history of all ongoing, achieved, or cancelled deals, and ensure seamless access to crucial information.",Technologies:[Technologies.ANGULAR,Technologies.NESTJS,Technologies.TCSS,Technologies.POSTGRES,],images:["./assets/crm/sc2.png","./assets/crm/sc8.png","./assets/crm/sc18.png","./assets/crm/sc20.png","./assets/crm/sc22.png","./assets/crm/sc24.png","./assets/crm/sc26.png","./assets/crm/sc27.png","./assets/crm/listCatg.png","./assets/crm/ProductsList.png",]}

    CoffeeShop:Project={id:1, ProjetTitle:"coffee shop template" ,description:"",Technologies:[Technologies.FIGMA],images:["./assets/coffeeShop/CoffeeShop5.png","./assets/coffeeShop/CoffeeShop1.png","./assets/coffeeShop/CoffeeShop2.png","./assets/coffeeShop/CoffeeShop4.png","./assets/coffeeShop/CoffeeShop4.png",  ],Link:"https://www.figma.com/design/a8OKqDIYDCX31cOl2Tmof7/Coffee-Shop?node-id=0-1&t=WdlGUQ2dxzuXG8Xp-1"};
    projects: Project[] = [
    this.pirateBay,this.CRM,
    this.CoffeeShop
    ,
    
    {id:1, ProjetTitle:"AI Maze Solver" ,description:"Created and implemented a Python algorithm capable of solving a maze automatically using artificial intelligence techniques.",Technologies:[Technologies.py,Technologies.SP],images:["./assets/maze1.png","./assets/maze2.png"]},
    
    {id:1, ProjetTitle:"Music Website" ,description:"Developed an interactive website to explore playlists and play music. The project features JavaScript animations, responsive layout with CSS, and a clear HTML structure to ensure a smooth user experience across all devices.",Technologies:[Technologies.HTML,Technologies.CSS,Technologies.JAVASCRIPT,Technologies.SP],images:["./assets/Music/music1.png","./assets/Music/music2.png","./assets/Music/music3.png","./assets/Music/music4.png","./assets/Music/music5.png","./assets/Music/music6.png",]},
          
  ]

  constructor() {  
    
  }

  GetProjects(){
    return  this.projects;
  }
  GetProjectByID(idP:number){
    return this.projects.find( project=>project.id === idP)
  }

}
