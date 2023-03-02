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

    var elements = document.getElementsByClassName("column")as HTMLCollectionOf<HTMLElement>;

    var i;

    function listView() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
      }
    }

    function gridView() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
      }
    }
    var container = document.getElementById("btnContainer");
    var btns = container!.getElementsByClassName("btnn");
    for (var i:any = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
      });
    }
    }

    deleteContact(id: number) {
      this.contactService.deleteContact(id)
        .subscribe(() => {
          this.contacts = this.contacts.filter((contact) => contact.id !== id);
        });
    }
}
