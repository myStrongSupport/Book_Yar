import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

// GET all Books From Books Collection
export const GET = async ({ request }) => {
  let client;
  try {
    // Initailize
    client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const booksCollection = db.collection("books");
    // Get Books collection from database
    const books = await booksCollection.find({}).toArray();
    // Check Books
    if (books.length === 0) {
      console.log("There is no book");
    }
    return Response.json(books, {
      status: 200,
    });
  } catch (err) {
    return Response.json(
      {
        error: "Faild to fetch books",
        details: err.message,
      },
      {
        status: 500,
      },
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
};

export const POST = async (request) => {
  let client;

  try {
    client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const readingBooksCollection = db.collection("readingbooks");
    const readBooksCollection = db.collection("readbooks");

    const book = await request.json();

    // Check if the book is already in the readingbooks collection
    const existingBook = await readingBooksCollection.findOne({
      _id: new ObjectId(book._id),
    });

    if (existingBook) {
      return Response.json(
        { message: "This book is already in the reading and favorite list" },
        { status: 400 },
      );
    }

    const existingBookinReadList = await readBooksCollection.findOne({
      _id: new ObjectId(book._id),
    });

    if (existingBookinReadList) {
      return Response.json(
        { message: "This book is already in the read list" },
        { status: 400 },
      );
    }

    const insertResult = await readingBooksCollection.insertOne({
      ...book,
      _id: new ObjectId(book._id),
    });

    return Response.json(
      {
        message: "Book successfully added to the reading list",
        bookId: insertResult.insertedId,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("Error processing request:", err);
    return Response.json(
      { error: "Failed to process request", details: err.message },
      { status: 500 },
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
};
