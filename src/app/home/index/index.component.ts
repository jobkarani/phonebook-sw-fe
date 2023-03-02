import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  contacts: Contact[] = [];
  contactForm!: FormGroup;


  constructor(
    private router: Router,
    private contactService: ContactService,
    private fb: FormBuilder,
     ) {}

     ngOnInit(): void {
      this.contactForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [''],
        location: ['']
      });
      
      this.contactService.getContacts().subscribe((contacts) =>
        this.contacts = contacts
       );
    }

  onSubmit() {
    const contact: Contact = {
      id: 0,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      phoneNumber: this.contactForm.value.phoneNumber,
      location: this.contactForm.value.location
    };

    this.contactService.createContact(contact)
      .subscribe((createdContact) => {
        console.log('Created Contact:', createdContact);
        this.router.navigate(['/home']);
      });
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id)
      .subscribe(() => {
        this.contacts = this.contacts.filter((contact) => contact.id !== id);
      });
  }
}
