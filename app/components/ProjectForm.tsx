"use client";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import "../Blog/blog.css";
import FormField from "./FormField";
import CustomMenu from "./CustomMenu";
import { createPost } from "@/libs/actions";
import { fetchToken } from "@/libs/actions";
const categoryFilters = ["Workshop", "Quiz", "Fest"];
// import {
//   createNewProject,
//   fetchToken,
//   updateProject,
// } from "../../libs/actions";
import { FormState, PostInterface, SessionInterface } from "@/common.types";

type Props = {
  type: string;
  session: SessionInterface;
  project?: PostInterface;
};

const ProjectForm = ({ type, session, project }: Props) => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    title: project?.title || "",
    description: project?.description || "",
    image: project?.image || "",
    date: project?.date || "",
    category: project?.category || "",
  });

  const handleStateChange = (fieldName: keyof FormState, value: string) => {
    setForm((prevForm: any) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      alert("Please upload an image!");

      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange("image", result);
    };
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { token } = await fetchToken();
      console.log(token);
      await createPost(form, session?.user?.id, token);
      setSubmitting(false);
      router.push("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex-col justify-center items-center"
    >
      <div className="flex justify-center items-center p-10 ">
        <label
          htmlFor="poster"
          className="flex justify-center items-center border-2 p-20 text-2xl "
        >
          {!form.image && "Choose a poster for your project"}
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          required={type === "create" ? true : false}
          className="form_image-input flexCenter p-5 m-10"
          onChange={(e) => handleChangeImage(e)}
        />
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 z-20 absolute"
            alt="image"
            width={250}
            height={250}
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="Flexibble"
        setState={(value) => handleStateChange("title", value)}
      />

      <FormField
        title="Description"
        state={form.description}
        placeholder="Showcase and discover remarkable developer projects."
        isTextArea
        setState={(value) => handleStateChange("description", value)}
      />

      <div className="flex-col justify-start gap-3 mt-4">
        <label htmlFor="" className=" text-2xl ">
          Event Date
        </label>
        <input
          id="date"
          type="date"
          className="flex justify-start mt-4"
          onChange={(e) => handleStateChange("date", e.target.value)}
        />
      </div>
      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange("category", value)}
      />

      <div className="flex justify-center items-center w-full mt-4">
        <button
          className={` ${
            submitting ? "bg-gray-500" : "bg-purple-500"
          } p-4 rounded-lg text-white`}
          type="submit"
        >
          {submitting ? "Creating" : "Create"}{" "}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
