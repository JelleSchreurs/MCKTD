import { Component, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})

export class ImageUploaderComponent {

  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  /*##################### Registration Form #####################*/
  registrationForm = this.fb.group({
    file: [null]
  });

  /*########################## File Upload ########################*/
  @ViewChild('fileInput', {static: false} ) el: ElementRef;
  imageUrl: any = '/assets/dummy-user.jpg';
  editFile = true;
  removeUpload = false;

  uploadFile(event) {
    const reader = new FileReader(); // HTML5 FileReader API
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.registrationForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      };
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    const newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = '/assets/dummy-user.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.registrationForm.patchValue({
      file: [null]
    });
  }
}
