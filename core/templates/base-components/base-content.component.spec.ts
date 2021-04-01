// Copyright 2019 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Tests for the Base Transclusion Component.
 */

import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AlertMessageComponent } from 'components/common-layout-directives/common-elements/alert-message.component';
import { PromoBarComponent } from 'components/common-layout-directives/common-elements/promo-bar.component';
import { SideNavigationBarComponent } from 'components/common-layout-directives/navigation-bars/side-navigation-bar.component';
import { TopNavigationBarComponent } from 'components/common-layout-directives/navigation-bars/top-navigation-bar.directive';
import { LimiToPipe } from 'filters/limit-to.pipe';
import { TranslatePipe } from 'filters/translate.pipe';
import { OppiaFooterDirective } from 'pages/OppiaFooterDirective';
import { BottomNavbarStatusService } from 'services/bottom-navbar-status.service';
import { UrlService } from 'services/contextual/url.service';
import { WindowRef } from 'services/contextual/window-ref.service';
import { KeyboardShortcutService } from 'services/keyboard-shortcut.service';
import { LoaderService } from 'services/loader.service';
import { PageTitleService } from 'services/page-title.service';
import { SidebarStatusService } from 'services/sidebar-status.service';
import { BackgroundMaskService } from 'services/stateful/background-mask.service';
import { BaseContentComponent } from './base-content.component';
import { LoadingMessageComponent } from './loading-message.component';
import { WarningsAndAlertsComponent } from './warnings-and-alerts.component';

