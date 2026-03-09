import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  const post: Post = await res.json();

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <article className="border rounded-lg p-6">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="mt-4">{post.body}</p>
        <div className="text-xs text-gray-500">Post ID {post.id} • User {post.userId}</div>
      </article>

      <div className="mt-6">
        <Link href="/posts" className="text-blue-600 hover:underline">
          ← Back to Posts
        </Link>
      </div>
    </main>
  );
}