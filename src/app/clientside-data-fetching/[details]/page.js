"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function clientSideUseDetails() {
  const router = useRouter();
  const pathName = usePathname();

  const id = pathName.substring(pathName.lastIndexOf("/") + 1);
  const { data, error, isLoading } = useSWR(
    id ? `https://dummyjson.com/users/${id}` : null,
    fetcher
  );
  console.log(data);

  console.log(pathName);

  if (error) {
    return <div>Something went wrong</div>;
  }
  if (isLoading) {
    return <div>Loading buddy.........</div>;
  }
  return <div>{data?.phone}</div>;
}
