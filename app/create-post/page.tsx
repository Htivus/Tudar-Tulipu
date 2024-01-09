import React from "react";
import Modal from "../components/Modal";
import ProjectForm from "../components/ProjectForm";
import { getCurrentUser } from "@/libs/session";
import { redirect } from "next/navigation";
const CreateProject = async () => {
  const session = await getCurrentUser();
  if (!session?.user) redirect("/");
  return (
    <Modal>
      <h3 className="flex justify-center items-center text-3xl mb-14">
        Create A Event Post
      </h3>
      <ProjectForm type="create" session={session} />
    </Modal>
  );
};

export default CreateProject;
