import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { UywComponent } from './uyw/uyw.component';
import { ContactComponent } from './contact/contact.component';
import { ReadmoreComponent } from './about/readmore/readmore.component';

const routes: Routes = [
  { path: 'readmore', component: ReadmoreComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    WorldMapComponent,
    UywComponent,
    ContactComponent,
    ReadmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
