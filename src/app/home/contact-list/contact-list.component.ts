import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

    ngOnInit(): void {
      this.contactService.getContacts().subscribe((contacts) =>
        this.contacts = contacts
     );
    }

    deleteContact(id: number) {
      this.contactService.deleteContact(id)
        .subscribe(() => {
          this.contacts = this.contacts.filter((contact) => contact.id !== id);
        });
    }
}
