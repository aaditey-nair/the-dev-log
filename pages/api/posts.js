import { PrismaClient } from "@prisma/client";
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method == "GET") {
    return await getPosts(req, res);
  } else if (req.method == "POST") {
    return await makePost(req, res);
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
      allPosts = await prisma.blog.findMany({
        where: {
          published: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
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
    const filePath = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "public",
      "posts",
      body.title + ".md"
    );
    fs.writeFile(filePath, body.path, (err) => {
      if (err) throw err;
    });
    const newBlog = await prisma.blog.create({
      data: {
        title: body.title,
        slug: body.slug,
        tags: body.tags,
        path: filePath,
        published: body.published,
        headerImg: body.headerImg,
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
