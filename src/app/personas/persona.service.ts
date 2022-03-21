import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from "./persona";
import { PERSONAS } from "./persona.json";

@Injectable({
    providedIn: 'root'
})
export class PersonaService {

    constructor() { }

    getPersonas(): Observable<Persona[]> {
        return of(PERSONAS);
    }


}
