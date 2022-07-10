import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await getPostWithId(req, res);
  }
  return res
    .status(403)
    .json({ message: "Method not allowed", success: false });
}

async function getPostWithId(req, res) {
  try {
    const post = await prisma.blog.findFirst({
      where: {
        title: req.query.post,
      },
    });
    return res.status(200).json(post, { success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "An error occured while fetching the post",
      success: false,
    });
  }
}
