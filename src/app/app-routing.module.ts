import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FeedComponent } from './feed/feed.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { RegisterComponent } from './register/register.component';
import { AddcardComponent } from './settings/addcard/addcard.component';
import { AddressComponent } from './settings/address/address.component';
import { AddresslistComponent } from './settings/addresslist/addresslist.component';
import { CarddetailsComponent } from './settings/carddetails/carddetails.component';
import { EditaddressComponent } from './settings/editaddress/editaddress.component';
import { EditcardComponent } from './settings/editcard/editcard.component';
import { SettingsComponent } from './settings/settings.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent,
    
  },
  {path:'cart',component:CartComponent},
  {path:'feed',component:FeedComponent},
  {path:'orderstatus',component:OrderstatusComponent},
  {path:'userdetails',component:UserdetailsComponent},

  {path:'settings',component:SettingsComponent},
  {path:'address',component:AddressComponent},
  {path:'addresslist',component:AddresslistComponent},
  {path:'editaddress/:id',component:EditaddressComponent},
  {path:'addcard',component:AddcardComponent},
  {path:'carddetails',component:CarddetailsComponent},
  {path:'editcard',component:EditcardComponent},
  {path:'editcard/:id',component:EditcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
