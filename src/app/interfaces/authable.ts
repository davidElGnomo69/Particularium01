
export interface Authable {

    regis(email: string, password: string, cpassword: string);

    log(email: string, password: string);

    logOut();


}