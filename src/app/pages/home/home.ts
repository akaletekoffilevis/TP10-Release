import { Component, inject } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { SkillCard } from '../../components/skill-card/skill-card';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillCard, KeyValuePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // Dependency Injection : Angular fournit automatiquement le service
  private service = inject(PortfolioService);

  // Ces méthodes renvoient des Signals -> l'affichage se met à jour automatiquement
  profile = this.service.getProfile();
  skills = this.service.getSkills();
  experience = this.service.getExperience();
  projects = this.service.getProjects();
  likeCount = this.service.getLikeCount();

  // Méthode appelée au clic, met à jour un signal
  addLike() {
    this.service.addLike();
  }
}
