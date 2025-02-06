import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housinglocation";
import { CommonModule } from "@angular/common";
import { HousingService } from "../housing.service";
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-home",
  imports: [CommonModule, HousingLocationComponent, ReactiveFormsModule],
  template: `
    <section>
      <form>
        <input
          type="text"
          placeholder="Filter by city"
        /> 
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  searchForm = new FormGroup({ searchCity: new FormControl("") });

  constructor() {}
  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] =
    this.housingService.getAllHousingLocations();
}
