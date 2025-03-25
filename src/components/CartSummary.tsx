
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";

const CartSummary = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  
  const shipping = 5.99;
  const tax = cartTotal * 0.08;
  const orderTotal = cartTotal + shipping + tax;
  
  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "This is a demo. In a real app, you would be redirected to payment.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Estimated Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Order Total</span>
          <span className="text-crafty-terracotta">${orderTotal.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button 
          className="w-full bg-crafty-terracotta hover:bg-crafty-terracotta/90"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={clearCart}
        >
          Clear Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;
