import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Deuxième page du portfolio, accessible via la route /about
// Concept : ROUTING (une route mène vers ce composant)
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <div class="card">
        <h1>À propos</h1>
        <p>
          Je suis <strong>Koffi Lévis AKALETE</strong>, développeur Full Stack Junior
          basé à Niamey, Niger. Ambassadeur 10000 CODEURS.
        </p>
        <p>
          Spécialisé en <strong>C#, .NET, ASP.NET Core et Blazor</strong>. Je conçois
          des APIs REST sécurisées et des applications web/mobiles.
        </p>
        <p>
          Compétences : C#, .NET, ASP.NET Core, Blazor, Entity Framework Core, SQL Server,
          SQLite, JavaScript, TypeScript, React, Next.js, Flutter, Firebase, Python, Docker, Git.
        </p>
        <p>
          19 projets open-source sur GitHub, 13 certifications.
        </p>
        <div class="links">
          <a href="https://github.com/akaletekoffilevis" target="_blank" class="back">GitHub</a>
          <a href="https://linkedin.com/in/akalete-koffi-levis" target="_blank" class="back">LinkedIn</a>
          <a href="mailto:koffilevis21@gmail.com" class="back">Email</a>
        </div>
        <a class="back home" routerLink="/home">&#8592; Retour à l'accueil</a>
      </div>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 20px;
    }
    .card {
      background: white;
      border-radius: 16px;
      padding: 40px;
      text-align: center;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      max-width: 600px;
      width: 90%;
    }
    h1 {
      color: #667eea;
      margin-bottom: 16px;
    }
    p {
      color: #555;
      line-height: 1.6;
      margin-bottom: 16px;
      text-align: left;
    }
    .links {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
      margin: 20px 0;
    }
    a.back {
      display: inline-block;
      background: #667eea;
      color: white;
      padding: 10px 24px;
      border-radius: 20px;
      text-decoration: none;
      font-size: 0.95rem;
      transition: background 0.2s;
    }
    a.back:hover {
      background: #764ba2;
    }
    a.back.home {
      margin-top: 12px;
      background: #555;
    }
    a.back.home:hover {
      background: #333;
    }
  `
})
export class About {}
