# Distinct Systems and Technologies Pvt. Ltd. – Official Corporate Website

Production-quality, enterprise-grade corporate website for **Distinct Systems and Technologies Pvt. Ltd.**, engineered with React, Vite, Tailwind CSS, Lucide Icons, and React Router DOM.

---

## 1. Company Profile & Foundation

- **Company Name:** Distinct Systems and Technologies Pvt. Ltd.
- **Industry:** IT Services and IT Consulting
- **Founded:** 2019
- **Company Type:** Privately Held (Registered in Chennai, Tamil Nadu, India)
- **Official Domain:** [https://distinctsystems.in](https://distinctsystems.in)
- **Official LinkedIn:** [Distinct Systems and Technologies](https://www.linkedin.com/company/distinct-systems-and-technologies/)
- **Headquarters:** Chennai, Tamil Nadu, India
- **Contact Email:** [drmanimaran@distinct-systems.com](mailto:drmanimaran@distinct-systems.com)

### Core Competencies
- Artificial Intelligence & Machine Learning
- Data Science & Advanced Analytics
- Internet of Things (IoT) & Systems Telemetry
- Blockchain Solutions
- SAP S/4HANA Implementations
- Technology Consulting & Architectural Leadership
- Staff Augmentation & Technical Talent Scaling
- SAP Support Services & SLA Maintenance

---

## 2. Design System & 5-Colour Corporate Palette

Strict adherence to the requested enterprise color palette:

| Color Role | Hex Code | Purpose & Application |
| :--- | :--- | :--- |
| **Primary Navy Blue** | `#17365D` | Headers, primary titles, navigation active states, high-priority cards, and footer |
| **Pure White** | `#FFFFFF` | Main page background, primary content cards, crisp contrast zones |
| **Muted Teal** | `#267C78` | Interactive CTAs, hover states, action icons, and focal accents |
| **Light Grey** | `#F2F5F7` | Alternating section containers, module backgrounds, and card fills |
| **Charcoal** | `#263442` | Primary body typography, secondary headings, descriptions, and labels |

### Typography
- Primary Sans & Display: **Inter** and **Manrope** loaded via Google Fonts.

---

## 3. Website Structure – Eight Core Pages

1. **Home (`/`)**: Corporate hero section, trust indicators, verified founding profile, 10 core capability pillars, services preview, SAP S/4HANA practice highlight, solutions summary, why choose Distinct Systems, and contact CTA.
2. **About Us (`/about`)**: Verified background, founding narrative, corporate registration details, our approach, proposed Mission and Vision statements (clearly labeled as proposed awaiting board approval), and corporate values.
3. **Services (`/services`)**: Comprehensive deep dive into all 6 core services (AI/ML, Data Science, Tech Consulting, Staff Augmentation, SAP Implementation, SAP Support Services) with business value and scoping CTAs.
4. **Solutions (`/solutions`)**: Architectural solution frameworks (Intelligent Technology, Enterprise ERP Modernization, Data-Driven Intelligence, Digital Transformation, IoT & Technology Integration).
5. **Industries (`/industries`)**: Domain mapping and feasibility application scenarios across Manufacturing, Healthcare, Finance, Retail, Logistics, and Enterprise Conglomerates (clearly distinguished as capability mappings rather than unverified client testimonials).
6. **SAP Solutions (`/sap-solutions`)**: Dedicated enterprise SAP practice portal covering SAP S/4HANA migration, modular coverage (FICO, MM, SD, PP, ABAP, Basis), implementation roadmap, and SLA-governed L2/L3 support tiers.
7. **Careers (`/careers`)**: Engineering culture, talent bench competencies, and a functional resume/profile submission portal with field validation and direct corporate routing.
8. **Contact Us (`/contact`)**: Form validation, support for pre-filled practice parameters, verified Chennai registered office information, official LinkedIn link, and direct corporate email routing.
9. **404 Not Found (`*`)**: Custom error page aligned with the 5-color corporate palette with quick return links.

---

## 4. Project Architecture

```
Distinct website/
├── public/
│   ├── logo.png              # Authentic company logo (cropped from source)
│   ├── logo@2x.png           # High-DPI retina asset
│   ├── logo.svg              # Precision vector asset
│   ├── robots.txt            # Search engine crawler instructions
│   └── sitemap.xml           # XML sitemap for all 8 corporate pages
├── src/
│   ├── assets/               # Image and branding assets
│   ├── components/
│   │   ├── Button.jsx        # Enterprise button with 5 variants
│   │   ├── Footer.jsx        # Corporate navy footer with links & disclosures
│   │   ├── Logo.jsx          # Original company logo component
│   │   ├── Navbar.jsx        # Sticky navigation with mobile drawer
│   │   ├── ProposedContentBadge.jsx # Clear disclaimer badge
│   │   ├── SectionHeading.jsx# Standardized section headers
│   │   └── ServiceCard.jsx   # Consistent practice card component
│   ├── data/
│   │   ├── company.js        # Verified corporate facts & navigation items
│   │   └── services.js       # Structured services, solutions, and industries data
│   ├── layouts/
│   │   └── MainLayout.jsx    # Root layout with scroll-to-top behavior
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Industries.jsx
│   │   ├── NotFound.jsx
│   │   ├── SAPSolutions.jsx
│   │   ├── Services.jsx
│   │   └── Solutions.jsx
│   ├── styles/
│   │   └── index.css         # Tailwind directives & accessibility styles
│   ├── App.jsx               # React Router configuration
│   └── main.jsx              # Application entry point
├── index.html                # SEO meta tags, Open Graph, fonts preconnect
├── package.json              # Mutually compatible dependencies
├── tailwind.config.js        # 5-colour palette definitions
├── vite.config.js            # Vite configuration with React plugin
└── vercel.json               # SPA routing rewrite configuration
```

---

## 5. Local Development & Testing

### Prerequisites
- Node.js (v18.0.0 or higher recommended; v24 tested)
- npm or pnpm

### Run in Development Mode
```bash
# Install dependencies (if not already installed)
npm install

# Start the Vite local development server
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build & Preview
```bash
# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Deployment Guide (Vercel)

The project includes `vercel.json` configured with rewrite rules for client-side routing.

### Option A: Deploy via GitHub (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Distinct Systems official corporate website"
   ```
2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/<your-username>/distinct-systems-website.git
   git branch -M main
   git push -u origin main
   ```
3. Connect repository in [Vercel Dashboard](https://vercel.com/):
   - Click **Add New Project**.
   - Import your `distinct-systems-website` repository.
   - Framework Preset: **Vite**.
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **Deploy**.

### Option B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
# To deploy to production:
vercel --prod
```

---

## 7. Connecting the Official Domain (`distinctsystems.in`)

1. Open your project in the **Vercel Dashboard**.
2. Navigate to **Settings** > **Domains**.
3. Add `distinctsystems.in` and `www.distinctsystems.in`.
4. Configure DNS records at your domain registrar (e.g., GoDaddy, Namecheap, Google Domains):
   - **Type A**: Name `@`, Value `76.76.21.21`
   - **Type CNAME**: Name `www`, Value `cname.vercel-dns.com`
5. Vercel will automatically provision a free SSL certificate.

---

## 8. Verified Governance Disclosures
- **No Invented Metrics:** No fake client rosters, statistics, or invented testimonials are included.
- **Proposed Content Flags:** Draft Mission and Vision statements are explicitly marked as proposed content awaiting official board sign-off.
- **SAP Notice:** Distinct Systems operates as an independent IT services and advisory firm. SAP and SAP S/4HANA are trademarks of SAP SE.

