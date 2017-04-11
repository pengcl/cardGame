import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HeroService} from './service/hero/hero.service';
import {ActivityService} from './service/activity/activity.service';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './components/page/hero-detail/hero-detail.component';
import {HomeComponent} from './components/page/home/home.component';
import {ActivityComponent} from './components/components/activity/activity.component';
import {OwlCarouselComponent} from './components/components/owlCarousel/owlCarousel';

import {OwlDirective} from './directives/owl.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HomeComponent,
    ActivityComponent,
    OwlCarouselComponent,
    OwlDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [HeroService, ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
