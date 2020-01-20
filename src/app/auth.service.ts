import { resolve } from 'url';

export class AuthService
{
    loggingMember:boolean=false;
    
    isAuthenticated()
    {
       

        
        
    }
    logIn()
    {
        this.loggingMember=true;
    }
    logOut()
    {
        this.loggingMember=false;
    }
}