import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-principal',
  templateUrl: './body-principal.component.html',
  styleUrls: ['./body-principal.component.css']
})
export class BodyPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irSala1(): void{
    this.router.navigate(['/sala1']);
  }

  irSala2(): void{
    this.router.navigate(['/sala2']);
  }

  irSala3(): void{
    this.router.navigate(['/sala3']);
  }

  irSala4(): void{
    this.router.navigate(['/sala4']);
  }

}
