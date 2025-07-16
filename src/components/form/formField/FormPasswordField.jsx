import Image from "next/image";
import passeye from "@/assets/form/pass-eye.svg";
const FormPasswordField = (props) => {
  return (
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
  );
};

export default FormPasswordField;
