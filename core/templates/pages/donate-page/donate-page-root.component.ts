import { Component } from '@angular/core';
import { PageTitleService } from 'services/page-title.service';

@Component({
  selector: 'donate-page-root',
  template: '<router-outlet></router-outlet>',
})
export class DonatePageRootComponent {
  constructor(
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Donate - Oppia');
  }
}
