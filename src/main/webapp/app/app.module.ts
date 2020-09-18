import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { YcloudSharedModule } from 'app/shared/shared.module';
import { YcloudCoreModule } from 'app/core/core.module';
import { YcloudAppRoutingModule } from './app-routing.module';
import { YcloudHomeModule } from './home/home.module';
import { YcloudEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    YcloudSharedModule,
    YcloudCoreModule,
    YcloudHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    YcloudEntityModule,
    YcloudAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class YcloudAppModule {}
