import { OverlayRef } from '@angular/cdk/overlay';
import { Component, HostListener, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WindowService } from '../../../services/Window.service';

@Component({
  selector: 'app-Window',
  templateUrl: './Window.component.html',
  styleUrls: ['./Window.component.css'],
  imports: [DragDropModule],
})
export class WindowComponent  {

  @Input() title: string = 'Window';
  @Input() overlayRef!: OverlayRef;
  @Input() componentToLoad!: Type<any>; // The dynamic component

  @ViewChild('dynamicContent', { read: ViewContainerRef, static: true }) viewContainer!: ViewContainerRef;

  ngOnInit() {
    // Dynamically create the component inside the window
    if (this.componentToLoad) {
      this.viewContainer.clear();
      this.viewContainer.createComponent(this.componentToLoad);
    }
  }

    // track z-index
  private static topZIndex = 1000;

  @HostListener('mousedown')
  bringToFront() {
    if (this.overlayRef && this.overlayRef.overlayElement) {
      WindowComponent.topZIndex++;
      this.overlayRef.overlayElement.style.zIndex = WindowComponent.topZIndex.toString();
    }
  }

  close() {
    if (this.overlayRef) this.overlayRef.dispose();
  }
}
