import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Progetto-Paradigma';

  constructor(private route: Router) {
  }

  ngOnInit(){
    this.route.navigateByUrl('/login');
  }

}
