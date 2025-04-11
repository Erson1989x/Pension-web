# Pension Website - Ultra-Modern Mountain Retreat Website

A premium, feature-rich website for a mountain pension (guest house) built with Next.js and React. This project showcases an ultra-modern design approach with immersive animations, 3D effects, and responsive layouts to deliver an exceptional user experience.

![Pension Website Preview](public/preview.jpg)

## 🌟 Features

- **Ultra-modern UI/UX** with 3D effects, parallax scrolling, and fluid animations
- **Responsive design** that works beautifully across all device sizes
- **Interactive components** for engaging user experiences
- **Optimized images** using Next.js Image component
- **Seamless navigation** with smooth transitions between pages
- **Dynamic content** with filtering capabilities
- **Immersive gallery** with lightbox and category filtering
- **Interactive room showcase** with detailed information
- **Activity explorer** with location-based information

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: Custom-built React components
- **Image Optimization**: Next.js Image component
- **Deployment**: Ready for deployment on Vercel

## 📂 Project Structure

```
pensiune/
├── public/               # Static assets and images
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── about/        # About page
│   │   ├── activities/   # Activities page
│   │   ├── contact/      # Contact page
│   │   ├── gallery/      # Gallery page
│   │   ├── rooms/        # Rooms page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable React components
│   │   ├── Features/     # Features showcase component
│   │   ├── Footer/       # Site footer
│   │   ├── Hero/         # Hero banner component
│   │   ├── Navbar/       # Navigation bar
│   │   ├── RoomShowcase/ # Room display component
│   │   └── common/       # Common UI elements
└── package.json          # Project dependencies
```

## 📄 Pages

### 1. Home (Landing Page)
- Hero section with parallax effects and animated text
- Featured amenities with 3D card effects
- Interactive room showcase with dynamic content

### 2. Rooms Page
- Detailed room listings with immersive photos
- Interactive room cards with 3D hover effects
- Custom color gradients for each room type
- Booking modal with modern form elements
- Mouse-position aware parallax effects

### 3. Activities Page
- Activity cards with category filtering
- Detailed activity information with location data
- Interactive category filtering
- Custom color schemes for each activity type
- Call-to-action section with animations

### 4. Gallery Page
- Masonry layout photo gallery with category filtering
- Immersive lightbox with keyboard navigation
- Particle effects and decorative elements
- Interactive image browsing experience

### 5. About Page
- Story section with parallax scrolling
- Values showcase with animated elements
- Team section with modern card designs
- Decorative floating elements

### 6. Contact Page
- Interactive contact form with validation
- Location information with map integration
- Modern input fields with animated focus states
- Contact details with iconography

## 🧩 Key Components

### 1. Hero Component
- Full-screen immersive display
- Parallax scrolling effect
- Animated text elements
- Backdrop blur and gradient overlays

### 2. Features Component
- 3D card effects with animated hover states
- Floating accent orbs with mouse interaction
- Color-coded categories with custom gradients
- Animated underlines and transition effects

### 3. RoomShowcase Component
- Interactive room selection
- Parallax effects for depth
- Animated feature tags
- Gradient accents for each room type

### 4. Navbar Component
- Responsive design with mobile menu
- Smooth scrolling navigation
- Animated menu transitions
- Semi-transparent backdrop

### 5. Footer Component
- Multi-column layout
- Social media links
- Newsletter subscription
- Copyright information

## 🎨 Design Elements

### Design Philosophy
The website implements an ultra-modern design language with these key characteristics:

- **Depth and Dimension**: 3D effects, parallax scrolling, and layered elements create a sense of depth
- **Fluid Motion**: Smooth animations and transitions throughout the user experience
- **Glassmorphism**: Frosted glass effects with backdrop blur for a modern feel
- **Vibrant Gradients**: Custom color schemes unique to different content types
- **Floating Elements**: Decorative orbs and shapes that respond to user interaction
- **Micro-interactions**: Subtle animations triggered by user actions

### Animation Types
- Scroll-triggered animations
- Mouse position parallax effects
- Hover state transitions
- Page transition animations
- Loading animations
- Text reveal animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pension-website.git
cd pension-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## 🔧 Configuration

The website is designed to be easily configurable through content files. Key configuration areas:

- Room data in `src/app/rooms/page.tsx`
- Activity data in `src/app/activities/page.tsx`
- Gallery images in `src/app/gallery/page.tsx`

## 📱 Responsive Design

The website is fully responsive with carefully crafted layouts for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktops (> 1024px)
- Large screens (> 1280px)

## ✅ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA attributes where appropriate
- Sufficient color contrast
- Alt text for images

## 🔮 Future Enhancements

Potential areas for further development:
- Backend integration for real booking functionality
- CMS integration for easy content management
- Multi-language support
- Advanced filtering and search capabilities
- User account functionality

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
