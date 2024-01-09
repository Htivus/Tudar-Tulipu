import React from "react";
import "./blog.css";
import Link from "next/link";
import Image from "next/image";
import Post from "./components/Post";

import { getAllPosts } from "@/libs/actions";
import { PostInterface } from "@/common.types";
import { getCurrentUser } from "@/libs/session";
type PostFormat = {
  postCollection: {
    edges: {
      node: PostInterface;
    }[];
  };
};
const page = async () => {
  const data = (await getAllPosts()) as PostFormat;
  const session = await getCurrentUser();
  const posts = data?.postCollection?.edges || [];
  console.log(posts);
  return (
    <div>
      <div className="flex h-screen items-center justify-center gap-20 m-5 flex-wrap">
        {posts.length == 0 ? (
          <h1 className="flex justify-center items-center">No posts yet</h1>
        ) : (
          posts.map(({ node }: { node: PostInterface }) => (
            <Post
              id={node.id || ""}
              title={node.title || ""}
              description={node.description || ""}
              image={node.image || ""}
              user={node.createdBy.name || ""}
              avatarUrl={node.createdBy.avatarUrl || ""}
              date={node.date || ""}
            />
          ))
        )}
      </div>

      {session && (
        <div className="flex justify-center items-center">
          <Link
            href="/create-post"
            className="rounded-full bg-purple-500 p-5 fixed bottom-2 text-white text-xl"
          >
            Post
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;
