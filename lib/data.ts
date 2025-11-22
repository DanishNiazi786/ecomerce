export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: { productId: string; quantity: number; price: number }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
  },
  {
    id: '2',
    name: 'Clothing',
    slug: 'clothing',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80',
  },
  {
    id: '3',
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
  },
  {
    id: '4',
    name: 'Digital Products',
    slug: 'digital-products',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80',
  },
  {
    id: '5',
    name: 'Home & Living',
    slug: 'home-living',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    category: 'electronics',
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and premium materials.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 399.99,
    category: 'electronics',
    description: 'Stay connected with our advanced smartwatch featuring health tracking, GPS, and seamless smartphone integration.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
    ],
    rating: 4.6,
    reviews: 203,
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    price: 249.99,
    category: 'clothing',
    description: 'Premium genuine leather jacket with modern cut and classic styling. Perfect for any occasion.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Classic White Sneakers',
    price: 89.99,
    category: 'clothing',
    description: 'Timeless white sneakers crafted from premium materials for ultimate comfort and style.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 342,
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    name: 'Luxury Sunglasses',
    price: 179.99,
    category: 'accessories',
    description: 'Designer sunglasses with UV protection and premium build quality. Make a statement.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    ],
    rating: 4.5,
    reviews: 127,
    inStock: true,
    featured: true,
  },
  {
    id: '6',
    name: 'Premium Leather Wallet',
    price: 79.99,
    category: 'accessories',
    description: 'Handcrafted leather wallet with RFID protection and multiple card slots.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 91,
    inStock: true,
    featured: true,
  },
  {
    id: '7',
    name: 'Digital Photography Course',
    price: 149.99,
    category: 'digital-products',
    description: 'Comprehensive online course teaching professional photography techniques from beginner to advanced.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 567,
    inStock: true,
    featured: true,
  },
  {
    id: '8',
    name: 'Web Development Masterclass',
    price: 199.99,
    category: 'digital-products',
    description: 'Complete web development course covering HTML, CSS, JavaScript, React, and Node.js.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    ],
    rating: 5.0,
    reviews: 1234,
    inStock: true,
    featured: true,
  },
  {
    id: '9',
    name: 'Minimalist Table Lamp',
    price: 69.99,
    category: 'home-living',
    description: 'Modern LED table lamp with adjustable brightness and sleek minimalist design.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    ],
    rating: 4.6,
    reviews: 78,
    inStock: true,
    featured: true,
  },
  {
    id: '10',
    name: 'Ceramic Coffee Mug Set',
    price: 39.99,
    category: 'home-living',
    description: 'Set of 4 handcrafted ceramic mugs perfect for coffee, tea, or hot chocolate.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true,
  },
  {
    id: '11',
    name: '4K Gaming Monitor',
    price: 599.99,
    category: 'electronics',
    description: '32-inch 4K gaming monitor with 144Hz refresh rate and HDR support.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: false,
  },
  {
    id: '12',
    name: 'Mechanical Gaming Keyboard',
    price: 159.99,
    category: 'electronics',
    description: 'RGB mechanical keyboard with premium switches and programmable keys.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: true,
  },
  {
    id: '13',
    name: 'Casual Denim Jeans',
    price: 79.99,
    category: 'clothing',
    description: 'Comfortable stretch denim jeans with modern slim fit.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
    ],
    rating: 4.5,
    reviews: 267,
    inStock: true,
    featured: false,
  },
  {
    id: '14',
    name: 'Cotton T-Shirt Pack',
    price: 49.99,
    category: 'clothing',
    description: 'Pack of 3 premium cotton t-shirts in assorted colors.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    ],
    rating: 4.6,
    reviews: 445,
    inStock: true,
    featured: false,
  },
  {
    id: '15',
    name: 'Sports Running Shoes',
    price: 129.99,
    category: 'clothing',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 389,
    inStock: true,
    featured: false,
  },
  {
    id: '16',
    name: 'Leather Backpack',
    price: 189.99,
    category: 'accessories',
    description: 'Professional leather backpack with laptop compartment and premium hardware.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    featured: false,
  },
  {
    id: '17',
    name: 'Designer Wristwatch',
    price: 449.99,
    category: 'accessories',
    description: 'Elegant automatic wristwatch with sapphire crystal and leather strap.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 234,
    inStock: true,
    featured: false,
  },
  {
    id: '18',
    name: 'Minimalist Necklace',
    price: 59.99,
    category: 'accessories',
    description: 'Sterling silver minimalist necklace with delicate chain.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 123,
    inStock: true,
    featured: false,
  },
  {
    id: '19',
    name: 'UI/UX Design Bundle',
    price: 99.99,
    category: 'digital-products',
    description: 'Complete UI/UX design resource bundle with templates, icons, and courses.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 678,
    inStock: true,
    featured: false,
  },
  {
    id: '20',
    name: 'Stock Photos Collection',
    price: 79.99,
    category: 'digital-products',
    description: '10,000+ high-resolution stock photos for commercial use.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    ],
    rating: 4.6,
    reviews: 445,
    inStock: true,
    featured: false,
  },
  {
    id: '21',
    name: 'Scandinavian Bookshelf',
    price: 299.99,
    category: 'home-living',
    description: 'Modern wooden bookshelf with clean lines and ample storage space.',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 89,
    inStock: true,
    featured: false,
  },
  {
    id: '22',
    name: 'Decorative Wall Mirror',
    price: 149.99,
    category: 'home-living',
    description: 'Large decorative mirror with elegant gold frame.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 134,
    inStock: true,
    featured: false,
  },
  {
    id: '23',
    name: 'Luxury Candle Set',
    price: 69.99,
    category: 'home-living',
    description: 'Set of 3 scented soy candles in elegant glass containers.',
    image: 'https://images.unsplash.com/photo-1602874801006-1664e34c0f7e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1602874801006-1664e34c0f7e?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 267,
    inStock: true,
    featured: false,
  },
  {
    id: '24',
    name: 'Wireless Earbuds Pro',
    price: 179.99,
    category: 'electronics',
    description: 'True wireless earbuds with active noise cancellation and premium sound.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 456,
    inStock: true,
    featured: false,
  },
  {
    id: '25',
    name: 'Portable Power Bank',
    price: 49.99,
    category: 'electronics',
    description: '20,000mAh power bank with fast charging and dual USB ports.',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80',
    ],
    rating: 4.6,
    reviews: 789,
    inStock: true,
    featured: false,
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    author: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely amazing sound quality! The noise cancellation is incredible.',
    date: '2024-01-15',
  },
  {
    id: '2',
    productId: '1',
    author: 'Michael Chen',
    rating: 4,
    comment: 'Great headphones, very comfortable for long sessions. Battery lasts forever.',
    date: '2024-01-20',
  },
  {
    id: '3',
    productId: '1',
    author: 'Emily Rodriguez',
    rating: 5,
    comment: 'Best purchase this year! Worth every penny.',
    date: '2024-02-01',
  },
];

export const orders: Order[] = [
  {
    id: 'ORD-2024-001',
    date: '2024-01-15',
    total: 549.98,
    status: 'delivered',
    items: [
      { productId: '1', quantity: 1, price: 299.99 },
      { productId: '6', quantity: 2, price: 79.99 },
    ],
  },
  {
    id: 'ORD-2024-002',
    date: '2024-02-03',
    total: 899.97,
    status: 'shipped',
    items: [
      { productId: '2', quantity: 1, price: 399.99 },
      { productId: '3', quantity: 2, price: 249.99 },
    ],
  },
  {
    id: 'ORD-2024-003',
    date: '2024-02-10',
    total: 179.99,
    status: 'processing',
    items: [{ productId: '5', quantity: 1, price: 179.99 }],
  },
];
