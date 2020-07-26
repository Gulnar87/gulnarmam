import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Blog } from './blog.module';
// import {FacebookService, InitParams, UIParams, UIResponse} from 'ng b';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor( private metaService: Meta ) {
   }


  private	blogs : Blog[] = [
    {title: 'Perishing hopes for peace ', image: '../assets/azerbaijan_embassy.jpg'},
    // {title: '',  image: '' },
  ]

  getBlogs(){
  	return this.blogs.slice();
  }


  ngOnInit() {

    this.blogs.forEach((blog)=>{
      if (blog.title) {
        this.metaService.updateTag({ property: 'og:title', content: blog.title })
      } else {
        this.metaService.removeTag("property='og:title'")
      }

    if (blog.image) {
      this.metaService.updateTag({ property: 'og:image', content: blog.image })
    } else {
      this.metaService.removeTag("property='og:image'")
    }
    })

    // if (this.project.description) {
    //   this.metaService.updateTag({ property: 'og:description', content:this.project.description })
    // } else {
    //   this.metaService.removeTag("property='og:description'")
    // }

  }



}
