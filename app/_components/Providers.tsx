"use client"

import { ReactNode } from "react"
import { CartProvider as ShoppingCartProvider} from "use-shopping-cart"

function CartProvider({children}:{children: ReactNode}) {
  return (
    <ShoppingCartProvider
    mode="payment"
    cartMode="client-only"
    stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
    successUrl="https://urban-trendz.vercel.app/stripe/success"
    cancelUrl="https://urban-trendz.vercel.app/stripe/error"
    currency="INR"
    billingAddressCollection={true}
    shouldPersist={true}
    language="en-US"
    >
        {children}
    </ShoppingCartProvider>
  )
}

export default CartProvider