"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function clientSideDataFetchin() {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  if (error) {
    return <div>Something went wrong</div>;
  }
  if (isLoading) {
    return <div>Loading buddy.........</div>;
  }

  return (
    <div>
      <h1>client side data fetchin</h1>
      <ul className="flex items-center justify-between wrap">
        {data &&
          data?.users?.map((data) => {
            return (
              <Link href={`clientside-data-fetching/${data?.id}`}>
                <p key={data?.id} className="bg-red-500 p-2">
                  {data?.firstName}
                </p>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}
