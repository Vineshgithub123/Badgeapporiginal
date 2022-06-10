import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { SamplesComponent } from './samples/samples.component';
import { ServicesSectionComponent } from './services-section/services-section.component';


const routes: Routes = [{path:"",component:LandingSectionComponent},
                       {path:"",component:ServicesSectionComponent},

                       {path:"samples",component:SamplesComponent},
                       {path:"contact",component:ContactComponent},
                       {path:"about",component:AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
