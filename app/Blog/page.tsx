import React from "react";
import "./blog.css";
import Link from "next/link";
import Image from "next/image";
import Post from "./components/Post";
import Navbar from "@/app/website/components/Navbar";
const page = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <div className="flex h-screen items-center justify-center gap-20 m-5 flex-wrap">
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (1).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (2).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (3).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (1).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (2).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (3).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (1).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (2).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (3).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (1).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (2).jpg"
        />
        <Post
          title="First Event"
          description="ftcvgdbheb gdvgdvgvd"
          image="/events/img1 (3).jpg"
        />
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
