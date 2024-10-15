import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

// GET all Books From Books Collection
export const GET = async ({ request }) => {
  let client;
  try {
    // Initailize
    client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const readingBooksCollection = db.collection("readingbooks");
    // Get Books collection from database
    const books = await readingBooksCollection.find({}).toArray();

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

    const body = await request.json();
    const book = body;

    const deleteResult = await readingBooksCollection.deleteOne({
      _id: new ObjectId(book._id),
    });

    if (deleteResult.deletedCount === 0) {
      return Response.json(
        { error: "Book not Add to Read book collection" },
        { status: 404 },
      );
    }

    const insertResult = await readBooksCollection.insertOne({
      ...book,
      _id: new ObjectId(book._id),
    });

    return Response.json(
      {
        message: "Book successfully added to the read list",
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

export const DELETE = async (request) => {
  let client;

  try {
    client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const readingBooksCollection = db.collection("readingbooks");

    const body = await request.json();
    const { _id } = body;

    if (!_id) {
      return Response.json({ error: "Book ID is required" }, { status: 400 });
    }

    const deleteResult = await readingBooksCollection.deleteOne({
      _id: new ObjectId(_id),
    });

    if (deleteResult.deletedCount === 0) {
      return Response.json(
        { error: "Book not found in the reading list" },
        { status: 404 },
      );
    }

    revalidatePath("/bookshelf");

    return Response.json(
      { message: "Book successfully deleted from the reading list" },
      { status: 200 },
    );
  } catch (err) {
    console.error("Error processing delete request:", err);
    return Response.json(
      { error: "Failed to process delete request", details: err.message },
      { status: 500 },
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
};
