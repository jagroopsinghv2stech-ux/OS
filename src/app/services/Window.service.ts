import { Injectable, Injector, Type } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
private openWindows: any[] = []; // track all windows

  constructor(private overlay: Overlay, private injector: Injector) {}

open<T>(component: Type<any>, title: string, innerComponent: Type<T>) {
  const overlayRef = this.overlay.create({
    hasBackdrop: false,
    // panelClass: 'window-panel',
    positionStrategy: this.overlay.position().global()
      .centerHorizontally()
      .centerVertically()
  });

  // Attach the WindowComponent container
  const portal = new ComponentPortal(component);
  const componentRef = overlayRef.attach(portal);

  // Pass the dynamic component and title to the WindowComponent instance
  componentRef.instance.title = title;
  componentRef.instance.overlayRef = overlayRef;
  componentRef.instance.componentToLoad = innerComponent;

  this.openWindows.push({ overlayRef, componentRef, title });

  return overlayRef;
}

  close(overlayRef: any) {
    overlayRef.dispose();
    this.openWindows = this.openWindows.filter(w => w.overlayRef !== overlayRef);
  }

  closeAll() {
    this.openWindows.forEach(w => w.overlayRef.dispose());
    this.openWindows = [];
  }

  getOpenWindows() {
    return this.openWindows;
  }


}
