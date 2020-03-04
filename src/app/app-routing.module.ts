import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { PublisherComponent } from './publisher/publisher.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path:'books', component: BookComponent},
{path:'authors', component: AuthorComponent},
{path:'publishers', component: PublisherComponent},
{path:'add-publisher', component: AddPublisherComponent},
{path:'add-author', component: AddAuthorComponent},
{path:'add-book', component: AddBookComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
