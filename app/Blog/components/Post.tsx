import React from "react";
import Image from "next/image";
import Link from "next/link";
const Post = ({ id, title, description, image, user, avatarUrl }: any) => {
  return (
    <div>
      <Image
        className="rounded-lg"
        src={image}
        alt={title}
        width={400}
        height={400}
      ></Image>
      <div className="flex justify-between items-center m-2">
        <Link href="/">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={avatarUrl}
              className="rounded-full"
              alt="session"
              width={20}
              height={20}
            ></Image>
            <p className="font-semibold">{user}</p>
          </div>
        </Link>

        <div>
          <div className="flex gap-1">
            <Image
              src="/events/heart.svg"
              alt="heart"
              width={20}
              height={20}
            ></Image>
            <p>300</p>
          </div>
        </div>
      </div>
      <Link href="/">
        <div className="flex justify-center items-center mt-4">
          <p className="text-2xl font-bold max-w-[400px] overflow-hidden overflow-ellipsis">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Post;
