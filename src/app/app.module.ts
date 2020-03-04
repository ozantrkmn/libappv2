import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from './material-design/material-design.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublisherComponent } from './publisher/publisher.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';
import { EditdialogComponent } from './editdialog/editdialog.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    PublisherComponent,
    AddPublisherComponent,
    AddAuthorComponent,
    AddBookComponent,
    HomeComponent,
    EditdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditdialogComponent],
})
export class AppModule { }
