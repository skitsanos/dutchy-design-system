import type { FC } from 'react';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

const CartPage: FC<{ request: Request }> = () => {
  const cartItems = [
    {
      name: 'Premium Watch',
      variant: 'Silver / 42mm',
      price: '$299.00',
      priceValue: 299,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200',
    },
    {
      name: 'Leather Wallet',
      variant: 'Brown / Bifold',
      price: '$89.00',
      priceValue: 89,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=200',
    },
    {
      name: 'Sunglasses',
      variant: 'Black / Classic',
      price: '$149.00',
      priceValue: 149,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200',
    },
  ];

  const relatedProducts = [
    {
      name: 'Backpack',
      price: '$199.00',
      image: 'https://images.unsplash.com/photo-1491553895911-0055uj2f6dc4?w=400',
    },
    {
      name: 'Belt',
      price: '$59.00',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    },
    {
      name: 'Sneakers',
      price: '$179.00',
      image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
    },
    {
      name: 'Cap',
      price: '$35.00',
      image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400',
    },
  ];

  return (
    <Layout
      title="Your Cart | Dutchy"
      meta={{
        description: 'Review your shopping cart and proceed to checkout.',
        keywords: 'cart, shopping, checkout',
      }}
      scripts={['/assets/js/mobile-menu.js', '/assets/js/cart.js']}
    >
      <Header
        siteName="Shop"
        currentPath="/showcase/cart"
        navLinks={[
          { href: '/showcase', label: 'Home' },
          { href: '/showcase/categories', label: 'Categories' },
          { href: '/showcase/pricing', label: 'Pricing' },
          { href: '/showcase/blog', label: 'Blog' },
        ]}
        ctaText="Contact Us"
        ctaHref="/showcase/contact"
      />

      <main className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              Your Cart
            </h1>
            <div className="h-2 w-24 bg-primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className={`py-8 ${index < cartItems.length - 1 ? 'border-b-2 border-border' : ''} ${index === 0 ? 'first:pt-0' : ''}`}
                  data-cart-item=""
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-32 h-32 bg-muted shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between gap-4">
                        <div>
                          <h3 className="font-display text-lg font-bold uppercase">{item.name}</h3>
                          <p className="text-muted-foreground text-sm mt-1">{item.variant}</p>
                        </div>
                        <p
                          className="font-display text-xl font-bold"
                          data-item-price={item.priceValue}
                          data-line-total=""
                        >
                          ${(item.priceValue * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-6">
                        {/* Quantity */}
                        <div className="flex items-center border-2 border-border">
                          <Button
                            variant="ghost"
                            icon
                            size="sm"
                            className="w-10 h-10"
                            aria-label="Decrease quantity"
                            data-qty-minus=""
                          >
                            <Icon name="minus" size="sm" />
                          </Button>
                          <span
                            className="w-12 h-10 flex items-center justify-center font-bold border-x-2 border-border"
                            data-qty-display=""
                          >
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            icon
                            size="sm"
                            className="w-10 h-10"
                            aria-label="Increase quantity"
                            data-qty-plus=""
                          >
                            <Icon name="plus" size="sm" />
                          </Button>
                        </div>

                        {/* Remove */}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-destructive"
                          data-cart-remove=""
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-muted p-8">
                <h2 className="font-display text-xl font-bold uppercase mb-8">Order Summary</h2>

                {/* Summary Lines */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium" data-cart-subtotal="">
                      $626.00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium" data-cart-shipping="15">
                      $15.00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium" data-cart-tax="50.08">
                      $50.08
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t-2 border-border pt-4 mb-8">
                  <div className="flex justify-between">
                    <span className="font-display text-lg font-bold uppercase">Total</span>
                    <span className="font-display text-2xl font-bold" data-cart-total="">
                      $691.08
                    </span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-8">
                  <Input label="Promo Code" type="text" placeholder="Enter code" />
                  <Button variant="secondary" fullWidth className="mt-2">
                    Apply
                  </Button>
                </div>

                {/* Checkout Button */}
                <Button fullWidth size="lg">
                  Proceed to Checkout
                </Button>

                {/* Continue Shopping */}
                <a
                  href="/showcase"
                  className="block text-center mt-6 text-muted-foreground hover:text-foreground transition-colors text-sm font-bold uppercase tracking-wide"
                >
                  Continue Shopping
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 border-2 border-border">
                  <Icon name="lock" className="text-primary" size="lg" />
                  <span className="text-xs font-bold uppercase tracking-wide">Secure Checkout</span>
                </div>
                <div className="flex items-center gap-3 p-4 border-2 border-border">
                  <Icon name="credit-card" className="text-primary" size="lg" />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    All Cards Accepted
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mt-20">
            <SectionTitle>You May Also Like</SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-border">
              {relatedProducts.map((product, index) => (
                <div key={index} className="bg-background">
                  <a href="#" className="block">
                    <div className="aspect-square bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold uppercase hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="font-bold mt-2">{product.price}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer
        siteName="Shop"
        description="Premium products with bold design."
        columns={[
          {
            title: 'Shop',
            links: [
              { href: '#', label: 'All Products' },
              { href: '#', label: 'New Arrivals' },
              { href: '#', label: 'Sale' },
            ],
          },
          {
            title: 'Support',
            links: [
              { href: '/showcase/contact', label: 'Contact' },
              { href: '#', label: 'Shipping' },
              { href: '#', label: 'Returns' },
            ],
          },
        ]}
      />
    </Layout>
  );
};

export default CartPage;
