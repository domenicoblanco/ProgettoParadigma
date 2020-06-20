import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  user: User;

  constructor(private auth: AuthService) { 
    this.user = this.auth.me;
  }

  ngOnInit(): void {
  }

}
