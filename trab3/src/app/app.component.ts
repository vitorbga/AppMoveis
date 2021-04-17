import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuario:string="Teste"

  public appPages = [
   //{ title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Ambientes', url: '/salas', icon: 'telescope' },
    { title: 'Embarcados', url: '/embarcados', icon: 'hardware-chip' },
   // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
   // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
   // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [
   // 'Amigos','Family', 'Notes', 'Work', 'Travel', 'Reminders'
  ];
  constructor() {}
}
