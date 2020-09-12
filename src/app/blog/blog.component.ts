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


  public	blogs : Blog[] = [
    {title: 'Perishing hopes for peace ', date: '23 July 2020',  image: 'http://www.gulnarmammadova.com/assets/azerbaijan_embassy.jpg', imageTitle: 'Embassy of the Republic of Azerbaijan in The Hague',
    descriptions: [ 
    {paragraph: 'I want to share my side of the story of the war that I  have been exposed to and was part of since my childhood till today. It is neither to accuse one or glorify another!'}, 
    {paragraph: 'For the last 8 years, I was part of public diplomacy that was going on in parallel to official negations between Azerbaijan and Armenian governments. The former was aimed to restore trust between Azerbaijani and Armenian people that was lost due to the war during 1992-1994. The war resulted in the occupation of 20% of internationally recognized territories of Azerbaijan Republic and displacement of 800 000 Azerbaijanis from their homes in Nagorno Karabakh and surrounding regions. '},
    {paragraph: 'The outbreak was around the time when I started going to school. I was about six then. My parents did not explain to me anything that was going on before I started to witness it myself. One day I found myself at the funeral of my 18 years old lovely cousin, in flourishing years of his youth, perished on the frontline. Yet on another day, I saw a sudden flux of Internally Displaced People (refugees) to appear in my neighborhood in the city of Sumgait.  I did not know what war means, but it traumatized my childhood since then and I could feel it before I could understand.'},
    {paragraph: 'In the summer of 2012 for the first time in my life, I met with Armenians in Tbilisi, Georgia in the framework of a peace project. The purpose of the project was to contribute to the restoration of trust between two nations of the South Caucasus. I admit that my initial cautious, distanced, and distrustful approach toward Armenians have changed toward trust and confidence as I attended more such events with them.  I started to believe that as people of South Caucasus we have a lot of things in common i.e., similar culture, mentality, and centuries of coexistence.'},
    {paragraph: 'Recently, the military clashes on the border between Azerbaijan and Armenia were resumed, causing loss of 16 servicemen from both sides and one civilian from Azerbaijani village, thus putting all these tiny achievements of the years under threat. '},
    {paragraph: 'Last weekend <a  target="_blank" href="https://regio15.nl/nieuws/lijst-weergave/23-demonstraties/31993-veel-emoties-tijdens-betogingen-op-de-andries-bickerweg"> in the Hague, Netherlands </a>  I joined my fellow Azerbaijanis, in a peaceful gathering at the embassy of Azerbaijan, to show my support with my countrymen in its hard times and in the face of  Armenian protest outside the embassy. I put my expectations high about the peaceful nature of the event, did not have any fear because any act of violence did not cross my mind. Maybe this naiveness derived from 8 years of participation in the peace projects, where a  small group of people representing two belligerent societies with their hardly heard voices still believed in peace.'},
    {paragraph: 'Unfortunately, despite the strong presence of police around, suddenly It flared up and we saw thrown plastic bottles and then stones inside the embassy’s front-yard where we were gathered. I saw in response a few plastic bottles to be thrown from our side too. Immediately following the violence, Dutch police promptly responded, and with the help of the mounted sections of police Armenian protestors were dispersed. Later on, police also watched us leave the embassy building safely as some of Armenians standing outside already attacked the initial group that left the building. Carefully and with a company of some people I put on my bike to go back home. Despite stress and worry that followed all the way home I still knew that I can feel safe in the Netherlands.'},
    {paragraph: 'The same luck with police, and timely prevention of violence did not occur in other places of the world where both Armenians and Azerbaijanis were protesting. Seeing in  <a href="https://youtu.be/p7E1ZHdoXDs" target="_blank"> Los Angels, USA </a>  around 3000 Armenians attacking around 50 Azerbaijanis, beating some to the point of death, is inhuman and cruel to say least. Everyone loves their homeland, be it Armenian or Azerbaijani. But beating, stepping on other’s flag and screaming nasty words has nothing to do with loving your homeland and is not going to bring any solution to the conflict.  Such kind of pseudo patriotism is very dangerous for any society and has to be prevented to avoid repetition of events of the past, like the massacre of civilians in Azerbaijani <a href="https://www.nytimes.com/1992/03/03/world/massacre-by-armenians-being-reported.html" target="_blank">Khojaly</a> town. We should condemn and denounce such violent acts and prevent shameful for any nation occurrences.'},
    {paragraph: 'One year ago, I attended another peace initiative in <a href="https://youtu.be/A97Rh20Mdlw" target="_blank">Belgium</a> . We visited Tyne Cot cemetery, where thousands of soldiers killed during WWI, are buried. Soldiers from different nationalities, from Allies and some German graves as well were lying side by side. That trip was the culmination of my whole experience in peace projects.  Listening to stories of brutal warfare in trenches the young men had to go through by our guide, we all - Azerbaijanis and Armenians side by side were shedding tears.  This moment created a common empathy in our hearts for the people that lived a hundred years ago.'},
    {paragraph: 'Now for 30 years of my life, seeing people from my generation and the younger ones, dying on border/frontline military clashes,  and beaten in the third country, I ask, is it so hard to show empathy to your neighbor, to your pier and just to another human being?!  When are we going to feel safe and secure in our countries and elsewhere?!'},
    {paragraph: 'This war already traumatized our childhood and does the same for the coming generations. We are all hurt in some way or another. The little progress that was done to reconcile Armenian and Azerbaijani people is fading away now and probably will require an additional 30 years to make another tiny change.'},
    {paragraph: 'Peace is extremely fragile, hate and violence are contagious. Because this outbreak can easily put us into a new loop of violence it has to be timely disapproved and discouraged.'},
    {paragraph: 'Lastly, I conclude my thoughts with a quote from the novel All Quiet on the Western Front by Erich Maria Remarque: <q> But now, for the first time, I see you are a man like me. I thought of your hand-grenades, of your bayonet, of your rifle; now I see your wife and your face and our fellowship. Forgive me, comrade. We always see it too late. Why do they never tell us that you are poor devils like us, that your mothers are just as anxious as ours, and that we have the same fear of death, and the same dying and the same agony--Forgive me, comrade; how could you be my enemy?</q>'}
  ]
  },

  // {title: '', date: '', image: 'https://www.youtube.com/watch?v=TYuKm40Z-0Q&ab_channel=Gulnar'}
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
