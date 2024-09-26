import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactGroup = new FormGroup({
    senderName: new FormControl('Nikita', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  submitForm() {
    console.log(this.contactGroup.valid);
    // if (this.contactGroup..dirty){
    //   alert("you changed the name field");
    // }
  }
}
