import { Component, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProject = signal<IProjects[]>([
    {
      src: 'assets/img/projects/trip.png',
      alt: 'Projeto pagina Trip',
      title: 'Trip',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça a página',
          href: 'https://trip-flame.vercel.app/',
        },
      ],
    },

    {
      src: 'assets/img/projects/magiadograo.png',
      alt: 'Projeto pagina Magia do Grão',
      title: 'Magia do Grão',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça a página',
          href: 'https://magiado-grao.vercel.app/',
        },
      ],
    },

    {
      src: 'assets/img/projects/bikstrap.png',
      alt: 'Projeto pagina Bikstrap',
      title: 'Bikstrap',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça a página',
          href: 'https://bikstrap.vercel.app/',
        },
      ],
    },
  ]);
}
