import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  logo = 'assets/imagens/welcome.gif'
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
