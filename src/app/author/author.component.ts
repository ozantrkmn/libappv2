import { Component, OnInit } from '@angular/core';
import { author } from './author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: author;


  constructor(private authorService: AuthorService) { }


  ngOnInit() {
    this.getAuthors();


  }
  getAuthors(): void {
    this.authorService.getAuthors()
        .subscribe(authors => this.authors = authors);
  }

  deleteAuthor(id) {
    if (window.confirm('Are you sure, you want to delete?')){
    this.authorService.deleteAuthor(id)
    .subscribe(() =>{
      this.getAuthors();
       });
    }
    }

}
