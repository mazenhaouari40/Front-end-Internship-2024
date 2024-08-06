import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // private apiUrl = environment.server; 
  private apiUrl = 'http://localhost:8081' ; 

  constructor(private http: HttpClient) { }

  register(signRequest: any): Observable<any>{
     return this.http.post(this.apiUrl + '/signup',signRequest);
  }

  login(LoginRequest: any): Observable<any>{
    return this.http.post(this.apiUrl + '/login',LoginRequest);
  }

  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
  

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8081/user",{
      headers: this.createAuthorizationHeader()
    });
  }

  getUser(id : number): Observable<any> {
    return this.http.get<any>("http://localhost:8081/user/"+id,{
      headers: this.createAuthorizationHeader()
    });
  }

  updateUser(id :number, body : any){
    return this.http.put("http://localhost:8081/user/edit/"+id,body,{
      headers: this.createAuthorizationHeader()
    });
  }

  addUser(body: any){
  return  this.http.post(this.apiUrl+'/user/add', body,{
      headers: this.createAuthorizationHeader()
    });
  }

  deleteUser(id : number){
   return this.http.delete(this.apiUrl+`/user/delete/${id}`,{
      headers: this.createAuthorizationHeader()
    })
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem("token");
    return !!token; // Returns true if token exists, otherwise false
  }}
