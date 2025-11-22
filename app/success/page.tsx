'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'N/A';

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          <CheckCircle2 className="h-24 w-24 mx-auto text-green-600 mb-6" />
          <h1 className="text-4xl font-bold mb-4">Order Successful!</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Thank you for your purchase
          </p>
          <p className="text-muted-foreground mb-8">
            Your order has been confirmed and will be shipped soon.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-2">Order Number</p>
            <p className="text-2xl font-bold">{orderId}</p>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            A confirmation email has been sent to your registered email address.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/account">
              <Button size="lg" variant="outline">
                View Orders
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
