
import React from 'react';
import { useCart, CrateItem } from '@/contexts/CartContext';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CartItemCard = ({ item }: { item: CrateItem }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <Card className="mb-4 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center p-4">
          <div className="h-20 w-20 flex-shrink-0 rounded-md border overflow-hidden">
            <img 
              src={item.image || '/placeholder.svg'} 
              alt={item.name} 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-4 flex-grow">
            <h3 className="font-medium text-crafty-navy">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.category}</p>
            <div className="mt-1 font-semibold text-crafty-terracotta">
              ${item.price.toFixed(2)}
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center border rounded-md">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-none" 
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-none" 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50" 
              onClick={() => removeFromCart(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CartItems = () => {
  const { cartItems } = useCart();

  return (
    <div>
      {cartItems.map(item => (
        <CartItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItems;
