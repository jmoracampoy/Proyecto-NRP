import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Usuario } from '../models/usuario';
import { param } from 'jquery';
import { CookieService } from 'ngx-cookie-service';
import { Proyecto } from '../models/proyecto';


@Injectable()
export class ProyectoService{
    public url:string;

    constructor(private _http: HttpClient,private cookies: CookieService){
        this.url = Global.url;
    }

    getProyecto(id:any) : Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'projectos/'+id, {headers: headers});
    }

    crearProyecto(proyecto:Proyecto):Observable<any>{
        let params = JSON.stringify(proyecto);
        console.log(params)
        let headers =  new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url + "proyectos",params,{headers:headers});
    }
}

