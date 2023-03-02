import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit{

  contact: Contact[] = [];
  id:number = 0;

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
      this.route.params.subscribe(
        data =>{
          this.id = data['id'];
          console.log(this.id);
          this.contactService.getContact(this.id)
          .subscribe((contact) => {
            this.contact = contact;
            console.log(contact);
          });
        }
      );
    }

    deleteContact(id: number) {
      this.contactService.deleteContact(id)
        .subscribe(() => {
          this.contact = this.contact.filter((contact) => contact.id !== id);
          this.router.navigate(['/home']);
        });
    }
}
