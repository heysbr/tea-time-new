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
        <p className="text-[#8F92A1] text-sm text-center">
          Create an account to continue!
        </p>
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
          <div className="flex flex-row gap-x-3 mt-5">
            <input type="checkbox" id="checkbox" name="checkbox" value="true" className="accent-[#FF3D00E0]" />
            <label htmlFor="checkbox" className="text-xs text-[#8F92A1]">
              By creating an account, you agree to our <br />
              <span className="bg-gradient-to-r from-[#FF3D00E0] to-[#E42982D9] bg-clip-text text-transparent font-bold">
                Term and Conditions
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 h-10 mb-5 bg-gradient-to-r from-[#FF3D00E0] to-[#E42982D9]  text-white rounded-2xl shadow-md hover:bg-[#E42982] transition duration-200 text-xs font-bold"
          >
            Register
          </button>
          <p className="text-xs text-center mt-4 text-[#8F92A1] font-medium">
            Already have an account?{" "}
            <span className="text-[#FF3D00E0] font-bold">Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
}
