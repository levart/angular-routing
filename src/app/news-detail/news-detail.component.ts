import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  news: any;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id']
    console.log(this.route)
    this.route.params.subscribe(params => {
      console.log(params)
      const id = params['id']
      this.news = this.newsService.news.find(news => news.id === +id)
    })


    const queryParams = this.route.snapshot.queryParams
    console.log(queryParams)
    this.route.queryParams.subscribe(params => {
      console.log(params)
    })

    const fragment = this.route.snapshot.fragment
    console.log(fragment)
    this.route.fragment.subscribe(params => {
      console.log(params)
    })
  }

}
