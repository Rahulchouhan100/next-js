"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(1);
  const router = useRouter();
  return (
    <main className="flex justify-center items-center">
      {/* <Link href={"accounts"}> */}
      <button
        onClick={() => router.push("accounts?search=value")}
        className="btn border-2 bg-red-300 p-2"
      >
        Go to account page
      </button>
      {/* </Link> */}
      <br />
      <button
        className="btn border-2 bg-green-300 p-2"
        onClick={() => router.push("products")}
      >
        Go to product
      </button>
      <button
        className="btn border-2 bg-green-300 p-2"
        onClick={() => router.push("cart?search=product&randomValue=5")}
      >
        Go to Cart
      </button>
      <button
        className="btn border-2 bg-green-300 p-2"
        onClick={() => router.push("serverside-data-fetching")}
      >
        server side Data fetching
      </button>

      <button
        className="btn border-2 bg-green-300 p-2"
        onClick={() => router.push("clientside-data-fetching")}
      >
        Client side Data fetching
      </button>
    </main>
  );
}
