import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recsenha',
  templateUrl: 'recsenha.component.html',
  styleUrls: ['recsenha.component.css']
})
export class RecsenhaComponent implements OnInit {

  logo = 'assets/imagens/bonfire.gif'

  constructor() { }

  ngOnInit(): void {
  }

  envioConfirmado() {
    document.getElementById("trigger")!.style.display="block";
  }
}
