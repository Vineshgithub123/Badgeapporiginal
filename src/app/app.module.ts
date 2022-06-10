import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { FooterComponent } from './footer/footer.component';
import { SamplesComponent } from './samples/samples.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
// import { TestimonySectionComponent } from './testimony-section/testimony-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingSectionComponent,
    ServicesSectionComponent,
    FooterComponent,
    SamplesComponent,
    ContactComponent,
    AboutComponent,
    // TestimonySectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
