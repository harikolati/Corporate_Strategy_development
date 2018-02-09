import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SearchboxComponent } from './searchbox/searchbox.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(SearchboxComponent)
  public searBox:SearchboxComponent;

  constructor(private router: Router) {}
  

  
}
