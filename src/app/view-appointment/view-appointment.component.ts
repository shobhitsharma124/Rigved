import { ProductserviceService } from './../productservice.service';
import { UserService } from './../_services/user.service';
import { Appointments } from './../appointment.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  app : Appointments[]=[]
  constructor(public appoint:ProductserviceService) { 


  }

  

  ngOnInit() {
    this.app=this.appoint.fetch()
    console.log(this.app)
  }
  
  getfitness() {
    
  }
}
