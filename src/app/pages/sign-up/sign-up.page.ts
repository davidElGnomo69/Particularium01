import { UserInt } from './../../interfaces/UserInt';
import { Component, OnInit } from '@angular/core';
import { SingUpServiceService } from 'src/app/servicios/singUp/sing-up-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  private userReg: UserInt = {};

  constructor(private servSingUp: SingUpServiceService) { 
    this.servSingUp.$userReg = this.userReg;
  }

  ngOnInit() {
  }

  registrar(){
    
    this.servSingUp.register();
  }

}
