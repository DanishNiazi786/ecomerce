'use client';

import { useWishlistStore } from '@/lib/store';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const wishlistItems = useWishlistStore((state) => state.items);
  const wishlistProducts = products.filter((p) => wishlistItems.includes(p.id));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Wishlist</h1>

      {wishlistProducts.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Heart className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Start adding products you love to your wishlist!
            </p>
            <Link href="/shop">
              <Button size="lg">Browse Products</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <>
          <p className="text-muted-foreground mb-6">
            {wishlistProducts.length} item{wishlistProducts.length !== 1 ? 's' : ''} in your wishlist
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
