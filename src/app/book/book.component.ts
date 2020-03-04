import { Component, OnInit } from '@angular/core';
import { book } from './book';
import { BookService} from '../services/book.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditdialogComponent } from '../editdialog/editdialog.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: book;

  constructor(private bookService: BookService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getBooks();
  }
  
  getBooks(): void {
    this.bookService.getBooks()
        .subscribe(books => this.books = books);
  }

  deleteBook(id) {
    if (window.confirm('Are you sure, you want to delete?')){
    this.bookService.deleteBook(id)
    .subscribe(() =>{
      this.getBooks();
       });
    }
    }

    editBook(id) {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;


      const dialogRef = this.dialog.open(EditdialogComponent,
          dialogConfig);

        dialogRef.componentInstance.id = id;

      dialogRef.afterClosed().subscribe(()=>{
        this.getBooks();
         });

  }

      
    

}
