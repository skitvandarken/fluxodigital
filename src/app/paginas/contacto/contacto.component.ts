import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  successMessage = false;

  constructor(private router: Router) {}

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_janacmv', 'template_cixs6zb', e.target as HTMLFormElement, {
        publicKey: 'oT4Vp8OvVm40Rg-oA',
        ...this.formData // Spread operator to include form data
      })
      .then(
        () => {
          this.successMessage = true; // Set message to true on success
          console.log('SUCCESS!');
          this.formData = { // Reset form data to empty object
            name: '',
            email: '',
            subject: '',
            message: '',
          };
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }

  
}
