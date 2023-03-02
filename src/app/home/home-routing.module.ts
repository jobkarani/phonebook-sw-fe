import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {path:"",component:ContactListComponent},
        {path:"create",component:IndexComponent},
        {path:"contact-details/:id",component:ContactDetailsComponent},
        {path:"update-contact/:id",component:UpdateContactComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}