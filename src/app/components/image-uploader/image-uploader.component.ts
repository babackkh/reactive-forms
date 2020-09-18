import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit {
  @Output() imageUploaded = new EventEmitter<File>();

  constructor() {}

  ngOnInit(): void {}

  uploadFile(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.imageUploaded.emit(file);
  }
}
