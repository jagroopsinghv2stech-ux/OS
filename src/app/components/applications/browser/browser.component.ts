import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css'],
  imports: [NgIf, CommonModule, FormsModule],
})
export class BrowserComponent implements OnInit {
  safeUrl: any;

  url: string = '';
  mode: 'home' | 'results' | 'web' = 'home';
  query = '';
  results: any[] = [];
item: any;

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {}

  search(query: string) {
    this.query = query;
    this.mode = 'results';

    fetch(`https://api.duckduckgo.com/?q=${query}&format=json`)
      .then((res) => res.json())
      .then((data) => {
        this.results = data.RelatedTopics || [];
      });
  }
  openLink(url: string) {
    this.url = url;
    this.mode = 'web';
  }
}
