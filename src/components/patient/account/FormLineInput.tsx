import { FormInput, LeftSide, RightSide, ValidationError } from "./AccountForm.style";


interface FormLineInputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  validationResult: boolean;
  validationMessage: string;
}

export const FormLineInput = (props: FormLineInputProps) => {
  return (
    <>
      <LeftSide>{props.label}</LeftSide>
      <RightSide>
        <FormInput
          placeholder={props.placeholder}
          type={props.type}
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
        ></FormInput>
        {!props.validationResult && (
          <ValidationError>{props.validationMessage}</ValidationError>
        )}
      </RightSide>
    </>
  );
};
