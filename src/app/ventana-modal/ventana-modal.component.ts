import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventana-modal',
  templateUrl: './ventana-modal.component.html',
  styleUrls: ['./ventana-modal.component.css']
})
export class VentanaModalComponent implements OnInit {
  imagen:string;
  pdf:string;
  nombreDescarga:string;
  posters01 = [{imagen:'assets/S1-POSTER/S1-P01.jpg', pdf:"assets/S1-POSTER/S1-P01.pdf", nombreDescarga:"S1-P01.pdf"},
  {imagen:'assets/S1-POSTER/S1-P02.jpg', pdf:"assets/S1-POSTER/S1-P02.pdf", nombreDescarga:"S1-P02.pdf"},
  {imagen:'assets/S1-POSTER/S1-P03.jpg', pdf:"assets/S1-POSTER/S1-P03.pdf", nombreDescarga:"S1-P03.pdf"},
  {imagen:'assets/S1-POSTER/S1-P04-REVISAR.png', pdf:"assets/S1-POSTER/S1-P04-REVISAR.pdf", nombreDescarga:"S1-P04.pdf"},
  {imagen:'assets/S1-POSTER/S1-P05.jpg', pdf:"assets/S1-POSTER/S1-P05.pdf", nombreDescarga:"S1-P05.pdf"},
  {imagen:'assets/S1-POSTER/S1-P06.jpg', pdf:"assets/S1-POSTER/S1-P06.pdf", nombreDescarga:"S1-P06.pdf"},
  {imagen:'assets/S1-POSTER/S1-P07.png', pdf:"assets/S1-POSTER/S1-P07.pdf", nombreDescarga:"S1-P07.pdf"},
  {imagen:'assets/S1-POSTER/S1-P08.jpg', pdf:"assets/S1-POSTER/S1-P08.pdf", nombreDescarga:"S1-P08.pdf"},
  {imagen:'assets/S1-POSTER/S1-P09.png', pdf:"assets/S1-POSTER/S1-P09.pdf", nombreDescarga:"S1-P09.pdf"},
  {imagen:'assets/S1-POSTER/S1-P010.png', pdf:"assets/S1-POSTER/S1-P010.pdf", nombreDescarga:"S1-P10.pdf"},
  {imagen:'assets/S1-POSTER/S1-P011.jpg', pdf:"assets/S1-POSTER/S1-P011.pdf", nombreDescarga:"S1-P11.pdf"},
  {imagen:'assets/S1-POSTER/S1-P012.jpg', pdf:"assets/S1-POSTER/S1-P012.pdf", nombreDescarga:"S1-P12.pdf"},
  {imagen:'assets/S1-POSTER/S1-P013.jpg', pdf:"assets/S1-POSTER/S1-P013.pdf", nombreDescarga:"S1-P13.pdf"},
  {imagen:'assets/S1-POSTER/S1-P014-REVISAR.jpg', pdf:"assets/S1-POSTER/S1-P014-REVISAR.pdf", nombreDescarga:"S1-P14.pdf"},
  {imagen:'assets/S1-POSTER/S1-P015-REVISAR.png', pdf:"assets/S1-POSTER/S1-P015-REVISAR.pdf", nombreDescarga:"S1-P15.pdf"},
  {imagen:'assets/S1-POSTER/S1-P016-REVISAR.jpg', pdf:"assets/S1-POSTER/S1-P016-REVISAR.pdf", nombreDescarga:"S1-P16.pdf"},
  {imagen:'assets/S1-POSTER/S1-P017.jpg', pdf:"assets/S1-POSTER/S1-P017.pdf", nombreDescarga:"S1-P17.pdf"},
  {imagen:'assets/S1-POSTER/S1-P018.JPG', pdf:"assets/S1-POSTER/S1-P018.pdf", nombreDescarga:"S1-P18.pdf"},
  {imagen:'assets/S1-POSTER/S1-P019.jpg', pdf:"assets/S1-POSTER/S1-P019.pdf", nombreDescarga:"S1-P19.pdf"},
  {imagen:'assets/S1-POSTER/S1-P020.jpg', pdf:"assets/S1-POSTER/S1-P020.pdf", nombreDescarga:"S1-P20.pdf"},
  {imagen:'assets/S1-POSTER/S1-P021.png', pdf:"assets/S1-POSTER/S1-P021.pdf", nombreDescarga:"S1-P21.pdf"},
  {imagen:'assets/S1-POSTER/S1-P022.jpg', pdf:"assets/S1-POSTER/S1-P022.pdf", nombreDescarga:"S1-P22.pdf"}, 
  {imagen:'assets/S1-POSTER/S1-P023.png', pdf:"assets/S1-POSTER/S1-P023.pdf", nombreDescarga:"S1-P23.pdf"},
  {imagen:'assets/S1-POSTER/S1-P024.png', pdf:"assets/S1-POSTER/S1-P024.pdf", nombreDescarga:"S1-P24.pdf"},
  {imagen:'assets/S1-POSTER/S1-P025.png', pdf:"assets/S1-POSTER/S1-P025.pdf", nombreDescarga:"S1-P25.pdf"}
  ];

