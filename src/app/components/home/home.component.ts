import { Component, OnInit, Renderer2, Inject, PLATFORM_ID,inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,MatCardModule,MatListModule,MatIconModule,ClipboardModule,MatButtonModule,NgbCarouselModule,MatTooltipModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email="gitaunjoroge474@gmail.com"
  phoneNumber="+254796688616"


  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000, // Disappear after 3 seconds 
    });
  }
  

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Only load scripts if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.loadScripts();
    }
  }

  ngOnInit(): void {}

  loadScripts() { 
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
      'assets/js/script.js',
      // Add more scripts here as needed
    ]; 

    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    }
  }
}
