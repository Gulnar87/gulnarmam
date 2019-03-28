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
}


export interface Pictures{
  
    pic1: string;
    pic2: string;
    pic3: string;
    // pic4: string;
  
}
