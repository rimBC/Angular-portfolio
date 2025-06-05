import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../models/Project-interface';
import { Technologies } from '../../models/technologies';
import { ImageSliderComponent } from "../../image-slider/image-slider.component";

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  noImageURL: String="./assets/noPreview.jpg";
  @Input() project :Project ={id:1, ProjetTitle:"CRM as part of an erp solution" ,description:"For my end-of-year project at karriery, we developed a Customer Relationship Management (CRM) system titled NemoCRM as part of an ERP project The goal of our application is to simplify business management for Karriery’s client by providing a centralised platform that consolidates all their needs in one place. \n This platform will enable efficient tracking of progress, maintain a comprehensive history of all ongoing, achieved, or cancelled deals, and ensure seamless access to crucial information.",Technologies:[Technologies.ANGULAR,Technologies.NESTJS,Technologies.POSTGRES],images:["./assets/project-2.png"]};
  @Input() title = '';
  @Output() emitLink = new EventEmitter();
  @Output() emitExit = new EventEmitter();

  isModalVisible:boolean = true;

  closeModal(){
    this.emitExit.emit();
  }

  closeModalOutsideClick(event: MouseEvent){
    const targetElement = event.target as HTMLElement
    if(targetElement.classList.contains("bg-gray-800")){
      this.closeModal();
    }
  }
}
