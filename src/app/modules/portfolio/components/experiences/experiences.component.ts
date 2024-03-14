import { Component, signal } from '@angular/core';

// Intrerface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analista de Sistemas - UMC/2024: ',
        p: 'Recem Formado',
      },
      text: '<p>Formado em Análise e Desenvolvimento de Sistemas pela Universidade de Mogi das Cruzes - UMC/2024</p>',
    },

    {
      summary: {
        strong: 'Estudante de Front-end: ',
        p: 'Aprimorando conhecimentos',
      },
      text: '<p>Estudo Front-end, através do uso das linguagens HTML, CSS e JavaScript, buscamos criar interfaces que sejam intuitivas e atraentes para os usuários, proporcionando uma experiência de navegação fluida e impactante.</p>',
    },
  ]);
}
