import { redirect } from "next/navigation";

export default function Account() {
  const userProfile = null;
  if (userProfile === null) redirect("/products");
  return <div>Account</div>;
}
