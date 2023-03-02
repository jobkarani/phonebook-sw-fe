import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = 'https://phonebook-sw-be-production.up.railway.app/';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}contacts/`);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.baseUrl}contacts/create/`, contact);
  }

  getContact(id: number): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}contactdetails/${id}/`);
  }

  updateContact(id: number, contact: Contact): Observable<Contact[]> {
    return this.http.put<Contact[]>(`${this.baseUrl}contacts/${id}/update/`, contact);
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}contacts/${id}/delete/`);
  }
  
}
