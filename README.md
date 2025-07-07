# Modern Portfolio Website

A beautiful, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a professional layout perfect for showcasing your work and skills.

## 🚀 Features

- **Modern Design**: Clean, professional layout with beautiful animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **TypeScript**: Full TypeScript support for better development experience
- **Animations**: Smooth scroll animations using Framer Motion
- **SEO Optimized**: Meta tags and structured content for better SEO
- **Netlify Ready**: Optimized for deployment on Netlify

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to your hosting provider

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Colors
Update the primary color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... customize your colors
  }
}
```

### Content
- Update personal information in each component
- Replace project data in `Projects.tsx`
- Modify skills and experience in `Skills.tsx` and `About.tsx`
- Update contact information in `Contact.tsx`

### Styling
- Modify global styles in `src/index.css`
- Update component-specific styles using Tailwind classes
- Add custom animations in `tailwind.config.js`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vite](https://vitejs.dev/) for the fast build tool

---

Made with ❤️ by [Your Name]

