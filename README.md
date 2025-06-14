# 🍽️ Kitchen MHK - Responsive Homepage

This project is a **pixel-perfect**, **responsive** homepage built with **React**, **TypeScript**, and **Vite**, based on a design provided in Adobe XD. It showcases custom UI implementation with modern web development practices.

> [🔗 View the Adobe XD Design](https://xd.adobe.com/view/cffd8229-5018-4e51-82f0-87f5b18ef0fc-9aae/)

---

## 🚀 Live Demo

> [🔗 View Live Site](https://kitchen-mhk.netlify.app/)  


---

## 🛠 Tech Stack

- ⚛️ React 19
- 🧠 TypeScript
- ⚡ Vite
- 🎨 SCSS Modules
- 📱 Responsive layout
- 🧩 Custom components
- ✅ Cross-browser compatible (modern browsers)

---

## 📁 Project Structure

```
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── logo.svg
├── README.md
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── Gallery-2@2x.png
│   │   ├── Gallery-3@2x.png
│   │   ├── images
│   │   │   ├── Bisect.png
│   │   │   ├── Gallery-1.png
│   │   │   ├── Gallery-2.png
│   │   │   ├── Gallery-3.png
│   │   │   ├── Gallery-4.png
│   │   │   ├── Hero.png
│   │   │   └── shopping-cart.png
│   │   └── svg
│   │       ├── Left-Chevron.svg
│   │       ├── logo.svg
│   │       ├── menu.svg
│   │       ├── Right-Chevron.svg
│   │       └── x.svg
│   ├── components
│   │   ├── carousel
│   │   │   ├── carousel.scss
│   │   │   └── carousel.tsx
│   │   ├── footer
│   │   │   ├── footer.scss
│   │   │   └── footer.tsx
│   │   ├── header
│   │   │   ├── header.scss
│   │   │   └── header.tsx
│   │   ├── icons
│   │   │   ├── Cart.tsx
│   │   │   ├── Facebook.tsx
│   │   │   ├── Instagram.tsx
│   │   │   └── twitter.tsx
│   │   └── menuModal
│   │       ├── menuModal.scss
│   │       └── menuModal.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   └── Home
│   │       ├── _components
│   │       │   ├── bisect
│   │       │   │   ├── bisect.scss
│   │       │   │   └── bisect.tsx
│   │       │   ├── gallery
│   │       │   │   ├── gallery.scss
│   │       │   │   └── gallery.tsx
│   │       │   ├── heroCarousel
│   │       │   │   └── heroCarousel.tsx
│   │       │   └── testimonial
│   │       │       ├── testimonial.scss
│   │       │       └── testimonial.tsx
│   │       └── home.tsx
│   ├── styles
│   │   ├── _mixin.scss
│   │   ├── _variables.scss
│   │   └── common.scss
│   └── vite-env.d.ts
├── structure.txt
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```


---

## 🎨 Design Requirements

- ✅ **Pixel Perfect**: Matches Adobe XD layout exactly
- ✅ **Responsive**: Mobile-first design, scales across all screen sizes
- ✅ **Modern Browser Support**: Chrome, Firefox, Edge, Safari
- ✅ **Custom Code**: Minimal dependencies, prioritizing handcrafted CSS and components

---

## 🧪 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/GreenArrow216/kitchen-mhk.git

# Navigate into the project
cd kitchen-mhk

# Install dependencies
npm install

# Start development server
npm run dev
