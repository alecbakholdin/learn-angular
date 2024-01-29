import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HousingLocationComponent, CommonModule],
})
export class HomeComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[];

  constructor() {
    const cityFilter = this.route.snapshot.queryParams['cityFilter'];
    this.housingLocationList = this.housingService.getHousingLocations(cityFilter);
  }

  filterLocations(filter: string) {
    this.housingLocationList = this.housingService.getHousingLocations(filter);
  }
}
