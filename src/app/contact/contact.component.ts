import { Component } from '@angular/core';
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
email:string= 'benchaalia.rim@etudiant-fst.utm.tn';

}
