import { MouseEventHandler } from "react";

type Props = {
  handleClick?: MouseEventHandler;
  title: string;
  type?: "button" | "submit";
};

const LoginButton = ({ handleClick, type, title }: Props) => {
  return (
    <button
      type={type || "button"}
      // className="flexCenter gap-3 px-4 py-3 bg-violet-500 rounded-xl text-sm font-medium max-md:w-full text-white"
      className="px-4 py-2 w-36 rounded border-red-600 border-2 hover:bg-red-600 focus:outline-none p-5 m-2"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default LoginButton;
