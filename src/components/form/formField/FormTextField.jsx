const FormTextField = (props) => {
  return (
    <input
      type="text"
      id={props?.name}
      name={props?.name}
      placeholder={props?.placeholder}
      className=" px-4 py-2  bg-[#FFFFFF0D] text-[#FFFFFF] rounded-2xl h-12 text-sm focus:outline-0"
      required
    />
  );
};

export default FormTextField;
