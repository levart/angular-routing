import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news = [
    {
      id: 1,
      title: 'News 1',
      author: 'Author 1'
    },
    {
      id: 2,
      title: 'News 2',
      author: 'Author 2'
    },
    {
      id: 3,
      title: 'News 3',
      author: 'Author 3'
    }
  ]
  constructor() { }
}
