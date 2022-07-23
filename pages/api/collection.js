import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createCollection(req, res);
  } else if (req.method === "GET") {
    return await getAllCollections(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createCollection(req, res) {
  try {
    const collectionName = req.body.collectionName;
    const newCollection = await prisma.collection.create({
      data: {
        name: collectionName,
      },
    });
    return res.status(200).json(newCollection, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occured while creating the collection" });
  }
}

async function getAllCollections(req, res) {
  try {
    const collections = await prisma.collection.findMany({
      select: {
        name: true,
        posts: req.query.posts === "true",
      },
    });
    return res.status(200).json(collections, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occured while getting the collections" });
  }
}
