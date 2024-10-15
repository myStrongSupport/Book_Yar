"use server";
export async function getBooks() {
  const res = await fetch(`${process.env.VERCEL_URL}/api/booksBeingRead`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  return await res.json();
}
