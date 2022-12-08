import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LetterService } from 'src/app/services/letter.service';
import { Letter } from 'src/app/types';

interface Classroom {
  name: string;
}

@Component({
  selector: 'app-register-letter',
  templateUrl: './register-letter.component.html',
  styleUrls: ['./register-letter.component.css'],
})
export class RegisterLetterComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  @ViewChild('classSelect') classSelect!: ElementRef;

  letterSelected!: string;
  productSelected!: string;
  classroomSelected!: string;

  letterImage!: File;
  productImage!: File;

  productName!: string;
  productPrice!: number;

  letter!: Letter;
  studentName!: string;
  classrooms!: Array<Classroom>;

  result!: {};

  constructor(private letterService: LetterService) {
    this.classrooms = [
      { name: '1a' },
      { name: '1b' },
      { name: '2a' },
      { name: '2b' },
    ];
  }

  onLetterSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const fileList: FileList | null = element.files;

    if (fileList) {
      this.letterImage = fileList[0];
      this.letterSelected = this.letterImage.name;
    }
  }

  onProductSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const fileList: FileList | null = element.files;

    if (fileList) {
      this.productImage = fileList[0];
      this.productSelected = this.productImage.name;
    }
  }

  onSelected(): void {
    this.classroomSelected = this.classSelect.nativeElement.value;
  }

  onSubmit() {
    this.letter = {
      id: String(Math.round(Math.random() * 1000)),
      studentName: this.studentName,
      classroom: { name: this.classroomSelected },
      imageURL: '',
      product: {
        id: String(Math.round(Math.random() * 1000)),
        name: this.productName,
        imageURL: '',
        price: this.productPrice,
      },
    };

    this.letterService.save(this.letter, this.letterImage, this.productImage);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'));
  }
}
