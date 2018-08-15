import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatListModule, MatTableModule, MatPaginatorModule, MatChipsModule, MatCardModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatTableModule
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
  ],
  declarations: []
})
export class MaterialModule { }
