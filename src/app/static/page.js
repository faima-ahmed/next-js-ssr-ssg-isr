export default async function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Static Pages</h1>
      <div>
        Static rendering is useful for UI with no data or data that is shared
        across users, such as a static blog post or a product page. It might not
        be a good fit for a dashboard that has personalized data which is
        regularly updated.
      </div>
    </div>
  );
}
