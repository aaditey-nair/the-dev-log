import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method == "GET") {
    return await getPosts(req, res);
  } else if (req.method == "POST") {
    return await makePost(req, res);
  } else if (req.method == "DELETE") {
    return await deletePost(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function getPosts(req, res) {
  try {
    let allPosts;
    if (req.query.published == "true") {
      console.log("get only published posts");
      allPosts = await prisma.blog.findMany({
        where: {
          published: true,
        },
      });
      console.log(allPosts);
    } else {
      allPosts = await prisma.blog.findMany();
    }
    return res.status(200).json(allPosts, { success: true });
  } catch (error) {
    console.log("Request error", error);
    return res
      .status(500)
      .json({ error: "Error getting posts", success: false });
  }
}

async function makePost(req, res) {
  const body = req.body;
  try {
    const newBlog = await prisma.blog.create({
      data: {
        title: body.title,
        slug: body.slug,
        tags: body.tags,
        path: body.path,
      },
    });
    return res.status(200).json(newBlog, { success: true });
  } catch (error) {
    console.log("Request error", error);
    return res
      .status(500)
      .json({ error: "Error creating post", success: false });
  }
}

async function deletePost(req, res) {
  try {
    const blogId = parseInt(req.query.id);
    console.log(blogId);
    const deletedPost = await prisma.blog.delete({
      where: {
        id: blogId,
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
