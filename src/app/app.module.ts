import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SettingsComponent } from './settings/settings.component';
import { FeedComponent } from './feed/feed.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddresslistComponent } from './settings/addresslist/addresslist.component';
import { AddressComponent } from './settings/address/address.component';
import { CartComponent } from './cart/cart.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CarddetailsComponent } from './settings/carddetails/carddetails.component';
import { HeaderComponent } from './header/header.component';
import { EditaddressComponent } from './settings/editaddress/editaddress.component';
import { AddcardComponent } from './settings/addcard/addcard.component';
import { EditcardComponent } from './settings/editcard/editcard.component';
const ROUTES: Routes=[
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},

  {path:'cart',component:CartComponent},
  {path:'feed',component:FeedComponent},
  {path:'feed/:id',component:FeedComponent},
  {path:'orderstatus',component:OrderstatusComponent},
  {path:'orderstatus/:id',component:OrderstatusComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'userdetails/:id',component:FeedComponent},

  {path:'settings',component:SettingsComponent},
  {path:'address',component:AddressComponent},
  {path:'addresslist',component:AddresslistComponent},
  {path:'editaddress',component:EditaddressComponent},
  {path:'editaddress/:id',component:EditaddressComponent},
  {path:'addcard',component:AddcardComponent},
  {path:'carddetails',component:CarddetailsComponent},
  {path:'editcard',component:EditcardComponent},
  {path:'editcard/:id',component:EditcardComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    UserdetailsComponent,
    SettingsComponent,
    FeedComponent,
    OrderstatusComponent,
    AddressComponent,
    AddresslistComponent,
    CartComponent,
    CarddetailsComponent,
    HeaderComponent,
    EditaddressComponent,
    EditcardComponent,
    AddcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
