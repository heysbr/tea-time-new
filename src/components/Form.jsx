import React from "react";
import FormField from "@/components/form/FormField";

const FORM_FIELDS = [
  {
    name: "org-name",
    type: "text",
    placeholder: "Organisation Name",
  },
  {
    name: "org-mail",
    type: "email",
    placeholder: "Organisation Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Create Password",
  },
];

export default function Form() {
  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="z-20 h-fit w-90 p-8 bg-[#171717] rounded-[40px] shadow-black shadow-2xl">
        <h1 className="text-[22px] font-bold text-center">Getting Started</h1>
        <p className="text-[#8F92A1] text-sm text-center">Create an account to continue!</p>
        <form className="mt-8">
          <div className="flex flex-col mb-4 mt-8 gap-y-5 ">
            {FORM_FIELDS.map((field, index) => (
              <FormField
                key={index}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
