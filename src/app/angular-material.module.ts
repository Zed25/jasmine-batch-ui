import { NgModule } from '@angular/core';
import {MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule
  ]
})
export class AngularMaterialModule { }
