///<reference path="../../node_modules/@angular/router/src/router_module.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule, Routes} from '@angular/router';
import { ChairsComponent } from './chairs/chairs.component';
import { SofasComponent } from './sofas/sofas.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { GalleryDetailComponent } from './shared/gallery/gallery-detail/gallery-detail.component';
import {GalleryService} from './shared/gallery/gallery.service';
import {CornersComponent} from './corners/corners.component';
import { LightboxModule } from 'angular2-lightbox';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'corners', component: CornersComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CornersComponent,
    ChairsComponent,
    SofasComponent,
    GalleryComponent,
    GalleryDetailComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    SlideMenuModule,
    RouterModule.forRoot(appRoutes),
    LightboxModule,
    AgmCoreModule.forRoot()
],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
