import { Component } from '@angular/core';
import { PageTitleService } from 'services/page-title.service';

@Component({
  selector: 'donate-page-root',
  template: '<donate-page></donate-page>'
})
export class DonatePageRootComponent {
  constructor(
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Donate - Oppia');
  }
}
