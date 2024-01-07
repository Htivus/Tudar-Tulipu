import React from "react";
import Modal from "@/app/components/Modal";
import { getPostDetails } from "@/libs/actions";
import Image from "next/image";
import { getSession } from "next-auth/react";
import { getCurrentUser } from "@/libs/session";
interface PostInterface {
  title: string;
  description: string;
  image: string;
  date: string;
  createdBy: {
    id: string;
  };
}
const page = async ({ params: { id } }: { params: { id: string } }) => {
  const result = (await getPostDetails(id)) as {
    post?: PostInterface;
  };
  const session = await getCurrentUser();
  console.log(session.user.id);
  console.log(result?.post?.createdBy.id);
  console.log("Succes");
  //   console.log(post);
  return (
    <Modal>
      <div className="flex-col justify-center items-center">
        <Image
          className="rounded-lg"
          src={result?.post?.image || ""}
          alt="Event Image"
          width={700}
          height={700}
        ></Image>
        <div className="flex-col justify-center items-center mt-5">
          <p className="text-3xl font-bold p-5 flex justify-center items-center max-w-[700px]">
            {result?.post?.title}
          </p>
          <div className="flex-col justify-start mt-5">
            <p className="text-xl italic">Posted on: {result?.post?.date}</p>
            <p className="text-xl overflow-hidden max-w-[700px] mt-5">
              {result?.post?.description}
            </p>
            {result?.post?.createdBy.id == session.user.id && (
              <div className="flex justify-end mt-4 ">
                <button className="bg-gray-500 rounded-md p-2"> Delete</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default page;
