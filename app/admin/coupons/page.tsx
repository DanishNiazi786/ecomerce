'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Coupon {
  id: string;
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  active: boolean;
  expiryDate: string;
}

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([
    {
      id: '1',
      code: 'SAVE20',
      discount: 20,
      type: 'percentage',
      active: true,
      expiryDate: '2024-12-31',
    },
    {
      id: '2',
      code: 'FLAT50',
      discount: 50,
      type: 'fixed',
      active: true,
      expiryDate: '2024-06-30',
    },
    {
      id: '3',
      code: 'WELCOME10',
      discount: 10,
      type: 'percentage',
      active: false,
      expiryDate: '2024-03-31',
    },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = (id: string) => {
    setCoupons(coupons.filter((c) => c.id !== id));
    toast.success('Coupon deleted successfully');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Coupons</h1>
          <p className="text-muted-foreground">Manage discount coupons</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Coupon
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Coupon</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="code">Coupon Code</Label>
                <Input id="code" placeholder="SAVE20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="discount">Discount Amount</Label>
                  <Input id="discount" type="number" placeholder="20" />
                </div>
                <div>
                  <Label htmlFor="type">Type</Label>
                  <select
                    id="type"
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed Amount</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" type="date" />
              </div>
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  toast.success('Coupon added successfully');
                  setIsDialogOpen(false);
                }}
              >
                Add Coupon
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coupons.map((coupon) => (
              <TableRow key={coupon.id}>
                <TableCell className="font-mono font-bold">
                  {coupon.code}
                </TableCell>
                <TableCell>
                  {coupon.type === 'percentage'
                    ? `${coupon.discount}%`
                    : `$${coupon.discount}`}
                </TableCell>
                <TableCell className="capitalize">{coupon.type}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      coupon.active
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }
                  >
                    {coupon.active ? 'Active' : 'Inactive'}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(coupon.expiryDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(coupon.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
