import {Component, OnInit} from '@angular/core';
import {Activity} from './../../../activity';
import {ActivityService} from './../../../service/activity/activity.service';
declare var $: any;

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  images: Array<string> = ['sports', 'abstract', 'people', 'transport', 'city', 'technics', 'nightlife', 'animals'];
  activities: Activity[];

  getLast(last) {
    if (last) {
      $('.owl-carousel').owlCarousel();
    }
  }

  getActivities(): void {
    this.activityService.getActivities().then(activities => {
      this.activities = activities;
    });
  }

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.getActivities();
  }
}
