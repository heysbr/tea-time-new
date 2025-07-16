import FormTextField from "@/components/form/formField/FormTextField";
import FormPasswordCreateField from "@/components/form/formField/FormPasswordCreateField";
import FormPasswordField from "@/components/form/formField/FormPasswordField";


const fieldComponentMap = {
  text: FormTextField,
  password: FormPasswordCreateField,
  // createPass : FormPasswordCreateField,
  // select: FormSelectField,
  // radio: FormRadioField,
  // mobile: FormMobileField,
  // email: FormEmailField,
  // checkbox: FormCheckboxField,
  // datepicker: FormDatepickerField,
  // forget: FormForgetField,
};

const FormField = (props) => {
  const FieldComponent = fieldComponentMap[props?.type] || FormTextField;
  return <FieldComponent {...props} />;
};

export default FormField;
