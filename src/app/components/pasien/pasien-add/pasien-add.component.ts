import { Component, OnInit } from '@angular/core';
import { Pasien } from 'src/app/models/pasien.model';
import { PasienService } from 'src/app/_services/pasien.service';

@Component({
  selector: 'app-pasien-add',
  templateUrl: './pasien-add.component.html',
  styleUrls: ['./pasien-add.component.css']
})
export class PasienAddComponent implements OnInit {
  pasien: Pasien = {
    nama: '',
    hp: '',
    alamat: '',
  };
  submitted = false;

  constructor(private pasienService: PasienService) { }

  ngOnInit(): void {
  }
  savePasien(): void {
    const data = {
      nama: this.pasien.nama,
      hp: this.pasien.hp,
      alamat: this.pasien.alamat,
    };

    this.pasienService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPasien(): void {
    this.submitted = false;
    this.pasien = {
      nama: '',
      hp: '',
      alamat: '',
    };
  }

}
