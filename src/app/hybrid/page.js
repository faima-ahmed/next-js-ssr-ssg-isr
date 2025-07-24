import SinglePost from "@/src/components/SinglePost";
import { getData } from "@/src/lib/getData";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Hybrid() {
  const posts = await getData("http://localhost:8000/posts");

  
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Hybrid page</h1>
      <div>
        <ul className="flex flex-col gap-4 list-image-[url(/checkmark.svg)] m-5">
          {posts.map((post) => (
            <li className="pl-2" key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
        <div>
          document where you want the text to appear, and then press ENTER. The
          sample text that is inserted resembles the following text: Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit.
        </div>
        <hr />
        <Suspense
          fallback={
            <div className="mt-6">
              <h1>Loading single post...</h1>
            </div>
          }
        >
          <SinglePost  />
        </Suspense>
      </div>
    </div>
  );
}
