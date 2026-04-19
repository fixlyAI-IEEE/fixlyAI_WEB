import { Component, HostListener, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit {
  isOpen = signal(false);
  isScrolled = signal(false);
  isLoggedIn = signal(false);
  userName = signal('');

  ngOnInit() {
    const token = localStorage.getItem('token');
    const userRaw = localStorage.getItem('current_user');
    
    if (token) {
      this.isLoggedIn.set(true);
    }
    
    if (userRaw) {
      const user = JSON.parse(userRaw);
      this.userName.set(user?.data?.user?.name || '');
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('current_user');
    this.isLoggedIn.set(false);
    window.location.href = '/';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}