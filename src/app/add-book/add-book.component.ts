import { Component, OnInit, Input } from '@angular/core';
import { author } from '../author/author';
import { publisher } from '../publisher/publisher';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { AuthorService } from '../services/author.service';
import { PublisherService } from '../services/publisher.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


  @Input() bookdetail = {bookname: '', author: author, publisher: publisher,publishdate: new Date(), desc: ''}

  authors: author;
  publishers: publisher;


  constructor(private bookService: BookService, public router: Router, 
    private authorService: AuthorService, private publisherService: PublisherService) { }

  ngOnInit() {
    this.getAuthors();
    this.getPublishers();
  }
  getPublishers(): void {
    this.publisherService.getPublishers()
        .subscribe(publishers => this.publishers = publishers);
  }

  getAuthors(): void {
    this.authorService.getAuthors()
        .subscribe(authors => this.authors = authors);
  }
  
  addBook(data) {
    this.bookService.addBook(this.bookdetail).subscribe((data: {}) => {
      this.router.navigate(['/books/'])
    })
  }

}