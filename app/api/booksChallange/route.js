import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

// GET all Books From Books Collection
export const GET = async () => {
  let client;
  try {
    // Initailize
    client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const challangeBooksCollection = db.collection("challangebooks");
    // Get Books collection from database
    const books = await challangeBooksCollection.find({}).toArray();
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
    const challangeBooksCollection = db.collection("challangebooks");

    const body = await request.json();
    const currentBook = body;

    if (currentBook.state === "updated") {
      console.log("updateing.....");
      const book = await challangeBooksCollection.findOne({
        _id: new ObjectId(currentBook._id),
      });
      // Check book is existed
      if (!book) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Book not found",
          }),
        );
      }

      await challangeBooksCollection.updateOne(
        { _id: new ObjectId(currentBook._id) },
        {
          $set: {
            isRead: currentBook.isRead,
          },
        },
      );

      const updatedBook = await challangeBooksCollection.findOne({
        _id: new ObjectId(currentBook._id),
      });

      revalidatePath("/");
      return new Response(
        JSON.stringify({
          success: true,
          data: updatedBook,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }

    console.log("adding .....");
    const insertResult = await challangeBooksCollection.insertOne({
      ...currentBook,
      _id: new ObjectId(currentBook._id),
    });

    return Response.json(
      {
        message: "Book successfully added to the challange list",
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
    const challangeBooksCollection = db.collection("challangebooks");

    const body = await request.json();
    const { _id } = body;

    if (!_id) {
      return Response.json({ error: "Book ID is required" }, { status: 400 });
    }

    const deleteResult = await challangeBooksCollection.deleteOne({
      _id: new ObjectId(_id),
    });

    if (deleteResult.deletedCount === 0) {
      return Response.json(
        { error: "Book not found in the reading list" },
        { status: 404 },
      );
    }

    revalidatePath("/challange");

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
