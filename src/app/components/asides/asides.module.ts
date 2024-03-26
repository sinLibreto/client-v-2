import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetGruposComponent } from './widget-grupos/widget-grupos.component';
import { WidgetRecomendacionesComponent } from './widget-recomendaciones/widget-recomendaciones.component';
import { WidgetPublicidadComponent } from './widget-publicidad/widget-publicidad.component';



@NgModule({
  declarations: [
    WidgetGruposComponent,
    WidgetRecomendacionesComponent,
    WidgetPublicidadComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WidgetGruposComponent,
    WidgetRecomendacionesComponent,
    WidgetPublicidadComponent
  ]
})
export class AsidesModule { }
