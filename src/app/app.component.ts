import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rowZaIzmenu:any = {};
  indexZaIzmenu:number | null = null;

  metadata:any = {
    columns:[
      {"key":"ime","title":"Ime","type":"text"},
      {"key":"prezime","title":"Prezime","type":"text"},
      {"key":"godinaRodjenja","title":"Godina Rodjenja","type":"number"},
    ],
    actions:[
      {"name":"izmeni","title":"Izmeni"},
      {"name":"ukloni","title":"Ukloni"},
    ]
  }

  rows:any[] = [
    {"ime":"Marko","prezime":"Markovic","godinaRodjenja":1970},
    {"ime":"Mirko","prezime":"Mirkovic","godinaRodjenja":1974},
    {"ime":"Jovan","prezime":"Jovanovic","godinaRodjenja":1995},
    {"ime":"Luka","prezime":"Lukic","godinaRodjenja":2001}
  ]
  
  action(event:any){
    if(event.action === "ukloni"){
      this.rows.splice(event.index,1);
    }else if(event.action === "izmeni"){
      this.rowZaIzmenu = {...event.row};
      this.indexZaIzmenu = event.index;
    }
  }

  dodaj(event:any){
    if(this.indexZaIzmenu !== null){
      this.rows[this.indexZaIzmenu] = {...this.rowZaIzmenu};
    }else{
      this.rows.push(event);
    }
    
  }

  reset(){
    this.rowZaIzmenu = {};
    this.indexZaIzmenu = null;
  }

}