fdescribe('Base Content Component', () => {
  let fixture: ComponentFixture<BaseContentComponent>;
  let componentInstance: BaseContentComponent;
  let isIframed: boolean = false;
  let hostname: string = '';
  let href: string = 'test_href';
  let pathname: string = 'test_pathname';
  let search: string = 'test_search';
  let hash: string = 'test_hash';
  let backgroundMaskService: BackgroundMaskService;
  let bottomNavbarStatusService: BottomNavbarStatusService;
  let windowRef: WindowRef;
  let loaderService: LoaderService;
  let keyboardShortcutService: KeyboardShortcutService;
  let sidebarStatusService: SidebarStatusService;

  class MockUrlService {
    isIframed(): boolean {
      return isIframed;
    }
  }

  class MockWindowRef {
    nativeWindow = {
      location: {
        hostname: hostname,
        href: href,
        pathname: pathname,
        search: search,
        hash: hash
      }
    };
  }

  class MockPageTitleService {
    getPageTitleForMobileView(): string {
      return 'Page Title';
    }

    getPageSubtitleForMobileView(): string {
      return 'Page Subtitle';
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BaseContentComponent,
        OppiaFooterDirective,
        LoadingMessageComponent,
        WarningsAndAlertsComponent,
        PromoBarComponent,
        TopNavigationBarComponent,
        SideNavigationBarComponent,
        TranslatePipe,
        AlertMessageComponent,
        LimiToPipe
      ],
      providers: [
        {
          provide: WindowRef,
          useClass: MockWindowRef
        },
        {
          provide: UrlService,
          useClass: MockUrlService
        },
        BackgroundMaskService,
        BottomNavbarStatusService,
        KeyboardShortcutService,
        LoaderService,
        {
          provide: PageTitleService,
          useClass: MockPageTitleService
        },
        SidebarStatusService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseContentComponent);
    componentInstance = fixture.componentInstance;
    loaderService = TestBed.inject(LoaderService);
    loaderService = (loaderService as unknown) as jasmine.SpyObj<LoaderService>;
    keyboardShortcutService = TestBed.inject(KeyboardShortcutService);
    keyboardShortcutService = (keyboardShortcutService as unknown) as
    jasmine.SpyObj<KeyboardShortcutService>;
    windowRef = TestBed.inject(WindowRef);
    windowRef = (windowRef as unknown) as jasmine.SpyObj<WindowRef>;
    sidebarStatusService = TestBed.inject(SidebarStatusService);
    sidebarStatusService = (sidebarStatusService as unknown) as
    jasmine.SpyObj<SidebarStatusService>;
    bottomNavbarStatusService = TestBed.inject(BottomNavbarStatusService);
    bottomNavbarStatusService = (bottomNavbarStatusService as unknown) as
    jasmine.SpyObj<BottomNavbarStatusService>;
    backgroundMaskService = TestBed.inject(BackgroundMaskService);
    backgroundMaskService = (backgroundMaskService as unknown) as
    jasmine.SpyObj<BackgroundMaskService>;
  });

  it('should create', () => {
    expect(componentInstance).toBeDefined();
  });

  it('should initiaize', () => {
    spyOn(loaderService.onLoadingMessageChange, 'subscribe').and.
      callFake((calb: (message: string) => void) => {
        calb('Test Message');
      });
    spyOn(keyboardShortcutService, 'bindNavigationShortcuts');
    windowRef.nativeWindow.location.hostname = 'oppiaserver.appspot.com';
    componentInstance.ngOnInit();
    expect(componentInstance.loadingMessage).toEqual('Test Message');
    expect(keyboardShortcutService.bindNavigationShortcuts).toHaveBeenCalled();
    expect(componentInstance.iframed).toEqual(isIframed);
    expect(componentInstance.getHeaderText()).toEqual('Page Title');
    expect(componentInstance.getSubheaderText()).toEqual('Page Subtitle');
    expect(componentInstance.getSubheaderText).toBeDefined();
    expect(windowRef.nativeWindow.location.href).toEqual(
      'https://oppiatestserver.appspot.com' +
      pathname + search + hash
    );
    expect(loaderService.onLoadingMessageChange.subscribe).toHaveBeenCalled();
  });

  it('should toggle sidebar', () => {
    spyOn(sidebarStatusService, 'toggleSidebar');
    componentInstance.toggleSidebar();
    expect(sidebarStatusService.toggleSidebar).toHaveBeenCalled();
  });

  it('should get sidebar status', () => {
    spyOn(sidebarStatusService, 'isSidebarShown').and.returnValue(false);
    expect(componentInstance.isSidebarShown()).toBeFalse();
    expect(sidebarStatusService.isSidebarShown).toHaveBeenCalled();
  });

  it('should get bottom navbar status', () => {
    spyOn(bottomNavbarStatusService, 'isBottomNavbarEnabled')
      .and.returnValue(false);
    expect(componentInstance.isBottomNavbarShown()).toBeFalse();
    expect(bottomNavbarStatusService.isBottomNavbarEnabled).toHaveBeenCalled();
  });

  it('should close sidebar on swipe', () => {
    spyOn(sidebarStatusService, 'closeSidebar');
    componentInstance.closeSidebarOnSwipe();
    expect(sidebarStatusService.closeSidebar).toHaveBeenCalled();
  });

  it('should toggle mobile nav options', () => {
    componentInstance.mobileNavOptionsAreShown = false;
    componentInstance.toggleMobileNavOptions();
    expect(componentInstance.mobileNavOptionsAreShown).toBeTrue();
  });

  it('should get background mask status', () => {
    spyOn(backgroundMaskService, 'isMaskActive').and.returnValue(false);
    expect(componentInstance.isBackgroundMaskActive()).toBeFalse();
    expect(backgroundMaskService.isMaskActive).toHaveBeenCalled();
  });

  it('should skip to main content', () => {
    let document = TestBed.inject(DOCUMENT);
    let dummyElement = document.createElement('div');
    spyOn(document, 'getElementById').and.returnValue(dummyElement);
    componentInstance.skipToMainContent();
    expect(dummyElement.tabIndex).toEqual(-1);
    document.getElementById.and.returnValue(null);
    expect(componentInstance.skipToMainContent).toThrowError();
  });
});
