import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HeroService} from './service/hero/hero.service';
import {ActivityService} from './service/activity/activity.service';
import {PlayerService} from './service/player/player.service';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './components/page/hero-detail/hero-detail.component';
import {HomeComponent} from './components/page/home/home.component';
import {ActivityComponent} from './components/components/activity/activity.component';
import {LevelingComponent} from './components/page/leveling/leveling.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HomeComponent,
    ActivityComponent,
    LevelingComponent
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
