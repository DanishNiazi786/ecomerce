'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/lib/data';
import { useCartStore, useWishlistStore } from '@/lib/store';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const isInWishlist = useWishlistStore((state) =>
    state.isInWishlist(product.id)
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success('Added to cart!');
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product.id);
    toast.success(isInWishlist ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0 relative">
          <div className="aspect-square relative overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              onClick={handleToggleWishlist}
            >
              <Heart
                className={`h-5 w-5 ${
                  isInWishlist ? 'fill-red-500 text-red-500' : ''
                }`}
              />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start p-4 space-y-2">
          <div className="w-full">
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center mt-1 space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            <Button size="sm" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
