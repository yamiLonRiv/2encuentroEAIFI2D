import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VentanaModalComponent } from '../ventana-modal/ventana-modal.component';

@Component({
  selector: 'app-sala3',
  templateUrl: './sala3.component.html',
  styleUrls: ['./sala3.component.css']
})
export class Sala3Component implements OnInit {

  constructor(private router: Router, private ngbModal: NgbModal, private dataService:DataserviceService) { }

  irInicio(): void{
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
  imageObject: Array<object> = [{
    image: 'assets/S3-POSTER/S3-P01.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P01.jpg',
    alt: 'alt of image',
    title: 'poster 1'

   },
   {
    image: 'assets/S3-POSTER/S3-P02.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P02.jpg',
    alt: 'alt of image',
    title: 'poster 2'
   },
   {
    image: 'assets/S3-POSTER/S3-P03.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P03.jpg',
    alt: 'alt of image',
    title: 'poster 3'
   },
   {
    image: 'assets/S3-POSTER/S3-P04.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P04.jpg',
    alt: 'alt of image',
    title: 'poster 4'
   },
   {
    image: 'assets/S3-POSTER/S3-P05.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P05.jpg',
    alt: 'alt of image',
    title: 'poster 5'
   },
   {
    image: 'assets/S3-POSTER/S3-P06.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P06.jpg',
    alt: 'alt of image',
    title: 'poster 6'
   },
   {
    image: 'assets/S3-POSTER/S3-P07.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P07.jpg',
    alt: 'alt of image',
    title: 'poster 7'
   },
   {
    image: 'assets/S3-POSTER/S3-P08.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P08.jpg',
    alt: 'alt of image',
    title: 'poster 8'
   },
   {
    image: 'assets/S3-POSTER/S3-P09.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P09.jpg',
    alt: 'alt of image',
    title: 'poster 9'
   },
   {
    image: 'assets/S3-POSTER/S3-P10.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P10.jpg',
    alt: 'alt of image',
    title: 'poster 10'
   },
   {
    image: 'assets/S3-POSTER/S3-P11.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P11.jpg',
    alt: 'alt of image',
    title: 'poster 11'

   },
   {
    image: 'assets/S3-POSTER/S3-P12.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P12.jpg',
    alt: 'alt of image',
    title: 'poster 12'
   },
   {
    image: 'assets/S3-POSTER/S3-P13.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P13.jpg',
    alt: 'alt of image',
    title: 'poster 13'
   },
   {
    image: 'assets/S3-POSTER/S3-P14.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P14.jpg',
    alt: 'alt of image',
    title: 'poster 14'
   },
   {
    image: 'assets/S3-POSTER/S3-P15.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P15.jpg',
    alt: 'alt of image',
    title: 'poster 15'
   },
   {
    image: 'assets/S3-POSTER/S3-P16.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P16.jpg',
    alt: 'alt of image',
    title: 'poster 16'
   },
   {
    image: 'assets/S3-POSTER/S3-P17.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P17.jpg',
    alt: 'alt of image',
    title: 'poster 17'
   },
   {
    image: 'assets/S3-POSTER/S3-P18.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P18.jpg',
    alt: 'alt of image',
    title: 'poster 18'
   },
   {
    image: 'assets/S3-POSTER/S3-P19.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P19.jpg',
    alt: 'alt of image',
    title: 'poster 19'
   },
   {
    image: 'assets/S3-POSTER/S3-P20.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P20.jpg',
    alt: 'alt of image',
    title: 'poster 20'
   },
    {
    image: 'assets/S3-POSTER/S3-P21.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P21.jpg',
    alt: 'alt of image',
    title: 'poster 21'

   },
   {
    image: 'assets/S3-POSTER/S3-P22.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P22.jpg',
    alt: 'alt of image',
    title: 'poster 22'
   },
   {
    image: 'assets/S3-POSTER/S3-P23.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P23.jpg',
    alt: 'alt of image',
    title: 'poster 23'
   },
   {
    image: 'assets/S3-POSTER/S3-P24.jpg',
    thumbImage: 'assets/S3-POSTER/S3-P24.jpg',
    alt: 'alt of image',
    title: 'poster 24'
   }
];

mostarInfo(event){
   this.dataService.poster = event;
   this.dataService.sala1 = false;
  this.dataService.sala2 = false;
  this.dataService.sala3 = true;
  this.dataService.sala4 = false;
  this.ngbModal.open(VentanaModalComponent);
}
}
