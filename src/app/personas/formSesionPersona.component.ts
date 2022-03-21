import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-form',
  templateUrl: './formSesionPersona.component.html',
  styleUrls: ['./formSesionPersona.component.css']
})
export class FormSesionPersonaComponent implements OnInit {


  persona: Persona = new Persona()
  titulo: string = "Crear cuenta"

 constructor() { }

 ngOnInit(): void {
 }

 public create(): void{
   console.log("Ha realizado un clic")
   console.log(this.persona)
 }

}
