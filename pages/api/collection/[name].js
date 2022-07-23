import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    return await updateCollection(req, res);
  }
  return res
    .status(405)
    .json({ message: "Method not allowed", success: false });
}

async function updateCollection(req, res) {
  try {
    console.log(req.query.name);
    const updatedCollection = await prisma.collection.update({
      where: {
        name: req.query.name,
      },
      data: {
        posts: {
          connect: {
            id: parseInt(req.body.postId),
          },
        },
      },
    });
    return res.status(200).json(updatedCollection, { success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "An error occured while updating the collection",
      success: false,
    });
  }
}
