import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Project, Root } from './project.model';
import { DataStorageService } from '../shared/dataStorage.service';
import { ProjectService } from '../projects/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];


  constructor(private dsService: DataStorageService,
    private projectService: ProjectService) { }

  ngOnInit() {

    this.dsService.getProjects().subscribe();

  }

  


}
