import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassroomService } from 'src/app/services/classroom.service';
import { LetterService } from 'src/app/services/letter.service';
import { ProductService } from 'src/app/services/product.service';
import { Classroom, Letter, Product } from 'src/app/types';

@Component({
  selector: 'app-register-letter',
  templateUrl: './register-letter.component.html',
  styleUrls: ['./register-letter.component.css'],
})
export class RegisterLetterComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  @ViewChild('classroomSelect') classroomSelect!: ElementRef;

  classroomName!: string;

  letterImage!: File;
  productImage!: File;

  // show names on html
  letterSelected!: string;
  productSelected!: string;

  letter!: Letter;
  product!: Product;

  classrooms!: Classroom[];

  constructor(
    private letterService: LetterService,
    private productService: ProductService
  ) {
    this.classrooms = [
      { id: 1, schoolId: 1, name: '1a' },
      { id: 2, schoolId: 1, name: '1b' },
      { id: 3, schoolId: 1, name: '2a' },
      { id: 4, schoolId: 1, name: '2b' },
    ];

    this.letter = { classroomId: 0, id: 0, productId: 0, studentName: '' };
    this.product = { id: 0, description: '', name: '', price: 1, raised: 0 };
  }

  ngOnInit(): void {}

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

  onClassroomSelected(): void {
    this.classroomName = this.classroomSelect.nativeElement.value;
  }

  onSubmit() {
    this.productService
      .save(this.product, this.productImage)
      .subscribe((product) => {
        this.letterService
          .save(this.letter, this.letterImage, product.id)
          .subscribe();
      });
  }

  ngAfterViewInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'));
  }
}
