import { ProductserviceService } from './../productservice.service';
import { Appointments } from './../appointment.model';
import { UserService } from './../_services/user.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  appoint : Appointments;

  registerForm: FormGroup;
    submitted = false;
  
  constructor(public appointment: ProductserviceService,private formBuilder: FormBuilder) {

   }
  
  
package=[500,1600,1500]
   
ngOnInit(){

  this.registerForm = this.formBuilder.group({
    phone:[''],
    streetaddress: [''],
    state: [''],
  pincode: ['',[
    Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(6),
    Validators.maxLength(6)
  ]],
    city: [''],
    trainerpreference: [''],
    physiotherapist: [''],
    packages: [''],
    firstName: ['',[ Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    lastName: ['',[ Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    email:['',[Validators.required, Validators.email]],
  age : ['',[ Validators.required, Validators.pattern('[0-9]+'), Validators.min(18), Validators.max(60) ]]
  }
   )};  

   get f() { return this.registerForm.controls; 
  console.log(this.registerForm.controls)}

onSubmit() {
  // TODO: Use EventEmitter with form value
  this.submitted = true;
console.log(this.registerForm.invalid)
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  
this.appoint=this.registerForm.value;
this.appointment.add(this.appoint)

}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

  }
    

