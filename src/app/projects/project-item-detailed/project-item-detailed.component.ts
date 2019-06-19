import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../projects/project.service';
import { Project, Root, Pictures } from '../project.model';
import { DataStorageService } from '../../shared/dataStorage.service';


@Component({
  selector: 'app-project-item-detailed',
  templateUrl: './project-item-detailed.component.html',
  styleUrls: ['./project-item-detailed.component.css']
})
export class ProjectItemDetailedComponent implements OnInit, OnDestroy {
  subscription: Subscription;
	id: number; 
	projects: Project[] ;
  project: Project;
  pictures: Pictures[]
   
	

  constructor(private projectService: ProjectService, 
    private route: ActivatedRoute,
    private router: Router,
    private dsService: DataStorageService) { }

  ngOnInit() {

    // const project_id = this.route.snapshot.paramMap.get('id');

    // this.dsService.getProjects()
    //       .subscribe(
    //           (response: Project[]) => {
    //               this.projects = response;
             

    //               this.project = this.projects.find(p => p.id.toString() === project_id.toString());
                   
    //               console.log(this.projects, project_id);
    //               console.log(this.project);
    //           },
    //           // (error: HttpErrorResponse) => console.log(error)
    //       );

        this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.project = this.projectService.getProject(this.id);
        }
      );
  }

   ngOnDestroy(){
    // this.subscription.unsubscribe();
  }




}
