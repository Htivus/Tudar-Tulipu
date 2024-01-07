import React from "react";
import "./blog.css";
import Link from "next/link";
import Image from "next/image";
import Post from "./components/Post";
import Navbar from "@/app/website/components/Navbar";
import { getAllPosts } from "@/libs/actions";
import { PostInterface } from "@/common.types";
type PostFormat = {
  postCollection: {
    edges: {
      node: PostInterface;
    }[];
  };
};
const page = async () => {
  const data = (await getAllPosts()) as PostFormat;
  const posts = data?.postCollection?.edges || [];
  console.log(posts);
  return (
    <div>
      <Navbar />

      <div className="flex h-screen items-center justify-center gap-20 m-5 flex-wrap">
        {posts.map(({ node }: { node: PostInterface }) => (
          <Post
            id={node.id || ""}
            title={node.title || ""}
            description={node.description || ""}
            image={node.image || ""}
            user={node.createdBy.name || ""}
            avatarUrl={node.createdBy.avatarUrl || ""}
            date={node.date || ""}
          />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Link
          href="/create-post"
          className="rounded-full bg-purple-500 p-5 fixed bottom-2 text-white text-xl"
        >
          Post
        </Link>
      </div>
    </div>
  );
};

export default page;
