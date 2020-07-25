import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { DataStorageService } from '../shared/dataStorage.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private dsService: DataStorageService) { }

  ngOnInit() {

    this.dsService.getProjects().subscribe();

  }
}
