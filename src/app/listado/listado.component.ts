import { Component, OnInit } from '@angular/core';
import { PersonsajeService } from '../personsaje.service';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {


  resultado: any[] = [];

  constructor(public personajeService: PersonsajeService) { }

  ngOnInit() {
    this.personajeService.getPersonajes()
    .subscribe(
      (data) => { // Success
        this.resultado = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
