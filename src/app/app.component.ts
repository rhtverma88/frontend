import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from './service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServiceService]
})

export class AppComponent {
  p:number =1;
  
  dataobject:any;
  listnutrition:any;
  term;

  registerForm: FormGroup;
  submitted = false;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, private service:ServiceService) { }

ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

    this.service.getregistry().subscribe((data)=>{
      this.listnutrition = data;
       });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
        if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
}

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
 }

}
