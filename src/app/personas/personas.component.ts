import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { PERSONAS } from './persona.json';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonas().subscribe(
      personas => this.personas = personas
    );
  }

}
