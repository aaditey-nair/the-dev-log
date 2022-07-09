import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method == "GET") {
    return await getPosts(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function getPosts(req, res) {
  try {
    const allPosts = await prisma.blog.findMany();
    return res.status(200).json(allPosts, { success: true });
  } catch (error) {
    console.log("Request error", error);
    return res
      .status(500)
      .json({ error: "Error getting posts", success: false });
  }
}
