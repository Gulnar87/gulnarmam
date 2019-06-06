import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { Certificate, Root } from '../about/certificates/certificate.model';
import { Project} from '../projects/project.model';

import { ImageItem, GalleryItem } from '@ngx-gallery/core';


@Injectable()
export class DataStorageService {

    constructor(protected http: HttpClient) { }

    getCertificates(): Observable<Certificate[]> {
        return this.http.get<Certificate[]>(environment.apiUrl);

    }


    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(environment.apiUrlProjects);
    }

    getProject(id: string): Observable<Project[]> {
        return this.http.get<Project[]>(`${environment.apiUrlProjects}/${id}`);

    }
 



}