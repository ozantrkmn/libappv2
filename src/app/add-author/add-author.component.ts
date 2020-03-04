import { Component, OnInit, Input } from '@angular/core';
import { PublisherService } from '../services/publisher.service';
import { Router } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { publisher } from '../publisher/publisher';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  @Input() authordetail = {authorName: '', books: []}

  constructor(private authorService: AuthorService, public router: Router, private publisherService: PublisherService) { }

  ngOnInit() {
  }

  addAuthor(data: publisher) {
    this.authorService.addAuthor(this.authordetail).subscribe((data: {}) => {
      this.router.navigate(['/authors/'])
    })
  }




}
