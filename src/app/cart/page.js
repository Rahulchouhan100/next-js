"use client";

import { usePathname, useSearchParams } from "next/navigation";

const Cart = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.log(searchParams.get("randomValue"));
  console.log(pathName);
  return <div>Cart</div>;
};

export default Cart;
