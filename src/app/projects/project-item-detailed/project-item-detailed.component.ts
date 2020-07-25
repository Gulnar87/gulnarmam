import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../projects/project.service';
import { Project, Pictures } from '../project.model';
import { MetaTagService } from 'src/app/meta-tags.service';

@Component({
  selector: 'app-project-item-detailed',
  templateUrl: './project-item-detailed.component.html',
  styleUrls: ['./project-item-detailed.component.css'],

})
export class ProjectItemDetailedComponent implements OnInit {
  subscription: Subscription;
	id: number; 
	projects: Project[] ;
  project: Project;
  pictures: Pictures[]

   
  constructor(private projectService: ProjectService, 
    private route: ActivatedRoute, private metaTagService: MetaTagService) { }


  ngOnInit() {
      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.project = this.projectService.getProject(this.id);
        }
      );

      this.metaTagService.setTitle(this.project.name)
      this.metaTagService.setSocialMediaTags(
        'http://gulnarmammadova.com' + 'work' + this.id, 
        this.project.name,
        this.project.description,
        this.project.picHome);
  }

}
