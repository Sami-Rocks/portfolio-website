import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects=[
    {
      imageUrl: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
      title: 'Big Title',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing eon sapiente, voluptatibus vero exercitationem commodi.',
      link: 'google.com',
      active: false
    },
    {
      imageUrl: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
      title: 'Big Title 2',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum doloribus, perferendis eum debitis pariat.',
      link: 'google.com',
      active: true
    },
    {
      imageUrl: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
      title: 'Big Title 2',
      description: 'Loti tempora non sapiente, voluptatibus vero exercitationem commodi.',
      link: 'google.com',
      active: false
    }
    ,
    {
      imageUrl: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
      title: 'Big Title 2',
      description: 'Loti tempora non sapiente, voluptatibus vero exercitationem commodi.',
      link: 'google.com',
      active: false
    }
  ]
  constructor() { 
  
  }

  ngOnInit(): void {
  
  }



  
}
