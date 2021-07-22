import { Component, OnInit } from '@angular/core';
import { Pasien } from 'src/app/models/pasien.model';
import { PasienService } from 'src/app/_services/pasien.service';

@Component({
  selector: 'app-pasien-list',
  templateUrl: './pasien-list.component.html',
  styleUrls: ['./pasien-list.component.css']
})
export class PasienListComponent implements OnInit {
  pasiens?: Pasien[];
  currentPasien?: Pasien;
  currentIndex = -1;
  nama = '';

  constructor(private pasienService: PasienService) { }

  ngOnInit(): void {
    this.retrievePasiens();
  }

  retrievePasiens(): void {
    this.pasienService.getAll()
      .subscribe(
        data => {
          this.pasiens = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrievePasiens();
    this.currentPasien = undefined;
    this.currentIndex = -1;
  }

  setActivePasien(pasien: Pasien, index: number): void {
    this.currentPasien = pasien;
    this.currentIndex = index;
  }

  removeAllPasiens(): void {
    this.pasienService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentPasien = undefined;
    this.currentIndex = -1;

    this.pasienService.findByTitle(this.nama)
      .subscribe(
        data => {
          this.pasiens = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
