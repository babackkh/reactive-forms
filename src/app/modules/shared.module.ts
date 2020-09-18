import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileSizeErrorComponent } from '../components/file-size-error/file-size-error.component';
import { ImageUploaderComponent } from '../components/image-uploader/image-uploader.component';
import { MimeTypeErrorComponent } from '../components/mime-type-error/mime-type-error.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { UploadSuccessComponent } from '../components/upload-success/upload-success.component';
import { DragDropDirective } from './../directives/drag&drop.directive';
import { NumericDirective } from './../directives/numeric-input.directive';
import { AngularMaterialModule } from './app-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
  exports: [
    FileSizeErrorComponent,
    ImageUploaderComponent,
    MimeTypeErrorComponent,
    SpinnerComponent,
    UploadSuccessComponent,
    NumericDirective,
    DragDropDirective,
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FileSizeErrorComponent,
    ImageUploaderComponent,
    MimeTypeErrorComponent,
    SpinnerComponent,
    UploadSuccessComponent,
    NumericDirective,
    DragDropDirective,
  ],
  providers: [],
})
export class SharedModule {}
