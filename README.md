# Fixly AI 🔧

> A smart platform connecting clients with trusted craftsmen and service professionals.

---

## 📌 Overview

**Fixly AI** is a web application that bridges the gap between clients and skilled workers across various trades — including plumbers, electricians, carpenters, painters, and more. The platform offers a seamless experience for booking, managing, and reviewing professional services.

---

## 🎨 Figma Design

View the full UI/UX design on Figma:
👉 [Fixly AI — Figma Design](https://www.figma.com/design/8TXvDcVlszS4y3bRKXKcFt/Fixly-AI?node-id=0-1&p=f&t=R0cEoA4rwM4plUXy-0)

---

## 🚀 Features

- 🔐 **Authentication** — Login, Register, and Forgot Password with a clean RTL Arabic UI
- 🏠 **Landing Page** — Hero section, Services, How It Works, Workers, Reviews, and Contact Us
- 👷 **Workers Section** — Browse and filter skilled professionals by category
- ⭐ **Reviews System** — Client feedback and ratings for each worker
- 📱 **Responsive Design** — Fully responsive across desktop and mobile
- 🌙 **RTL Support** — Full Arabic right-to-left layout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 17+ (Standalone Components) |
| Styling | Tailwind CSS |
| Font | Tajawal (Google Fonts) |
| Alerts | SweetAlert2 |
| Routing | Angular Router (Lazy Loading) |
| State | Angular Signals |

---

## 🎨 Design System

```css
--primary:    #0E3B3F   /* Dark Teal */
--secondary:  #2BD17C   /* Green */
--hover:      #26BF72   /* Green Hover */
--text:       #8FA5A3   /* Muted */
--background: #FFFFFF   /* White */
--warning:    #F59E0B   /* Amber */
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── guards/
│   │       └── auth-guard.ts
│   ├── features/
│   │   ├── Auth/
│   │   │   ├── auth.module.ts
│   │   │   ├── auth-layout/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgot-password/
│   │   └── landing/
│   │       ├── landing.ts
│   │       ├── hero-section/
│   │       ├── services-section/
│   │       ├── how-it-works/
│   │       ├── workers-section/
│   │       ├── reviews-section/
│   │       └── contact-us/
│   └── component/
│       └── shared/
│           └── nav-bar/
├── assets/
│   └── images/
└── styles.css
```

---

## ⚙️ Getting Started

### Prerequisites
- PHP (Laravel 12)
- Angular CLI 17+

## 🗺️ Routes

| Path | Page |
|---|---|
| `/` | Landing Page |
| `/auth/login` | Login |
| `/auth/register` | Register |
| `/auth/forgot-password` | Forgot Password |

---

## 👥 Contributors

| Name | Role |
| Mai Mohamed | UI/UX Designer |
|Naira Mohamed|Backend Developer|
| Rawan Bahaa | Frontend Developer |
| Reham Ahmed  | Frontend Developer |

--

<p align="center">Built with ❤️ for skilled workers everywhere</p>