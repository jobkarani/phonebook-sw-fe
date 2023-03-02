import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent {

  contact: Contact[] = [];
  id:number = 0;

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) {}

  updateContact(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.contactService
        .updateContact(this.id, this.contact[0])
        .subscribe((updatedContacts) => {
          console.log(updatedContacts);
          this.router.navigate(['/home']);
        });
      }
    );

  }

}
