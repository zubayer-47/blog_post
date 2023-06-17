import Post from "@models/post";
import { connectedDB } from "@utils/db";

export const GET = async (request) => {
  try {
    await connectedDB();
    const posts = await Post.find({}).populate("creator");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all posts.", { status: 500 });
  }
};
