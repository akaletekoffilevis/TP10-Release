import { Injectable, signal } from '@angular/core';

// Service injectable : code partagé entre plusieurs composants
// Concept : DEPENDENCY INJECTION (injecter du code dans un composant)
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly profile = signal({
    name: 'Koffi Lévis AKALETE',
    title: 'Développeur Full Stack Junior',
    subtitle: 'C#, .NET, ASP.NET Core, Blazor',
    presentation:
      "Développeur Full Stack Junior spécialisé en C#, .NET, ASP.NET Core et Blazor. " +
      "Ambassadeur 10000 CODEURS. APIs REST sécurisées, applications web et mobiles. " +
      "Basé à Niamey, Niger. 19 projets open-source, 13 certifications.",
    location: 'Niamey, Niger',
    email: 'koffilevis21@gmail.com',
    phone: '+227 91 53 52 20',
    github: 'https://github.com/akaletekoffilevis',
    linkedin: 'https://linkedin.com/in/akalete-koffi-levis',
    avatar: 'assets/photo.jpg'
  });

  // Signal : liste des compétences (source de vérité unique)
  private readonly skills = signal<string[]>([
    'C#',
    '.NET',
    'ASP.NET Core',
    'Blazor',
    'Entity Framework Core',
    'SQL Server',
    'SQLite',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Flutter',
    'Firebase',
    'Python',
    'Docker',
    'Git',
    'REST APIs',
    'HTML/CSS'
  ]);

  // Record de temps passé par compétence
  private readonly experience = signal<Record<string, number>>({
    'C#': 3,
    '.NET': 3,
    'ASP.NET Core': 2,
    'Blazor': 2,
    'JavaScript': 2,
    'TypeScript': 2,
    'React': 2,
    'Python': 2,
    'Flutter': 1,
    'Docker': 1,
    'Git': 3,
    'SQL': 2
  });

  // Projets mis en avant
  private readonly projects = signal([
    { name: 'Scaffolder-CLI', desc: 'CLI universel de génération de projets (.NET 10, AOT)', url: 'https://github.com/akaletekoffilevis/Scaffolder-CLI' },
    { name: 'youtube-downloader', desc: 'Téléchargeur YouTube', url: 'https://github.com/akaletekoffilevis/youtube-downloader' },
    { name: 'Bible', desc: 'Application Bible', url: 'https://github.com/akaletekoffilevis/Bible' },
  ]);

  // Signal : nombre de clics sur le bouton "J'aime"
  private readonly likeCount = signal(0);

  // Méthodes du service (consommées par les composants)
  getProfile() {
    return this.profile;
  }
  getSkills() {
    return this.skills;
  }
  getExperience() {
    return this.experience;
  }
  getProjects() {
    return this.projects;
  }
  getLikeCount() {
    return this.likeCount;
  }
  addLike() {
    // Met à jour le signal -> l'affichage se met à jour automatiquement
    this.likeCount.update((value) => value + 1);
  }
}
