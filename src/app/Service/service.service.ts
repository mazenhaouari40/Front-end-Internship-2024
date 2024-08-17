import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // private apiUrl = 'http://localhost:8081' ; 
  private apiUrl = 'https://backend-jenkins.onrender.com' ; 


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
    return this.http.get<any[]>(this.apiUrl+"/user",{
      headers: this.createAuthorizationHeader()
    });
  }

  getUser(id : number): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/user/"+id,{
      headers: this.createAuthorizationHeader()
    });
  }

  updateUser(id :number, body : any){
    return this.http.put(this.apiUrl+"/user/edit/"+id,body,{
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
    return !!token; 
  }

  getAbsence(id : number): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/absence/"+id,{
      headers: this.createAuthorizationHeader()
    });
  }

  ImageUser(id : number): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/user/image/"+id,{
      headers: this.createAuthorizationHeader()
    });
  }


    EditProfile(body: FormData,id : number){
      console.log(this.apiUrl+'/user/editProfile/'+id)
      return  this.http.put(this.apiUrl+'/user/editProfile/'+id, body,{
          headers: this.createAuthorizationHeader()
        });
      }


    addabsence(body: any){
      return  this.http.post(this.apiUrl+'/absence', body,{
          headers: this.createAuthorizationHeader()
        });
      }


      getUsersAdmin(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl+"/admin/users",{
          headers: this.createAuthorizationHeader()
        });
      }

      getManagers(id : number): Observable<any[]> {
        return this.http.get<any>(this.apiUrl+"/admin/managers/"+id,{
          headers: this.createAuthorizationHeader()
        });
      }

      EditProfile_admin(body: FormData,id : number){
        console.log(this.apiUrl+'/admin/edituser/'+id)
        return  this.http.put(this.apiUrl+'/admin/edituser/'+id, body,{
            headers: this.createAuthorizationHeader()
          });
        }

        getabsencebymanager(id : number): Observable<any[]> {
          return this.http.get<any>(this.apiUrl+"/absence/manager/"+id,{
            headers: this.createAuthorizationHeader()
          });
        }

        UpdateStatus(id :number, body : any){
          console.log(this.apiUrl+"/absence/Updatestatus/"+id);
          console.log(body);
          return this.http.put(this.apiUrl+"/absence/Updatestatus/"+id,body,{
            headers: this.createAuthorizationHeader()
          });
        }
}
