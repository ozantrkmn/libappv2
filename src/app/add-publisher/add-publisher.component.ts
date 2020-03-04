import { Component, OnInit, Input } from '@angular/core';
import { PublisherService } from '../services/publisher.service';
import { Router } from '@angular/router';
import { book } from '../book/book';


@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit  {
  


  @Input() publisherdetail = {publishername: '', books: []}


  constructor(private publisherService: PublisherService, public router: Router) { }

  ngOnInit() {
  }

  addPublisher(data) {
    this.publisherService.addPublisher(this.publisherdetail).subscribe((data: {}) => {
      this.router.navigate(['/publishers/'])
    })
  }

}
