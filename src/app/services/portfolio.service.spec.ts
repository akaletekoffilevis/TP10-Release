import { TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Profile tests
  it('getProfile should return a signal', () => {
    const profile = service.getProfile();
    expect(profile).toBeTruthy();
    expect(profile().name).toBe('Koffi Lévis AKALETE');
  });

  it('profile should have title', () => {
    expect(service.getProfile()().title).toBe('Développeur Full Stack Junior');
  });

  it('profile should have email', () => {
    expect(service.getProfile()().email).toBe('koffilevis21@gmail.com');
  });

  it('profile should have github link', () => {
    expect(service.getProfile()().github).toContain('github.com');
  });

  it('profile should have linkedin link', () => {
    expect(service.getProfile()().linkedin).toContain('linkedin.com');
  });

  // Skills tests
  it('getSkills should return non-empty array', () => {
    expect(service.getSkills()().length).toBeGreaterThan(0);
  });

  it('skills should include C#', () => {
    expect(service.getSkills()()).toContain('C#');
  });

  it('skills should include .NET', () => {
    expect(service.getSkills()()).toContain('.NET');
  });

  it('skills should include Angular-related? no, but React', () => {
    expect(service.getSkills()()).toContain('React');
  });

  // Experience tests
  it('getExperience should return object', () => {
    const exp = service.getExperience()();
    expect(exp).toBeTruthy();
    expect(typeof exp).toBe('object');
  });

  it('experience should have C# entry', () => {
    expect(service.getExperience()()['C#']).toBeGreaterThan(0);
  });

  // Projects tests
  it('getProjects should return non-empty array', () => {
    expect(service.getProjects()().length).toBeGreaterThan(0);
  });

  it('projects should include Scaffolder-CLI', () => {
    const names = service.getProjects()().map((p: any) => p.name);
    expect(names).toContain('Scaffolder-CLI');
  });

  // Like count tests
  it('likeCount should start at 0', () => {
    expect(service.getLikeCount()()).toBe(0);
  });

  it('addLike should increment likeCount', () => {
    service.addLike();
    expect(service.getLikeCount()()).toBe(1);
  });

  it('addLike multiple times should increment', () => {
    const before = service.getLikeCount()();
    service.addLike();
    service.addLike();
    expect(service.getLikeCount()()).toBe(before + 2);
  });

  // Profile location
  it('profile should have location Niamey', () => {
    expect(service.getProfile()().location).toContain('Niamey');
  });

  // Skills count
  it('should have at least 10 skills', () => {
    expect(service.getSkills()().length).toBeGreaterThanOrEqual(10);
  });

  // Projects have urls
  it('projects should have urls', () => {
    service.getProjects()().forEach((p: any) => {
      expect(p.url).toContain('github.com');
    });
  });
});
