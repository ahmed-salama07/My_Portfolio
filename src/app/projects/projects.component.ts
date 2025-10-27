import { Component, NgModule } from '@angular/core';
import { Projects } from '../interfaces/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  proj: Projects[] = [
    {
      title: 'To-DO List',
      imgUrl: 'project1.png',
      projectUrl: 'https://ahmed-salama07.github.io/To-Do-List/',
    },
    {
      title: 'My CV',
      imgUrl: 'project2.png',
      projectUrl: 'https://ahmed-salama07.github.io/Ahmed-Salama-CV/',
    },
    {
      title: 'Dashboard',
      imgUrl: 'project3.png',
      projectUrl: 'https://ahmed-salama07.github.io/Bootstrap-Dashboard/',
    },
    {
      title: 'Bootstrap Practice',
      imgUrl: 'project4.png',
      projectUrl: 'https://ahmed-salama07.github.io/BootStrap-Practice-1/',
    },
    {
      title: 'Restaurant Website',
      imgUrl: 'project5.png',
      projectUrl: 'https://ahmed-salama07.github.io/Restaurant/',
    },
    {
      title: 'Iphone',
      imgUrl: 'project6.png',
      projectUrl: 'https://ahmed-salama07.github.io/Challenge-2-FM/',
    },
    {
      title: 'CSS Practice',
      imgUrl: 'project7.png',
      projectUrl: 'https://ahmed-salama07.github.io/Challenge-2-FM/',
    },
    {
      title: 'Leon Theme',
      imgUrl: 'project8.png',
      projectUrl: 'https://ahmed-salama07.github.io/HTML-CSS-Practice/',
    },
  ]

  openProject(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Project URL is not available.');
    }
  }
}
