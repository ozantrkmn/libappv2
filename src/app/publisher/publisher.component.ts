import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../services/publisher.service';
import { publisher } from './publisher';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  publishers: publisher;

  constructor(private publisherService: PublisherService) { }

  ngOnInit() {
    this.getPublishers();
  }

  getPublishers(): void {
    this.publisherService.getPublishers()
        .subscribe(publishers => this.publishers = publishers);
  }


  deletePublisher(id) {
    if (window.confirm('Are you sure, you want to delete?')){
    this.publisherService.deletePublisher(id)
    .subscribe(() =>{
      this.getPublishers();
       });
    }
    }

}
