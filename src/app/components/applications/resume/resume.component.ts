import { Component, inject, OnInit } from '@angular/core';
import { WindowService } from '../../../services/Window.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  windowService=inject(WindowService)
  constructor() { }

  ngOnInit() {
  }

  openResume(){
    window.open('/resume.pdf', '_blank');
  }
}
