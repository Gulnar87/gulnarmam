export interface Root {
    blogs: Blog[];

}

export interface Blog {
    title: string;
    image: string;
    imageTitle?: string;
    date: string;
    descriptions?: Descriptions[];
}

export interface Descriptions {
    paragraph?: string;  
}