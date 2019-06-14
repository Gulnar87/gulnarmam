import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../projects/project.service';
import { Project, Root } from '../project.model';
import { Pipe, PipeTransform } from '@angular/core';
import { DataStorageService } from '../../shared/dataStorage.service';


@Component({
  selector: 'app-project-item-detailed',
  templateUrl: './project-item-detailed.component.html',
  styleUrls: ['./project-item-detailed.component.css']
})
export class ProjectItemDetailedComponent implements OnInit, OnDestroy {
  subscription: Subscription;
	id: number; 
	projects: Project[] = [];
  project: Project;
   
	

  constructor(private projectService: ProjectService, 
    private route: ActivatedRoute,
    private router: Router,
    private dsService: DataStorageService) { }

  ngOnInit() {

    const project_id = this.route.snapshot.paramMap.get('id');

    this.dsService.getProjects()
          .subscribe(
              (response: Project[]) => {
                  this.projects = response;
                  this.project = this.projects.find(p => p.id.toString() === project_id.toString());
                         // this.projects.sort((a: Project, b: Project) => b.id - a.id);
                  console.log(this.projects, project_id);
                  console.log(this.project);
              },
              // (error: HttpErrorResponse) => console.log(error)
          );

    // this.dsService.getProject(project_id).subscribe((projects: Project[]) => {
    //   console.log(projects);
    // });

  	  // this.route.params.subscribe((params: Params) => {
     //    this.id = params['id'];
     //    this.project = this.projectService.getProject(this.id)
     //  });

    //   this.dsService.getProject(this.route.snapshot.paramMap.get('id'))
    // .subscribe(res => this.project = res);

    //   console.log('detailed', this.project)


    //  this.subscription = this.projectService.projectsChanged
    // .subscribe(
    //     (projects: Project[]) => {
    //       this.projects = projects;
    //          console.log('list1', this.projects)
    //     }
    //   );
      
    //   this.projects = this.projectService.getProjects();

 
   
  }



    ngOnDestroy(){
    // this.subscription.unsubscribe();
  }




}
