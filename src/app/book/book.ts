import { author } from '../author/author';
import { publisher } from '../publisher/publisher';

export class book {
    _id: any;
    bookname: string;
    author: author;
    publisher: publisher;
    publishdate: Date;
    desc: string;
  }