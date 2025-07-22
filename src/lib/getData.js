export async function getData(url) {
    console.log(url)
  const data = await fetch(url);

  return data.json();
}
