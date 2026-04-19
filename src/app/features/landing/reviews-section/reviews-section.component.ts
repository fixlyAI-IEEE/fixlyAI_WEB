import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../../core/models/model';

@Component({
  selector: 'app-reviews-section',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.css']
})
export class ReviewsSectionComponent  {

  reviews: Review[] = [
    { id: 1, name: 'أحمد محمد', image: '/images/boy.jpg', text: 'التجربة كانت سهلة جداً! سألت عن المشكلة والمساعد فهمني بسرعة ووصلني لفني كويس جداً', rating: 5 },
    { id: 2, name: 'أحمد محمد', image: '/images/boy.jpg', text: 'التجربة كانت سهلة جداً! سألت عن المشكلة والمساعد فهمني بسرعة ووصلني لفني كويس جداً', rating: 4 },
    { id: 3, name: 'أحمد محمد', image: '/images/boy.jpg', text: 'التجربة كانت سهلة جداً! سألت عن المشكلة والمساعد فهمني بسرعة ووصلني لفني كويس جداً', rating: 5 },
    { id: 4, name: 'أحمد محمد', image: '/images/boy.jpg', text: 'التجربة كانت سهلة جداً! سألت عن المشكلة والمساعد فهمني بسرعة ووصلني لفني كويس جداً', rating: 4 },
    { id: 5, name: 'أحمد محمد', image: '/images/boy.jpg', text: 'التجربة كانت سهلة جداً! سألت عن المشكلة والمساعد فهمني بسرعة ووصلني لفني كويس جداً', rating: 5 },
    { id: 6, name: 'أحمد محمد', image: '/images/boy.jpg', text: 'التجربة كانت سهلة جداً! سألت عن المشكلة والمساعد فهمني بسرعة ووصلني لفني كويس جداً', rating: 4 },
  ];

  visibleReviews: Review[] = [];
  currentPage = 0;
  itemsPerPage = 3;
  totalPages = 0;
  dots: number[] = [];

  ngOnInit() {
    this.totalPages = Math.ceil(this.reviews.length / this.itemsPerPage);
    this.dots = Array(this.totalPages).fill(0);
    this.updateVisible();
  }

  updateVisible() {
    const start = this.currentPage * this.itemsPerPage;
    this.visibleReviews = this.reviews.slice(start, start + this.itemsPerPage);
  }

  next() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateVisible();
    }
  }

  prev() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVisible();
    }
  }

  goTo(index: number) {
    this.currentPage = index;
    this.updateVisible();
  }
  getStars(rating: number): boolean[] {
  return Array(5).fill(0).map((_, i) => i < rating);
}
}


