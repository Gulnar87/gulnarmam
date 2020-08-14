import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../projects/project.service';
import { Project, Pictures } from '../project.model';
import { Meta, Title } from '@angular/platform-browser';

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
  schema: {};

   
  constructor(private projectService: ProjectService, 
    private route: ActivatedRoute, private metaService: Meta, private titleService: Title) { }


  ngOnInit() {
      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.project = this.projectService.getProject(this.id); 
        }
      );

      // this.metaTagService.setTitle("Gulnar\'s portfolio | " + this.project.name)
      // this.metaTagService.setSocialMediaTags(
      //   'http://gulnarmammadova.com' + 'work' + this.id, 
      //   this.project.name,
      //   this.project.description,
      //   this.project.picHome
      //   );

      // this.metaService.updateTag({ property: siteTag.name, content: siteTag.value });


      // if (data.ogTitle) {

        this.titleService.setTitle("Gulnar\'s portfolio | " + this.project.name);

        if (this.project.description) {
          this.metaService.updateTag({ name: 'description', content: this.project.description })
        } else {
          this.metaService.removeTag("name='description'")
        }

        // if (data.robots) {
        //   this.metaService.updateTag({ name: 'robots', content: data.robots })
        // } else {
        //   this.metaService.updateTag({ name: 'robots', content: "follow,index" })
        // }

        // if (data.ogUrl) {
        //   this.metaService.updateTag({ property: 'og:url', content: data.ogUrl })
        // } else {
        //   this.metaService.updateTag({ property: 'og:url', content: this.router.url })
        // }

        if (this.project.name) {
          this.metaService.updateTag({ property: 'og:title', content: "Gulnar\'s portfolio | "  + this.project.name })
        } else {
          this.metaService.removeTag("property='og:title'")
        }

        if (this.project.description) {
          this.metaService.updateTag({ property: 'og:description', content:this.project.description })
        } else {
          this.metaService.removeTag("property='og:description'")
        }

        if (this.project.picHome) {
          this.metaService.updateTag({ property: 'og:image', content: this.project.picHome })
        } else {
          this.metaService.removeTag("property='og:image'")
        }

     this.schema = {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "http://www.gulnarmammadova.com/work/" + this.id
          },
          "headline": this.project.name,
          "image": [
            this.project.pictures[0].pic,
            this.project.pictures[1].pic
           ],
          "datePublished": "2020-02-05T09:20:00+08:00",
          "dateModified":  "2020-02-05T09:20:00+08:00",
          "author": {
            "@type": "Person",
            "name": "Gulnar Mammadova"
          },
           "publisher": {
            "@type": "Organization",
            "name": "Gulnar Mammadova",
            "logo": {
              "@type": "ImageObject",
              "url": "http://www.gulnarmammadova.com/assets/logoGM4.png"
            }
          }
        };
  }

}
