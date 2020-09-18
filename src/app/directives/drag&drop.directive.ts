import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDragDrop]',
})
export class DragDropDirective {
  constructor() {}

  @Output() fileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = '#e7e7e7';
  @HostBinding('style.opacity') private opacity = '1';

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#d9d9d9';
    this.opacity = '0.8';
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: Event): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#e7e7e7';
    this.opacity = '1';
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: {
    preventDefault: () => void;
    stopPropagation: () => void;
    dataTransfer: { files: File[] };
  }): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#e7e7e7';
    this.opacity = '1';
    const files: File[] = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
