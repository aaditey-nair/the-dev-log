import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await getPost(req, res);
  } else if (req.method === "DELETE") {
    return await deletePost(req, res);
  } else {
    return res
      .status(403)
      .json({ message: "Method not allowed", success: false });
  }
}

async function getPost(req, res) {
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

async function deletePost(req, res) {
  try {
    const deletedPost = await prisma.blog.delete({
      where: {
        title: req.query.post,
      },
    });
    return res.status(200).json(deletedPost, { success: true });
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .json({ error: "Error occured while deleting the post", success: false });
  }
}
