"use server";
import { MongoClient } from "mongodb";
import { revalidatePath } from "next/cache";
const URI =
  "mongodb+srv://hamed:hamed123@ketabyar.cxhgz.mongodb.net/Ketabyar?retryWrites=true&w=majority&appName=Ketabyar";
async function addToChallangeBook(formData) {
  const newBookToChallange = {
    title: formData.get("title"),
    author: formData.get("author"),
    image: formData.get("image"),
    isReading: true,
    isFovarite: false,
    isRead: false,
    isInChallenge: true,
  };
  const client = await MongoClient.connect(URI);
  const db = client.db();
  const booksCollection = db.collection("challangebooks");
  const books = db.collection("books");
  booksCollection.insertOne(newBookToChallange);
  books.insertOne(newBookToChallange);

  revalidatePath("/challange");
}

export default addToChallangeBook;
