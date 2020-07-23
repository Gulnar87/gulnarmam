import { Component, OnInit } from '@angular/core';
// import {FacebookService, InitParams, UIParams, UIResponse} from 'ng b';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(  ) {
    // const initParams: InitParams = {
    //   appId: '463147414387998',
    //   xfbml: true,
    //   version: 'v2.8'
    // };
    // facebookService.init(initParams);
   }

  ngOnInit() {
  }

  // public facebookShare() {

  //   const url = window.location.origin + '/blog/';
  //   const params: UIParams = {
  //     href: url,
  //     method: 'share'
  //   };
  //   this.facebookService.ui(params)
  //     .then((res: UIResponse) => console.log(res))
  //     .catch((e: any) => console.error(e));
  // }

}
