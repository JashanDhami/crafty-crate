
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartItems from '@/components/CartItems';
import CartSummary from '@/components/CartSummary';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cartItems } = useCart();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-crafty-navy mb-8">Your Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartItems />
            </div>
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-crafty-navy/30 mb-4" />
            <h2 className="text-2xl font-semibold text-crafty-navy mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Looks like you haven't added any craft crates to your cart yet.</p>
            <a 
              href="/catalog" 
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-crafty-terracotta text-white hover:bg-crafty-terracotta/90 rounded-full"
            >
              Browse Crates
            </a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
