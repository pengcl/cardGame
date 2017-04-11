import {Component, OnInit} from '@angular/core';
import {Activity} from './../../../activity';
import {ActivityService} from './../../../service/activity/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  images: Array<string> = ['sports', 'abstract', 'people', 'transport', 'city', 'technics', 'nightlife', 'animals'];
  activities: Activity[];

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
