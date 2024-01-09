import React from "react";
import Image from "next/image";
import Link from "next/link";
const Post = ({
  id,
  title,
  description,
  image,
  user,
  avatarUrl,
  date,
}: any) => {
  return (
    <div>
      <Link href={`/Blog/${id}`} className="w-full h-full">
        <Image
          className="rounded-lg"
          src={image}
          alt={title}
          width={400}
          height={400}
        ></Image>
      </Link>
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
            <p>{date}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <p className="text-2xl font-bold max-w-[400px] overflow-hidden overflow-ellipsis">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Post;
