import { Component, OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-web-embebed',
  templateUrl: './web-embebed.page.html',
  styleUrls: ['./web-embebed.page.scss'],
})
export class WebEmbebedPage implements OnInit {
  Url:SafeResourceUrl;


  constructor(private domSatizer:DomSanitizer) { }

  ngOnInit() {
    // this.Url = this.domSatizer.bypassSecurityTrustResourceUrl("http://www.shoesstoremxa.com/");
    this.Url = this.domSatizer.bypassSecurityTrustResourceUrl("http://www.shoesstoremxa.com/rastreo.php");
  }

}
