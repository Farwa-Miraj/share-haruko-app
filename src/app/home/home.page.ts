import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private meta :Meta) {}

  ngOnInit() {
    this.meta.updateTag({ property: 'og:description', content: 'This is an article about Angular Meta service' });
    this.meta.updateTag({ property: 'og:title', content: 'yaaah' });
    this.meta.updateTag({ property: 'og:url', content: '/home' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg' });
    
  }
}
