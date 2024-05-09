"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(1);
  const router = useRouter();
  return (
    <main className="flex justify-center items-center">
      <Link href={"accounts"}>
        <button className="btn border-2 bg-red-300 p-2">
          Go to account page
        </button>
      </Link>
      <br />
      <button
        className="btn border-2 bg-green-300 p-2"
        onClick={() => router.push("products")}
      >
        Go to product
      </button>
    </main>
  );
}
