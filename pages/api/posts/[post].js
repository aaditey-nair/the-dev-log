import { PrismaClient } from "@prisma/client";
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await getPost(req, res);
  } else if (req.method === "DELETE") {
    return await deletePost(req, res);
  } else if (req.method === "PUT") {
    return await updatePost(req, res);
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

async function updatePost(req, res) {
  try {
    const { title, slug, tags, published, content, headerImg } = req.body;
    const filePath = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "..",
      "public",
      "posts"
    );
    const originalFilePath = filePath + "/" + req.query.post + ".md";
    const newFilePath = filePath + "/" + title + ".md";
    if (originalFilePath != newFilePath) fs.unlinkSync(originalFilePath);
    fs.writeFile(newFilePath, content, (err) => {
      if (err) throw err;
    });
    const updatedPost = await prisma.blog.update({
      where: {
        title: req.query.post,
      },
      data: {
        title: title,
        slug: slug,
        tags: tags ? tags : undefined,
        published: published,
        path: newFilePath,
        headerImg: headerImg
      },
    });
    return res.status(200).json(updatedPost, { success: true });
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
    fs.unlinkSync(deletedPost.path);
    return res.status(200).json(deletedPost, { success: true });
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .json({ error: "Error occured while deleting the post", success: false });
  }
}
