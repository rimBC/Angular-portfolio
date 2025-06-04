import { ContactMessagesService } from './../../services/contact-messages.service';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from '../../models/message-interface';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule,CommonModule],
  providers: [ContactMessagesService],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
myEmail:string= 'benchaalia.rim@etudiant-fst.utm.tn';
title: 'success'|'failed'='failed';
isModalVisible:boolean=false;
response :string=`No data wass sent`;
myAddress: string=`27 rue du liban 4éme etage, 1002 Tunis Tunisia (Karriery)`;

closeModal() {
  this.isModalVisible=false;

}
contactForm = this.fb.group({
      name: ['', Validators.required],
      phone:[null, Validators.required],
      email:['', [Validators.required,Validators.email]],
      subject:'',
      message:'',
      

    })
    constructor(private fb: FormBuilder,
                private contactService:ContactMessagesService){

    }
    
    sendMessage() { 
      console.log("our form",this.contactForm.value,
                             this.contactForm.invalid);
      const formData = this.contactForm.value;
      this.contactService.sendMessage(formData).subscribe(response => {
      console.log(response)
      this.isModalVisible=true
      this.response=`Your message was sent successfully!
      we\'ll get back to you as soon as possible `
      this.title="success";
    }, error => {
      this.isModalVisible=true
      this.response= 'Error submitting form';
      this.title="failed";

    });

      }

    closeModalOutsideClick(event: MouseEvent){
      const targetElement = event.target as HTMLElement
      if(targetElement.classList.contains("fixed")){
       this.closeModal();
    }
  }

      


}
