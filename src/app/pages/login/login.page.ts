import { Component, OnInit } from '@angular/core';
import { UserInt } from 'src/app/interfaces/UserInt';
import { LoginServiceService } from 'src/app/servicios/login/login-service.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: [ './login.page.scss' ]
})
export class LoginPage implements OnInit {
	private userReg: UserInt = {};
	constructor(private logServ: LoginServiceService) {
		this.logServ.$userReg = this.userReg;
	}

	ngOnInit() {}
	login() {
		this.logServ.login();
	}
}
