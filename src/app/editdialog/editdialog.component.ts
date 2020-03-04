import {Component, Inject, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { publisher } from '../publisher/publisher';
import { author } from '../author/author';
import { book } from '../book/book';
import { AuthorService } from '../services/author.service';
import { PublisherService } from '../services/publisher.service';
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent implements OnInit {


  authors: author;
  publishers: publisher;
  books: book;
  id = this.dialogRef.id;
  bookid: any;

  @Input() bookdetail = {bookname: '', author: author, publisher: publisher,publishdate: new Date(), desc: ''}

  constructor(private dialogRef: MatDialogRef<EditdialogComponent>,
    private bookService: BookService, public router: Router,
    public actRoute: ActivatedRoute, 
    private authorService: AuthorService, private publisherService: PublisherService)
     { 

    }

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

  getBooks(): void {
    this.bookService.getBooks()
        .subscribe(books => this.books = books);
  }

  
updateBook() {
  this.bookService.updateBook(this.id, this.bookdetail).subscribe(() =>{
    this.getBooks();
     });
  }
  
  save() {
    this.updateBook();
    
    this.dialogRef.close();
}

close() {
    this.dialogRef.close();
}

}


