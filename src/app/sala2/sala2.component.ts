import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VentanaModalComponent } from '../ventana-modal/ventana-modal.component';


@Component({
  selector: 'app-sala2',
  templateUrl: './sala2.component.html',
  styleUrls: ['./sala2.component.css']
})
export class Sala2Component implements OnInit {

  constructor(private router: Router, private ngbModal: NgbModal, private dataService:DataserviceService) { }

  ngOnInit(): void {
  }

  irInicio(): void{
    this.router.navigate(['']);
  }

  imageObject: Array<object> = [{
    image: 'assets/S2-POSTER/S2-P01.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P01.jpg',
    alt: 'alt of image',
    title: 'poster 1'

   },
   {
    image: 'assets/S2-POSTER/S2-P02.png',
    thumbImage: 'assets/S2-POSTER/S2-P02.png',
    alt: 'alt of image',
    title: 'poster 2'
   },
   {
    image: 'assets/S2-POSTER/S2-P03.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P03.jpg',
    alt: 'alt of image',
    title: 'poster 3'
   },
   {
    image: 'assets/S2-POSTER/S2-P04.png',
    thumbImage: 'assets/S2-POSTER/S2-P04.png',
    alt: 'alt of image',
    title: 'poster 4'
   },
   {
    image: 'assets/S2-POSTER/S2-P05.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P05.jpg',
    alt: 'alt of image',
    title: 'poster 5'
   },
   {
    image: 'assets/S2-POSTER/S2-P06.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P06.jpg',
    alt: 'alt of image',
    title: 'poster 6'
   },
   {
    image: 'assets/S2-POSTER/S2-P07.png',
    thumbImage: 'assets/S2-POSTER/S2-P07.png',
    alt: 'alt of image',
    title: 'poster 7'
   },
   {
    image: 'assets/S2-POSTER/S2-P08-REVISAR HORIZONTAL.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P08-REVISAR HORIZONTAL.jpg',
    alt: 'alt of image',
    title: 'poster 8'
   },
   {
    image: 'assets/S2-POSTER/S2-P09.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P09.jpg',
    alt: 'alt of image',
    title: 'poster 9'
   },
   {
    image: 'assets/S2-POSTER/S2-P010.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P010.jpg',
    alt: 'alt of image',
    title: 'poster 10'
   }
   ,
   {
    image: 'assets/S2-POSTER/S2-P011-HORIZONTAL.png',
    thumbImage: 'assets/S2-POSTER/S2-P011-HORIZONTAL.png',
    alt: 'alt of image',
    title: 'poster 11'
   }
   ,
   {
    image: 'assets/S2-POSTER/S2-P012.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P012.jpg',
    alt: 'alt of image',
    title: 'poster 12'
   }
   ,
   {
    image: 'assets/S2-POSTER/S2-P013.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P013.jpg',
    alt: 'alt of image',
    title: 'poster 13'
   }
   ,
   {
    image: 'assets/S2-POSTER/S2-P014.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P014.jpg',
    alt: 'alt of image',
    title: 'poster 14'
   }
   ,
   {
    image: 'assets/S2-POSTER/S2-P015.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P015.jpg',
    alt: 'alt of image',
    title: 'poster 15'
   }
   ,
   {
    image: 'assets/S2-POSTER/S2-P016.png',
    thumbImage: 'assets/S2-POSTER/S2-P016.png',
    alt: 'alt of image',
    title: 'poster 16'
   }
   ,
   {
    image: 'assets/S2-POSTER/S2-P017.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P017.jpg',
    alt: 'alt of image',
    title: 'poster 17'
   }
   ,
   {
    image: 'assets/S2-POSTER/S2-P018.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P018.jpg',
    alt: 'alt of image',
    title: 'poster 18'
   },
   {
    image: 'assets/S2-POSTER/S2-P19.jpg',
    thumbImage: 'assets/S2-POSTER/S2-P19.jpg',
    alt: 'alt of image',
    title: 'poster 19'
   }
];


mostarInfo(event){
  this.dataService.poster = event;
  this.dataService.sala1 = false;
  this.dataService.sala2 = true;
  this.dataService.sala3 = false;
  this.dataService.sala4 = false;
  this.ngbModal.open(VentanaModalComponent);

}
}

