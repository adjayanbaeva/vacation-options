import { Component, Input, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css'],
  providers: [PlaceService]
})

export class EditPlaceComponent implements OnInit {
  @Input() selectedPlace;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
  }

  beginUpdatingPlace(placeToUpdate){
    this.placeService.updatePlace(placeToUpdate);
  }

}
