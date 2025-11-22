# LuxeShop - Premium E-Commerce Platform

A fully-featured, production-ready Next.js 14 e-commerce website demo built with modern technologies and best practices.

## Features

### Customer Features
- **Homepage**: Hero banner, featured categories, and product showcase
- **Shop**: Product listing with filters, search, and sorting
- **Product Pages**: Detailed product view with image gallery, reviews, and related products
- **Shopping Cart**: Full cart management with quantity updates
- **Checkout**: Secure checkout flow with Paystack payment integration
- **Wishlist**: Save favorite products for later
- **User Account**: Order history, profile management, and settings
- **Authentication**: Login and registration (UI only, no backend)

### Admin Features
- **Dashboard**: Overview with revenue, orders, and product stats
- **Product Management**: Add, edit, and delete products
- **Order Management**: View and update order status
- **Category Management**: Manage product categories
- **Coupon Management**: Create and manage discount codes

### Technical Features
- **Responsive Design**: Perfect mobile and desktop experience
- **State Management**: Zustand for cart and wishlist
- **Toast Notifications**: User feedback with Sonner
- **Modern UI**: Shadcn/ui components with Tailwind CSS
- **SEO Optimized**: Proper metadata and structure
- **Loading States**: Skeleton screens and smooth transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **State Management**: Zustand
- **Payment**: Paystack (Test Mode)
- **Notifications**: Sonner

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd luxeshop
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── product/[id]/      # Dynamic product pages
│   ├── shop/              # Product listing
│   └── ...
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   ├── header.tsx        # Site header
│   ├── footer.tsx        # Site footer
│   └── product-card.tsx  # Product card component
├── lib/                  # Utilities and data
│   ├── data.ts          # Fake product/order data
│   ├── store.ts         # Zustand store
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## Features in Detail

### Payment Integration
The checkout page integrates with Paystack in test mode. To use real payments:
1. Sign up at [Paystack](https://paystack.com)
2. Get your API keys from the dashboard
3. Replace the test key in `/app/checkout/page.tsx`

### Data Management
All product, category, and order data is currently hardcoded in `lib/data.ts`. For a production application, this should be replaced with:
- Backend API (Node.js/Express, Python/Django, etc.)
- Database (MongoDB, PostgreSQL, etc.)
- CMS (Strapi, Sanity, etc.)

### Authentication
The login/register pages are UI-only demos. For production, integrate with:
- NextAuth.js
- Supabase Auth
- Auth0
- Custom backend authentication

## Customization

### Styling
- Modify `app/globals.css` for global styles
- Edit `tailwind.config.ts` for theme customization
- Update Shadcn UI theme in `components.json`

### Data
- Add/edit products in `lib/data.ts`
- Update categories and fake orders
- Customize product images using Unsplash URLs

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any Node.js hosting platform:
- Netlify
- Railway
- Render
- AWS/Google Cloud

## Future Enhancements

This is a frontend-only demo. For production, consider adding:
- Real backend API with Node.js/Express or Python/Django
- Database integration (MongoDB, PostgreSQL)
- Real authentication system
- Product inventory management
- Email notifications
- Order tracking
- Customer reviews system
- Multi-currency support
- Advanced analytics

## License

This project is created as a demo/template and is free to use for commercial or personal projects.

## Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

Built with ❤️ using Next.js 14 and modern web technologies
