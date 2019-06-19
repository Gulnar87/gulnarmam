import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Project } from './project.model';
import { DataStorageService } from '../shared/dataStorage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolverService implements Resolve<Project[]> {

   constructor(private dataStorageService: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorageService.getProjects();
  }
}