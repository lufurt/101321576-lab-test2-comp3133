import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../../services/mission.service';
import { Mission } from '../../Mission';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'] // Corrected property name
})
export class MissiondetailsComponent implements OnInit {
  mission!: Mission;

  constructor(
    private route: ActivatedRoute, 
    private missionService: MissionService
  ) {}

  ngOnInit(): void {
    this.loadMissionDetails();
  }

  private loadMissionDetails(): void {
    const flightNumber = Number(this.route.snapshot.paramMap.get('flightNumber'));
    if (!isNaN(flightNumber)) {
      this.missionService.getMissionDetails(flightNumber).subscribe({
        next: (mission) => this.mission = mission,
        error: (err) => console.error(err) // Handle errors from the service
      });
    }
  }
}