  posters02 = [{imagen:'assets/S2-POSTER/S2-P01.jpg', pdf:"assets/S2-POSTER/S2-P01.pdf", nombreDescarga:"S2-P01.pdf"},
  {imagen:'assets/S2-POSTER/S2-P02.png', pdf:"assets/S2-POSTER/S2-P02.pdf", nombreDescarga:"S2-P02.pdf"},
  {imagen:'assets/S2-POSTER/S2-P03.jpg', pdf:"assets/S2-POSTER/S2-P03.pdf", nombreDescarga:"S2-P03.pdf"},
  {imagen:'assets/S2-POSTER/S2-P04.png', pdf:"assets/S2-POSTER/S2-P04.pdf", nombreDescarga:"S2-P04.pdf"},
  {imagen:'assets/S2-POSTER/S2-P05.jpg', pdf:"assets/S2-POSTER/S2-P05.pdf", nombreDescarga:"S2-P05.pdf"},
  {imagen:'assets/S2-POSTER/S2-P06.jpg', pdf:"assets/S2-POSTER/S2-P06.pdf", nombreDescarga:"S2-P06.pdf"},
  {imagen:'assets/S2-POSTER/S2-P07.png', pdf:"assets/S2-POSTER/S2-P07.pdf", nombreDescarga:"S2-P07.pdf"},
  {imagen:'assets/S2-POSTER/S2-P08-REVISAR HORIZONTAL.jpg', pdf:"assets/S2-POSTER/S2-P08-REVISAR HORIZONTAL", nombreDescarga:"S2-P08.pdf"},
  {imagen:'assets/S2-POSTER/S2-P09.jpg', pdf:"assets/S2-POSTER/S2-P09.pdf", nombreDescarga:"S2-P09.pdf"},
  {imagen:'assets/S2-POSTER/S2-P010.jpg', pdf:"assets/S2-POSTER/S2-P010.pdf", nombreDescarga:"S2-P10.pdf"},
  {imagen:'assets/S2-POSTER/S2-P011-HORIZONTAL.png', pdf:"assets/S2-POSTER/S2-P011-HORIZONTAL.pdf", nombreDescarga:"S2-P11.pdf"},
  {imagen:'assets/S2-POSTER/S2-P012.jpg', pdf:"assets/S2-POSTER/S2-P012.pdf", nombreDescarga:"S2-P12.pdf"},
  {imagen:'assets/S2-POSTER/S2-P013.jpg', pdf:"assets/S2-POSTER/S2-P013.pdf", nombreDescarga:"S2-P13.pdf"},
  {imagen:'assets/S2-POSTER/S2-P014.jpg', pdf:"assets/S2-POSTER/S2-P014.pdf", nombreDescarga:"S2-P14.pdf"},
  {imagen:'assets/S2-POSTER/S2-P015.jpg', pdf:"assets/S2-POSTER/S2-P015.pdf", nombreDescarga:"S2-P15.pdf"},
  {imagen:'assets/S2-POSTER/S2-P016.png', pdf:"assets/S2-POSTER/S2-P016.pdf", nombreDescarga:"S2-P16.pdf"},
  {imagen:'assets/S2-POSTER/S2-P017.jpg', pdf:"assets/S2-POSTER/S2-P017.pdf", nombreDescarga:"S2-P17.pdf"},
  {imagen:'assets/S2-POSTER/S2-P018.jpg', pdf:"assets/S2-POSTER/S2-P018.pdf", nombreDescarga:"S2-P18.pdf"},
  {imagen:'assets/S2-POSTER/S2-P19.jpg', pdf:"assets/S2-POSTER/S2-P19.pdf", nombreDescarga:"S2-P19.pdf"}
  ];

