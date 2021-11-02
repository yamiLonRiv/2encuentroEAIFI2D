import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VentanaModalComponent } from '../ventana-modal/ventana-modal.component';


@Component({
  selector: 'app-sala4',
  templateUrl: './sala4.component.html',
  styleUrls: ['./sala4.component.css']
})
export class Sala4Component implements OnInit {

  constructor(private router: Router, private ngbModal: NgbModal, private dataService:DataserviceService) { }

  ngOnInit(): void {
  }

  irInicio(): void{
    this.router.navigate(['']);
  }

  imageObject: Array<object> = [{
    image: 'assets/S4-POSTER/S4-P01.jpeg',
    thumbImage: 'assets/S4-POSTER/S4-P01.jpeg',
    alt: 'alt of image',
    title: 'poster 1'

   },
   {
    image: 'assets/S4-POSTER/S4P02.jpg',
    thumbImage: 'assets/S4-POSTER/S4P02.jpg',
    alt: 'alt of image',
    title: 'poster 2'
   },
   {
    image: 'assets/S4-POSTER/S4-P03.JPG',
    thumbImage: 'assets/S4-POSTER/S4-P03.JPG',
    alt: 'alt of image',
    title: 'poster 3'
   }
];

mostarInfo(event){
    this.dataService.poster = event;
   this.dataService.sala1 = false;
  this.dataService.sala2 = false;
  this.dataService.sala3 = false;
  this.dataService.sala4 = true;
  this.ngbModal.open(VentanaModalComponent);
}

}
