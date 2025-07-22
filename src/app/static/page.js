import { getData } from "@/src/lib/getData";

export default async function Static() {
  const posts = await getData("http://localhost:8000/posts");
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Static Pages</h1>
      <div>
        <ul className="flex flex-col gap-4 list-image-[url(/checkmark.svg)] m-5">
          {posts.map((post) => (
            <li className="pl-2" key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
