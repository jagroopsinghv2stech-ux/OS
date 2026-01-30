import { Component, inject, OnInit } from '@angular/core';
import { WindowService } from '../../services/Window.service';
import { WindowComponent } from '../core/Window/Window.component';
import { NotesComponent } from '../applications/notes/notes.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TerminalComponent } from '../applications/terminal/terminal.component';
import { ResumeComponent } from '../applications/resume/resume.component';
import { BrowserComponent } from '../applications/browser/browser.component';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
  imports: [DragDropModule],

})
export class DesktopComponent implements OnInit {
  windowService = inject(WindowService);

  constructor() {}

  ngOnInit() {}

  openNotes() {
    this.windowService.open(WindowComponent, 'Notes', NotesComponent);
  }
  openTerminal() {
    this.windowService.open(WindowComponent, 'Terminal', TerminalComponent);
  }
  openResume(){
    this.windowService.open(WindowComponent, 'Resume', ResumeComponent);
  }
  openBrowser(){
    this.windowService.open(WindowComponent, 'Browser', BrowserComponent);
  }
}
