import { Component } from '@angular/core';
import { DemoService } from './demo.service';
import { User } from './model/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DemoService]
})
export class AppComponent {
  title = 'demo-front';

  users: User[] = [];

  constructor(private api:DemoService){

  }

  listarUsuarios(){
    this.users;
    this.api.buscarUsuarios().subscribe((users:User[]) => {
      this.users = users;
    }, (error) => {
      console.log(error);
    });
  }
}
