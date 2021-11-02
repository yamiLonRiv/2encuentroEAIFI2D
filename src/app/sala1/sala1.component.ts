import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VentanaModalComponent } from '../ventana-modal/ventana-modal.component';


@Component({
  selector: 'app-sala1',
  templateUrl: './sala1.component.html',
  styleUrls: ['./sala1.component.css']
})
export class Sala1Component implements OnInit {

  constructor(private router: Router, private ngbModal: NgbModal, private dataService:DataserviceService) { }

  ngOnInit(): void {
  }
  irInicio(): void{
    this.router.navigate(['']);
  }
  imageObject: Array<object> = [{
    image: 'assets/S1-POSTER/S1-P01.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P01.jpg',
    alt: 'alt of image',
    title: 'poster 1'

   },
   {
    image: 'assets/S1-POSTER/S1-P02.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P02.jpg',
    alt: 'alt of image',
    title: 'poster 2'
   },
   {
    image: 'assets/S1-POSTER/S1-P03.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P03.jpg',
    alt: 'alt of image',
    title: 'poster 3'
   },
   {
    image: 'assets/S1-POSTER/S1-P04-REVISAR.png',
    thumbImage: 'assets/S1-POSTER/S1-P04-REVISAR.png',
    alt: 'alt of image',
    title: 'poster 4'
   },
   {
    image: 'assets/S1-POSTER/S1-P05.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P05.jpg',
    alt: 'alt of image',
    title: 'poster 5'
   },
   {
    image: 'assets/S1-POSTER/S1-P06.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P06.jpg',
    alt: 'alt of image',
    title: 'poster 6'
   },
   {
    image: 'assets/S1-POSTER/S1-P07.png',
    thumbImage: 'assets/S1-POSTER/S1-P07.png',
    alt: 'alt of image',
    title: 'poster 7'
   },
   {
    image: 'assets/S1-POSTER/S1-P08.png',
    thumbImage: 'assets/S1-POSTER/S1-P08.png',
    alt: 'alt of image',
    title: 'poster 8'
   },
   {
    image: 'assets/S1-POSTER/S1-P09.png',
    thumbImage: 'assets/S1-POSTER/S1-P09.png',
    alt: 'alt of image',
    title: 'poster 9'
   },
   {
    image: 'assets/S1-POSTER/S1-P010.png',
    thumbImage: 'assets/S1-POSTER/S1-P010.png',
    alt: 'alt of image',
    title: 'poster 10'
   },
   {
    image: 'assets/S1-POSTER/S1-P011.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P011.jpg',
    alt: 'alt of image',
    title: 'poster 11'
   },
   {
    image: 'assets/S1-POSTER/S1-P012.png',
    thumbImage: 'assets/S1-POSTER/S1-P012.png',
    alt: 'alt of image',
    title: 'poster 12'
   },
   {
    image: 'assets/S1-POSTER/S1-P013.png',
    thumbImage: 'assets/S1-POSTER/S1-P013.png',
    alt: 'alt of image',
    title: 'poster 13'
   },
   {
    image: 'assets/S1-POSTER/S1-P014-REVISAR.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P014-REVISAR.jpg',
    alt: 'alt of image',
    title: 'poster 14'
   },
   {
    image: 'assets/S1-POSTER/S1-P015-REVISAR.png',
    thumbImage: 'assets/S1-POSTER/S1-P015-REVISAR.png',
    alt: 'alt of image',
    title: 'poster 15'
   },
   {
    image: 'assets/S1-POSTER/S1-P016-REVISAR.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P016-REVISAR.jpg',
    alt: 'alt of image',
    title: 'poster 16'
   },
   {
    image: 'assets/S1-POSTER/S1-P017.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P017.jpg',
    alt: 'alt of image',
    title: 'poster 17'
   },
   {
    image: 'assets/S1-POSTER/S1-P018.JPG',
    thumbImage: 'assets/S1-POSTER/S1-P018.JPG',
    alt: 'alt of image',
    title: 'poster 18'
   },
   {
    image: 'assets/S1-POSTER/S1-P019.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P019.jpg',
    alt: 'alt of image',
    title: 'poster 19'
   },
   {
    image: 'assets/S1-POSTER/S1-P020.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P020.jpg',
    alt: 'alt of image',
    title: 'poster 20'
   },
   {
    image: 'assets/S1-POSTER/S1-P021.png',
    thumbImage: 'assets/S1-POSTER/S1-P021.png',
    alt: 'alt of image',
    title: 'poster 21'
   },
   {
    image: 'assets/S1-POSTER/S1-P022.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P022.jpg',
    alt: 'alt of image',
    title: 'poster 22'
   },
   {
    image: 'assets/S1-POSTER/S1-P023.png',
    thumbImage: 'assets/S1-POSTER/S1-P023.png',
    alt: 'alt of image',
    title: 'poster 23'
   },
   {
    image: 'assets/S1-POSTER/S1-P024.png',
    thumbImage: 'assets/S1-POSTER/S1-P024.png',
    alt: 'alt of image',
    title: 'poster 24'
   },
   {
    image: 'assets/S1-POSTER/S1-P025.png',
    thumbImage: 'assets/S1-POSTER/S1-P025.png',
    alt: 'alt of image',
    title: 'poster 25'
   }
];



mostarInfo(event){
  this.dataService.poster = event;
  this.dataService.sala1 = true;
  this.dataService.sala2 = false;
  this.dataService.sala3 = false;
  this.dataService.sala4 = false;
  this.ngbModal.open(VentanaModalComponent);

}
}


