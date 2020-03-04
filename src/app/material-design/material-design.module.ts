import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, 
  MatCheckboxModule , MatButtonModule, MatFormFieldModule,
  MatDatepickerModule, MatRadioModule, MatSelectModule, MatInputModule, MatNativeDateModule
,MatDialogModule} from  '@angular/material';
import { FormsModule,  ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class MaterialDesignModule { }
