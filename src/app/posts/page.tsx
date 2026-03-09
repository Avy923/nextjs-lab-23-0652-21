import type { Metadata } from "next";
import { JSX } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posts · Next.js-Lab",
  description: "Posts from jsonplaceholder.typicode.com",
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function truncate(text: string, max = 120) {
  if (!text) return "";
  return text.length <= max ? text : text.slice(0, max).trimEnd() + "…";
}

export default async function Page(): Promise<JSX.Element> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  const posts: Post[] = await res.json();
  const firstTen = posts.slice(0, 10);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Latest Posts</h1>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {firstTen.map((post) => (
          <li
            key={post.id}
            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold mb-2">
              <Link href={`/posts/${post.id}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-700 mb-3">{truncate(post.body, 100)}</p>
            <div className="text-xs text-gray-500">Post ID {post.id} • User {post.userId}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
