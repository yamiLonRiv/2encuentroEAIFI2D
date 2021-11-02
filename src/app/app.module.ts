import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyPrincipalComponent } from './body-principal/body-principal.component';
import { Sala1Component } from './sala1/sala1.component';
import { Sala2Component } from './sala2/sala2.component';
import { Sala3Component } from './sala3/sala3.component';
import { Sala4Component } from './sala4/sala4.component';
import { VentanaModalComponent } from './ventana-modal/ventana-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstudianteComponent } from './estudiante/estudiante.component';

const routes: Routes = [
  { path: '', component: BodyPrincipalComponent },
  { path: 'sala1' , component: Sala1Component  },
  { path: 'sala2' , component: Sala2Component  },
  { path: 'sala3' , component: Sala3Component  },
  { path: 'sala4' , component: Sala4Component  }

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyPrincipalComponent,
    Sala1Component,
    Sala2Component,
    Sala3Component,
    Sala4Component,
    VentanaModalComponent,
    EstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgImageSliderModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
