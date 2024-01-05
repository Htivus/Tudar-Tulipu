import React from "react";
type Props = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea?: boolean;
  setState: (value: string) => void;
};
const FormField = ({
  type,
  title,
  state,
  placeholder,
  isTextArea,
  setState,
}: Props) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <label htmlFor="" className="w-full text-black text-2xl">
        {title}
      </label>

      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={state}
          required
          className="p-5 rounded-md bg-gray-100"
          rows={4}
          cols={50}
          onChange={(e) => setState(e.target.value)}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={state}
          required
          className="p-5 rounded-md bg-gray-100"
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormField;
