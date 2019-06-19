import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Certificate, Root } from '../about/certificates/certificate.model';
import { Project} from '../projects/project.model';

import { ProjectService } from '../projects/project.service';




@Injectable()
export class DataStorageService {

    constructor(protected http: HttpClient, private projectService: ProjectService) { }

    getCertificates(): Observable<Certificate[]> {
        return this.http.get<Certificate[]>(environment.apiUrl);

    }


   getProjects() {
    return this.http
      .get<Project[]>(
        environment.apiUrlProjects
      )
      .pipe(
        map(projects => {
          return projects.map(project => {

            return {
              ...project,
              picture: project.pictures ? project.pictures : []
            };
          });
        }),
        tap(projects => {
             projects.sort((a: Project, b: Project) => b.id - a.id);
          this.projectService.setProjects(projects);
        })
      );
  }



    // getProject(id: string): Observable<Project[]> {
    //     return this.http.get<Project[]>(`${environment.apiUrlProjects}/${id}`);

    // }

 

}