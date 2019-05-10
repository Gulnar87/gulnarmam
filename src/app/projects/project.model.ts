export interface Root {
    projects: Project[];
}

export interface Project {
    id: string;
    name: string;
    description: string;
    techUsed: string;
    urlVideo: string;
    subTitle: string;
    pictures: Pictures;
    picHome: string;
    linkToPage: string;
}


export interface Pictures{
  
    pic1: string;
    pic2: string;
    pic3: string;
    pic4: string;
    pic5: string;
    pic6: string;
  
}
