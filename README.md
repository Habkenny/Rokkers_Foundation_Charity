# Rokkers Foundation - React Migration

A modern React + React Router implementation of the Rokkers Foundation landing page.

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation and sticky header
│   ├── Hero.jsx        # Hero section
│   ├── Mission.jsx     # Mission statement & transparency
│   ├── Impact.jsx      # Impact statistics
│   ├── Programs.jsx    # Program highlights
│   ├── Stories.jsx     # Success stories
│   ├── Donation.jsx    # Interactive donation form
│   └── Footer.jsx      # Footer navigation
├── pages/
│   └── Home.jsx        # Home page orchestrating all sections
├── styles/
│   ├── index.css       # Global resets, variables, utilities
│   ├── Header.css      # Header styling
│   ├── Hero.css        # Hero styling
│   ├── Mission.css     # Mission styling
│   ├── Impact.css      # Impact styling
│   ├── Programs.css    # Programs styling
│   ├── Stories.css     # Stories styling
│   ├── Donation.css    # Donation form styling
│   └── Footer.css      # Footer styling
├── App.jsx             # Route configuration
├── App.css             # App-level styles
└── main.jsx            # React entry point
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
└── index.html          # HTML entry point
```

## What Was Migrated

### From HTML to React Components

| Original Section | React Component | Features                             |
| ---------------- | --------------- | ------------------------------------ |
| Navigation       | `Header`        | Sticky nav, responsive mobile menu   |
| Hero Banner      | `Hero`          | Animated gradient background         |
| Mission          | `Mission`       | Transparency card with progress bars |
| Impact Stats     | `Impact`        | Dynamic stat cards                   |
| Programs         | `Programs`      | Icon-based program cards             |
| Success Stories  | `Stories`       | Testimonial cards                    |
| Donation Form    | `Donation`      | Interactive state management         |
| Footer           | `Footer`        | Multi-column layout                  |

### React Features Added

1. **State Management** (`useState`)
   - Donation form state (amount, frequency, program, payment method)
   - Mobile menu toggle state

2. **Component Reusability**
   - Impact cards built from array data
   - Story cards rendered from array
   - Program cards data-driven

3. **Routing** (React Router `v6`)
   - `BrowserRouter` wraps app
   - `Routes` & `Route` for navigation
   - Anchor links for smooth scroll navigation

## Installation & Setup

### Build a Fresh Project

1. **Install dependencies:**

   ```bash
   cd Rokkers_Foundation_React
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

   Runs at `http://localhost:5173` (Vite default)

3. **Build for production:**
   ```bash
   npm run build
   ```
   Creates optimized `dist/` folder for deployment

### Deployment

- **Vercel**: Connect GitHub repo → auto-deploys
- **Netlify**: Enable build command `npm run build` and public folder `dist`
- **GitHub Pages**: Build and push to `gh-pages` branch
- **Any Static Host**: Serve files from `dist/` folder

## Key Architectural Decisions

### Why React Router?

**For a single-page site:**

- Anchor links still work (`#mission`, `#donate`, etc.)
- Future extensibility (e.g., add admin page, donation history)
- Best-practice routing setup
- SPA performance (no full page reloads)

**Example Future Route:**

```jsx
<Route path="/admin" element={<AdminDashboard />} />
<Route path="/donate/:id" element={<DonationReceipt />} />
```

### Why Component Splitting?

**Maintainability:**

- Each section isolated and testable
- Easy to modify or replace (e.g., update Hero independently)
- Clearer responsibility per component

**Reusability:**

- Hero component can be reused on multiple pages
- Card components (Impact, Programs, Stories) accept data arrays

**Styling:**

- Component-scoped CSS files prevent conflicts
- Build automation tools can optimize this further

### State Management Strategy

**Current:** `useState` hooks (perfect for this project)

- Donation form preferences
- Mobile menu toggle

**Future Upgrades:**

- Replace with Context API if global state needed
- Add Redux/Zustand if data becomes complex
- Add form validation library (e.g., `react-hook-form`)

## Component Deep Dive

### Donation Component

**Interactive Features:**

```jsx
const [donation, setDonation] = useState({
  amount: 50, // Quick presets or custom
  frequency: "once", // Once, monthly, yearly
  program: "education", // Targeted giving
  paymentMethod: "card", // Card, Bank, PayPal
});
```

**User Flow:**

1. Select amount (quick buttons or custom input)
2. Choose frequency
3. Select program
4. Pick payment method
5. Click "Donate Now" → alert (replace with actual payment API)

### Header Component

**Mobile Responsive:**

```jsx
const [menuOpen, setMenuOpen] = useState(false);
// Mobile hamburger menu appears on screens < 768px
```

## CSS Migration Strategy

### From Vanilla CSS to Component-Scoped CSS

**Before:** One `styles.css` file

```css
.hero {
}
.hero h2 {
}
.hero p {
}
```

**After:** Scoped CSS per component

```
Hero.jsx imports Hero.css
Mission.jsx imports Mission.css
```

**Benefits:**

- No global namespace pollution
- Easy to remove unused styles
- Maintainers know where to edit styles

### Next: CSS-in-JS Options

Consider upgrading to:

- **Styled Components**: `import styled from 'styled-components'`
- **Tailwind CSS**: Utility-first styling, smaller file size
- **CSS Modules**: `import styles from './Hero.module.css'`

## Running & Testing Locally

```bash
# Navigate to project
cd c:\Users\habke\Desktop\My_Portfolio\Uploaded_Projects\LandingPages\Rokkers_Foundation_React

# Install (first time only)
npm install

# Start dev server
npm run dev

# View in browser: http://localhost:5173
# Hot Module Replacement enabled (changes appear instantly)

# Build for production
npm run build
npm run preview # See production build locally
```

## Environment Variables

Create `.env` file for sensitive data:

```
VITE_API_ENDPOINT=https://api.example.com
VITE_STRIPE_KEY=pk_live_xxx
```

Access in code:

```jsx
const apiUrl = import.meta.env.VITE_API_ENDPOINT;
```

## Next Steps for Enhancement

1. **Connect Payment Processing**
   - Stripe, PayPal, or Razorpay integration
   - Replace alert() with actual payment flow

2. **Add Email Notifications**
   - Send confirmation to donors
   - Contact form submissions

3. **Database Integration**
   - Track donations
   - Store donor information (opt-in)
   - Manage impact metrics

4. **Analytics**
   - Google Analytics 4
   - Hotjar for user behavior

5. **Admin Dashboard**
   - New route: `/admin/donations`
   - Dashboard component to view recent donations

6. **Testing**
   - Jest + React Testing Library
   - Unit tests for components
   - Integration tests for flows

## Troubleshooting

**Issue:** Styles not loading

- Ensure CSS import in component: `import '../styles/Header.css'`
- Clear node_modules: `rm -r node_modules && npm install`

**Issue:** React Router not working

- Verify `BrowserRouter` wraps app in `main.jsx`
- Check anchor links use `href="#id"`

**Issue:** Port already in use

- Change Vite port: `npm run dev -- --port 3000`

## Database/API Integration Roadmap

For production deployment:

```jsx
// Future: Replace alert with API call
const handleDonate = async () => {
  const response = await fetch("/api/donations", {
    method: "POST",
    body: JSON.stringify(donation),
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  // Handle success/error
};
```

---

**Version:** 1.0.0  
**React Version:** 18.2.0  
**React Router:** 6.20.0  
**Build Tool:** Vite 5.0.8
