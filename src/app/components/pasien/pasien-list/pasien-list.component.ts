import { Component, OnInit } from '@angular/core';
import { Pasien } from 'src/app/models/pasien.model';
import { PasienService } from 'src/app/_services/pasien.service';

@Component({
  selector: 'app-pasien-list',
  templateUrl: './pasien-list.component.html',
  styleUrls: ['./pasien-list.component.css']
})
export class PasienListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
