import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface myData {
    sucess: boolean,
    message: string
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    getUserDetails(username, password){
        //POST(!!) detalhes para API retornar as informações SE correto
        
        return this.http.post<myData>('/api/auth.php', {
            username,
            password
        }).subscribe(
            data => {
                console.log(data, "é o que vem do servis") 
            });
    }
}
