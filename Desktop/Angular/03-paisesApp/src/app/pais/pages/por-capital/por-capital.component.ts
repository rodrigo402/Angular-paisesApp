import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  
  termino: string= 'Hola mundo';
  hayError: boolean = false;
  paises: Country[]= [];

  
  constructor( private PaisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino

    this.PaisService.buscarCapital(this.termino)
    .subscribe( (paises) => {
     this.paises = paises;

    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
    
  }

}
