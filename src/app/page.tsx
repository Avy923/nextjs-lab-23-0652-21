import Link from "next/link";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import UserCard from "./components/UserCard";
import ShopPage from "./shop/page";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center p-6">
      <div className="w-full bg-blue-200 p-6 mb-6 text-center">
        <Hello />
      </div>

      <div className="flex gap-6 mb-6">
        <UserCard
          name="Person 1"
          role="Dev 1"
          description="Active"
        />
        <UserCard
          name="Person 2"
          role="Dev 22"
          description="Active"
        />
      </div>

      <Link
        href="/posts"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6"
      >View latest posts
      </Link>

      <div className="absolute bottom-6 middle">
        <Counter />
      </div>
    </main>
  );
}
