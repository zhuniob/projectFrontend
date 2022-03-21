import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { DirectivaComponent } from './directiva/directiva.component';

import { RouterModule, Routes } from '@angular/router';

import { ComicsComponent } from './comics/comics.component';
import { ComicService } from './comics/comic.service';

import { PersonasComponent } from './personas/personas.component';
import { PersonaService } from './personas/persona.service';

import { FormComponent } from './personas/formRegistroPersona.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'comics', component: ComicsComponent},
  {path: 'personas', component: PersonasComponent},
  {path: 'formRegistro', component: FormComponent},
  {path: 'formSesion', component: FormComponent},
  {path: 'main', component: MainComponent},
] 

/*

completado hasta diapositiva 17..
sin conexi'on con backend

*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ComicsComponent,
    PersonasComponent,
    FormComponent,
    FormComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ComicService, PersonaService],
  bootstrap: [AppComponent]
})


export class AppModule { }
