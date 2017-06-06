import { Component, OnInit } from '@angular/core';

//Model Driven Form
// In this case we have to write most of the code in component file
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form;
  
  constructor() { }
  
  //Model Driven Form
  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl('Binit'),
      lastname: new FormControl(''),
      languages: new FormControl(''),
      decimal: new FormControl(''),
      binary: new FormControl(''),
      octal: new FormControl(''),
      hexadecimal: new FormControl('')
    });
  } 
  
  onSubmit(user) {
    console.log(user);
  }
  
  b = 0;
  o = 0;
  h = 0;
  
  decimalChanged(oldValue, newValue) {
    if(newValue != "") {
      this.form.patchValue({binary: parseInt(newValue, 10).toString(2)});
      this.form.patchValue({octal: parseInt(newValue, 10).toString(8)});
      this.form.patchValue({hexadecimal: parseInt(newValue, 10).toString(16).toUpperCase()});
    } else {
      this.form.patchValue({binary: ''});
      this.form.patchValue({octal: ''});
      this.form.patchValue({hexadecimal: ''});
    }
      
  }
    
  binaryChanged(oldValue, newValue) {
     this.b = this.b + 1;
      if(this.b == 1) {
        if(newValue != "") {
          this.form.patchValue({decimal: parseInt(newValue, 2).toString(10)});
        } else {
          this.form.patchValue({decimal: ''});
        }
        this.b = 0;
      }    
  }
      
  octalChanged(oldValue, newValue) {
    this.o = this.o + 1;
      if(this.o == 1) {
        if(newValue != "") {
          this.form.patchValue({decimal: parseInt(newValue, 8).toString(10)});
        } else {
          this.form.patchValue({decimal: ''});
        }
        this.o = 0;
      }
  }
      
  hexadecimalChanged(oldValue, newValue) {
    this.h = this.h + 1;
      if(this.h == 1) {
        if(newValue != "") {
          this.form.patchValue({decimal: parseInt(newValue, 16).toString(10)});
        } else {
          this.form.patchValue({decimal: ''});
        }
        this.h = 0;
      }
  }
  
  

}
