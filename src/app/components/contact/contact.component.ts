import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = { name: '', email: '', subject: '', message: '' };
  submitted = false;
  currentYear = new Date().getFullYear();

  onSubmit() {
    const { name, email, subject, message } = this.form;
    const body = encodeURIComponent(
      `Name: ${name}\nFrom: ${email}\n\n${message}`
    );
    const sub  = encodeURIComponent(subject || `Message from ${name}`);
    window.location.href =
      `mailto:maasandramchidanand@gmail.com?subject=${sub}&body=${body}`;
    this.submitted = true;
    this.form = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => { this.submitted = false; }, 5000);
  }
}

