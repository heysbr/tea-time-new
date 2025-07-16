import Image from "next/image";
import passeye from "@/assets/form/pass-eye.svg";
const FormPasswordCreateField = (props) => {
  return (
    <>
    <div className="relative w-full ">
      <input
        type="text"
        id={props?.name}
        name={props?.name}
        placeholder={props?.placeholder}
        className="px-4 py-2 w-full bg-[#FFFFFF0D] text-[#FFFFFF] rounded-2xl h-12 text-sm focus:outline-0"
        required
      />
      <Image
        src={passeye}
        alt="pass"
        className="absolute right-4 top-1/2 -translate-y-1/2"
      />
    </div>
    <PasswordCheck value={"test"} />
    </>
  );
};

function PasswordCheck(props) {
  return (
    <div className="flex items-center justify-center">
      <svg
        width="266"
        height="4"
        viewBox="0 0 266 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect opacity="0.05" width="36" height="4" rx="2" fill="white" />
        <rect opacity="0.05" x="46" width="36" height="4" rx="2" fill="white" />
        <rect opacity="0.05" x="92" width="36" height="4" rx="2" fill="white" />
        <rect
          opacity="0.05"
          x="138"
          width="36"
          height="4"
          rx="2"
          fill="white"
        />
        <rect
          opacity="0.05"
          x="184"
          width="36"
          height="4"
          rx="2"
          fill="white"
        />
        <rect
          opacity="0.05"
          x="230"
          width="36"
          height="4"
          rx="2"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default FormPasswordCreateField;
