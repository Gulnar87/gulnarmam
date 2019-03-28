import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Root } from './project.model';
import { Project} from './project.model';



@Injectable()
export class ProjectDataStorageService {

    constructor(protected http: HttpClient) { }

    get(): Observable<Project[]> {
        return this.http.get<Project[]>(environment.apiUrlProjects);

    }

 
}