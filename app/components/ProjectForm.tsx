"use client";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import "../Blogs/blog.css";
import FormField from "./FormField";
import { createPost } from "@/libs/actions";
import { fetchToken } from "@/libs/actions";

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
    reference: project?.reference || "",
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
  const getCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "short", // Abbreviated month name (e.g., "Jan")
      day: "numeric", // Numeric day of the month (e.g., "3")
      year: "numeric", // Full year (e.g., "2020")
    });
    return formattedDate;
  };
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    form.date = getCurrentDate();

    // console.log(form);

    setSubmitting(true);
    try {
      const { token } = await fetchToken();
      console.log(token);
      console.log(form);
      await createPost(form, session?.user?.id, token);
      setSubmitting(false);
      router.push("/Blogs");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex-col justify-center items-center w-full lg:pt-24 pt-12 gap-10 text-lg max-w-5xl mx-auto "
    >
      <div className="flex justify-center items-center p-10 form_image-container">
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
        required={true}
        state={form.title}
        placeholder="Flexibble"
        setState={(value) => handleStateChange("title", value)}
      />

      <FormField
        title="Description"
        required={true}
        state={form.description}
        placeholder="Showcase and discover remarkable developer projects."
        isTextArea
        setState={(value) => handleStateChange("description", value)}
      />

      <div className="flex-col justify-start gap-3 mt-4">
        <FormField
          title="Reference"
          required={false}
          state={form.reference}
          placeholder="Optional"
          setState={(value) => handleStateChange("reference", value)}
        />
      </div>

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
