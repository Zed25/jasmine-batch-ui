import { NgModule } from '@angular/core';
import {MatDividerModule, MatListModule, MatSidenavModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }
