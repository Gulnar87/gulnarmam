export interface Root {
    projects: Project[];
}

export interface Project {
    id: number;
    name: string;
    description: string;
    techUsed: string;
    urlVideo: string;
    subTitle: string;
    pictures: Pictures;
    picHome: string;
    linkToPage: string;
    picTop: string;
}


export interface Pictures{
  
    pic: string;

  
}
