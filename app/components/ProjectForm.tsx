"use client";

import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import "../Blog/blog.css";
import FormField from "./FormField";
import CustomMenu from "./CustomMenu";
const categoryFilters = [
  "Frontend",
  "Backend",
  "Full-Stack",
  "Mobile",
  "UI/UX",
  "Game Dev",
  "DevOps",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Blockchain",
  "E-commerce",
  "Chatbots",
];
// import {
//   createNewProject,
//   fetchToken,
//   updateProject,
// } from "../../libs/actions";
import { FormState, ProjectInterface, SessionInterface } from "@/common.types";

type Props = {
  type: string;
  session: SessionInterface;
  project?: ProjectInterface;
};

const ProjectForm = ({ type, session, project }: Props) => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    title: project?.title || "",
    description: project?.description || "",
    image: project?.image || "",
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
    // e.preventDefault();
    // setSubmitting(true);
    // // const { token } = await fetchToken();
    // try {
    //   if (type === "create") {
    //     await createNewProject(form, session?.user?.id, token);
    //     console.log("yes");
    //     router.push("/");
    //   }
    //   if (type === "edit") {
    //     await updateProject(form, project?.id as string, token);
    //     router.push("/");
    //   }
    // } catch (error) {
    //   alert(
    //     `Failed to ${
    //       type === "create" ? "create" : "edit"
    //     } a project. Since github and website link should be in https:www format`
    //   );
    // } finally {
    //   setSubmitting(false);
    // }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex-col justify-center items-center"
    >
      <div className="flexStart ">
        <label
          htmlFor="poster"
          className="flex justify-center items-center border-2 p-5 text-2xl "
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
            className="sm:p-10 z-20"
            alt="image"
            width={100}
            height={100}
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

      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange("category", value)}
      />

      <div className="flexStart w-full">
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default ProjectForm;
