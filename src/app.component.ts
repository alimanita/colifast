import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, AfterViewInit, signal } from '@angular/core';
import { TRANSLATIONS, Lang, LANG_META } from './translations';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  formMessage = '';
  isScrolled = false;
  countersStarted = false;

  counter1 = 0;
  counter2 = 0;
  counter3 = 0;

  lang = signal<Lang>('fr');
  langs = Object.keys(LANG_META) as Lang[];
  langMeta = LANG_META;
  showLangMenu = false;
  mobileMenuOpen = false;

  constructor(public translate: TranslateService) {
    this.translate.use('fr');
  }

  setLang(l: Lang) {
    this.lang.set(l);
    this.translate.use(l);
    this.showLangMenu = false;
    document.documentElement.lang = LANG_META[l].htmlLang;
  }

  toggleLangMenu() {
    this.showLangMenu = !this.showLangMenu;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.lang-menu')) {
      this.showLangMenu = false;
    }
  }

  ngOnInit() {
    this.checkScroll();
  }

  ngAfterViewInit() {
    // Small delay to ensure DOM is fully rendered before observing
    setTimeout(() => {
      this.initRevealObserver();
      this.initCounterObserver();
    }, 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  submitQuote(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    this.formMessage = this.translate.instant('ct.success');
    form.reset();
    setTimeout(() => { this.formMessage = ''; }, 6000);
  }

  private initRevealObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once revealed, no need to observe again
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Use global class names (not encapsulated)
    ['reveal', 'reveal-left', 'reveal-right', 'reveal-scale'].forEach(cls => {
      document.querySelectorAll(`.${cls}`).forEach(el => observer.observe(el));
    });
  }

  private initCounterObserver() {
    const counterSection = document.querySelector('.counter-section');
    if (!counterSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.countersStarted) {
            this.countersStarted = true;
            this.animateValue('counter1', 0, 24, 1200);
            this.animateValue('counter2', 0, 99, 1500);
            this.animateValue('counter3', 0, 15, 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(counterSection);
  }

  private animateValue(key: 'counter1' | 'counter2' | 'counter3', start: number, end: number, duration: number) {
    const startTime = performance.now();
    const range = end - start;
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this[key] = Math.floor(start + range * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
