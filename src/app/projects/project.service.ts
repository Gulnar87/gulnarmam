
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Project } from '../projects/project.model';
import { Observable } from 'rxjs';
import { switchMap, take, tap} from 'rxjs/operators';

@Injectable()
export class ProjectService {
   projectsChanged = new Subject<Project[]>();
   
	private	projects : Project[] = [];

	constructor() {}


  getProjects(){
  	return this.projects.slice();
  }

  getProject(index: number){
    return this.projects[index];
  }

  setProjects(projects: Project[]){
    this.projects = projects;
    this.projectsChanged.next(this.projects.slice());

  }
  

}