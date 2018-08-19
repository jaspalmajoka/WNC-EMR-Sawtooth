import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatListModule, MatTableModule, MatPaginatorModule, MatChipsModule, MatCardModule, MatFormFieldModule, MatIconModule, MatSliderModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatSliderModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSliderModule
  ],
  declarations: []
})
export class MaterialModule { }
