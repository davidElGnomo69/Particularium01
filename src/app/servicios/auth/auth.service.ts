import { UserInt } from './../../interfaces/UserInt';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

import { Authable } from 'src/app/interfaces/authable';

@Injectable()
export class AuthService implements Authable {

	private user: UserInt = {};

	constructor(private afAuth: AngularFireAuth) { }
	async regis(email: string, password: string, cpassword: string) {
		let retorno: boolean;
		this.user.email = email;
		this.user.password = password;
		this.user.cpassword = cpassword;
		console.log("La vida");
		console.log("Reg :", email, password, cpassword, "La vida", retorno);
		await this.register().then(() => {
			retorno = true;
		}).catch(() => {
			retorno = false;
		});
		return retorno;
	}
	async log(email: string, password: string) {
		let retorno: boolean = false;
		this.user.email = email;
		this.user.password = password;
		console.log("log :", email, password, "La vidaX2");

		await this.login().then(() => {
			retorno = true;
		}).catch(() => {
			retorno = false;
		});
		return retorno;
	}

	register() {
		if (this.user.password !== this.user.cpassword) {
			console.error('Password dont match');
			console.error(this.user.cpassword, this.user.password);
			console.log();
		}
		console.log(this.user.email);
		return this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
	}

	login() {
		return this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
	}

	logOut() {
		return this.afAuth.auth.signOut();
	}

	sendVerificationEmail() {
		if (!this.isUserVerified()) {
			return this.afAuth.auth.currentUser.sendEmailVerification();
		}
	}
	private isUserVerified() {
		return this.afAuth.auth.currentUser.emailVerified;
	}
	getAuth() {
		return this.afAuth.auth;
	}
	getCurrentUserUid() {
		return this.afAuth.auth.currentUser.uid;
	}
	deleteUser() {
		if (this.afAuth.auth.currentUser.providerId == null) {
			console.log('This user doesnt exits already');
		}
		return this.afAuth.auth.currentUser.delete();
	}
	setUser(user) {
		this.user = user;
	}
	getUser() {
		return this.user;
	}
}
