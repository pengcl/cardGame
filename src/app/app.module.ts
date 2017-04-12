// system
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// service
import {HeroService} from './service/hero/hero.service';
import {ActivityService} from './service/activity/activity.service';
import {PlayerService} from './service/player/player.service';

import {AppComponent} from './app.component';

// pages
import {HeroDetailComponent} from './components/pages/hero-detail/hero-detail.component';
import {HomeComponent} from './components/pages/home/home.component';
import {LevelingComponent} from './components/pages/leveling/leveling.component';

// components
import {ActivityComponent} from './components/components/activity/activity.component';
import { CardItemComponent } from './components/components/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HomeComponent,
    ActivityComponent,
    LevelingComponent,
    CardItemComponent
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
  providers: [HeroService, ActivityService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
