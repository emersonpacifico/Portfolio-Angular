import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProject = signal<IProjects[]>([
    {
      src: 'assets/img/projects/trip.png',
      alt: 'Projeto pagina Trip',
      title: 'Trip',
      width: '100px',
      height: '51px',
      description:
        'Conheça minha página Trip" é a sua porta de entrada para um universo de viagens e aventuras. ',
      links: [
        {
          name: 'Conheça minha página Trip',
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
      description:
        'Explore a Magia do Grão em nosso site! Somos apaixonados por café e aqui você encontrará tudo sobre essa bebida fascinante. ',
      links: [
        {
          name: 'Conheça minha página Magia do Grão',
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
      description:
        '"Bem-vindo ao Bikstrap, sua fonte definitiva de informações sobre bicicletas! Aqui, você encontrará tudo o que precisa para se aventurar no mundo do ciclismo, desde análises detalhadas de bicicletas e acessórios até dicas de manutenção e rotas de passeio imperdíveis.',
      links: [
        {
          name: 'Conheça minha página Bikstrap',
          href: 'https://bikstrap.vercel.app/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