    posters03 = [{imagen:'assets/S3-POSTER/S3-P01.jpg', pdf:"assets/S3-POSTER/S3-P01.pdf", nombreDescarga:"S3-P01.pdf"},
  {imagen:'assets/S3-POSTER/S3-P02.jpg', pdf:"assets/S3-POSTER/S3-P02.pdf", nombreDescarga:"S3-P02.pdf"},
  {imagen:'assets/S3-POSTER/S3-P03.jpg', pdf:"assets/S3-POSTER/S3-P03.pdf", nombreDescarga:"S3-P03.pdf"},
  {imagen:'assets/S3-POSTER/S3-P04.jpg', pdf:"assets/S3-POSTER/S3-P04.pdf", nombreDescarga:"S3-P04.pdf"},
  {imagen:'assets/S3-POSTER/S3-P05.jpg', pdf:"assets/S3-POSTER/S3-P05.pdf", nombreDescarga:"S3-P05.pdf"},
  {imagen:'assets/S3-POSTER/S3-P06.jpg', pdf:"assets/S3-POSTER/S3-P06.pdf", nombreDescarga:"S3-P06.pdf"},
  {imagen:'assets/S3-POSTER/S3-P07.jpg', pdf:"assets/S3-POSTER/S3-P07.pdf", nombreDescarga:"S3-P07.pdf"},
  {imagen:'assets/S3-POSTER/S3-P08.jpg', pdf:"assets/S3-POSTER/S3-P08.pdf", nombreDescarga:"S3-P08.pdf"},
  {imagen:'assets/S3-POSTER/S3-P09.jpg', pdf:"assets/S3-POSTER/S3-P09.pdf", nombreDescarga:"S3-P09.pdf"},
  {imagen:'assets/S3-POSTER/S3-P10.jpg', pdf:"assets/S3-POSTER/S3-P10.pdf", nombreDescarga:"S3-P10.pdf"},
  {imagen:'assets/S3-POSTER/S3-P11.jpg', pdf:"assets/S3-POSTER/S3-P11.pdf", nombreDescarga:"S3-P11.pdf"},
  {imagen:'assets/S3-POSTER/S3-P12.jpg', pdf:"assets/S3-POSTER/S3-P12.pdf", nombreDescarga:"S3-P12.pdf"},
  {imagen:'assets/S3-POSTER/S3-P13.jpg', pdf:"assets/S3-POSTER/S3-P13.pdf", nombreDescarga:"S3-P13.pdf"},
  {imagen:'assets/S3-POSTER/S3-P14.jpg', pdf:"assets/S3-POSTER/S3-P14.pdf", nombreDescarga:"S3-P14.pdf"},
  {imagen:'assets/S3-POSTER/S3-P15.jpg', pdf:"assets/S3-POSTER/S3-P15.pdf", nombreDescarga:"S3-P15.pdf"},
  {imagen:'assets/S3-POSTER/S3-P16.jpg', pdf:"assets/S3-POSTER/S3-P16.pdf", nombreDescarga:"S3-P16.pdf"},
  {imagen:'assets/S3-POSTER/S3-P17.jpg', pdf:"assets/S3-POSTER/S3-P17.pdf", nombreDescarga:"S3-P17.pdf"},
  {imagen:'assets/S3-POSTER/S3-P18.jpg', pdf:"assets/S3-POSTER/S3-P18.pdf", nombreDescarga:"S3-P18.pdf"},
  {imagen:'assets/S3-POSTER/S3-P19.jpg', pdf:"assets/S3-POSTER/S3-P19.pdf", nombreDescarga:"S3-P19.pdf"},
  {imagen:'assets/S3-POSTER/S3-P20.jpg', pdf:"assets/S3-POSTER/S3-P20.pdf", nombreDescarga:"S3-P20.pdf"},
  {imagen:'assets/S3-POSTER/S3-P21.jpg', pdf:"assets/S3-POSTER/S3-P21.pdf", nombreDescarga:"S3-P21.pdf"},
  {imagen:'assets/S3-POSTER/S3-P22.jpg', pdf:"assets/S3-POSTER/S3-P22.pdf", nombreDescarga:"S3-P22.pdf"},
  {imagen:'assets/S3-POSTER/S3-P23.jpg', pdf:"assets/S3-POSTER/S3-P23.pdf", nombreDescarga:"S3-P23.pdf"},
  {imagen:'assets/S3-POSTER/S3-P24.jpg', pdf:"assets/S3-POSTER/S3-P24.pdf", nombreDescarga:"S3-P24.pdf"}
  ];

  posters04 = [{imagen:'assets/S4-POSTER/S4-P01.jpeg', pdf:"assets/S4-POSTER/S4-P01.pdf", nombreDescarga:"S4-P01.pdf"},
  {imagen:'assets/S4-POSTER/S4P02.jpg', pdf:"assets/S4-POSTER/S4-P02.pdf", nombreDescarga:"S4-P02.pdf"},
  {imagen:'assets/S4-POSTER/S4-P03.JPG', pdf:"assets/S4-POSTER/S4-P03.pdf", nombreDescarga:"S4-P03.pdf"}
  ];
  constructor(private dataservice: DataserviceService) { }

  ngOnInit(): void {
    if (this.dataservice.sala1) {
      this.imagen=this.posters01[this.dataservice.poster].imagen;
      this.pdf=this.posters01[this.dataservice.poster].pdf;
      this.nombreDescarga=this.posters01[this.dataservice.poster].nombreDescarga;
    }
    else if(this.dataservice.sala2){
      this.imagen=this.posters02[this.dataservice.poster].imagen;
      this.pdf=this.posters02[this.dataservice.poster].pdf;
      this.nombreDescarga=this.posters02[this.dataservice.poster].nombreDescarga;
    }
     else if(this.dataservice.sala3){
       this.imagen=this.posters03[this.dataservice.poster].imagen;
      this.pdf=this.posters03[this.dataservice.poster].pdf;
      this.nombreDescarga=this.posters03[this.dataservice.poster].nombreDescarga;
     }
     else{
      this.imagen=this.posters04[this.dataservice.poster].imagen;
      this.pdf=this.posters04[this.dataservice.poster].pdf;
      this.nombreDescarga=this.posters04[this.dataservice.poster].nombreDescarga;
     }
  }

}
