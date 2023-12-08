import { DOCUMENT } from '@angular/common';
import { ComponentFactoryResolver, Injectable, Injector, TemplateRef, Inject, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalComponent } from 'src/app/components/ui-kit/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalNotifier?: Subject<string>;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector, @Inject(DOCUMENT) private document: Document) { }

  open(component: Type<any>, options?: {size?: string; title?: string}) {
    const modalComponentFactory = this.resolver.resolveComponentFactory(ModalComponent);
    const componentFactory = this.resolver.resolveComponentFactory(component);
    
    const modalComponent = modalComponentFactory.create(this.injector);
    const componentRef = componentFactory.create(this.injector);
  
    // Insert the custom component into the modal
    modalComponent.instance.dynamicContent.insert(componentRef.hostView);
  
    modalComponent.instance.size = options?.size;
    modalComponent.instance.title = options?.title;
    modalComponent.instance.closeEvent.subscribe(() => this.closeModal());
    modalComponent.instance.submitEvent.subscribe(() => this.submitModal());
    modalComponent.hostView.detectChanges();
  
    this.document.body.appendChild(modalComponent.location.nativeElement);
    this.modalNotifier = new Subject();
  
    return this.modalNotifier?.asObservable();
  }
  

  closeModal() {
    this.modalNotifier?.complete();
  }

  submitModal() {
    this.modalNotifier?.next('confirm');
    this.closeModal();
  }
}
