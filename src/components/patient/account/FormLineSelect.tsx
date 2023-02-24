import { ClinicItems } from "components/common/ClinicItems";
import { FormSelect, LeftSide, RightSide, ValidationError } from "./AccountForm.style";


interface FormLineSelectProps {
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  clinics: ClinicItems;
  value: string;
  validationResult: boolean;
  validationMessage: string;
}

export const FormLineSelect = (props: FormLineSelectProps) => {
  return (
    <>
      <LeftSide>{props.label}</LeftSide>
      <RightSide>
        <FormSelect onChange={(e) => props.onChange(e.target.value)}>
          <option value="defaultValue" hidden>
            {props.placeholder}
          </option>
          {props.clinics?.items?.map((c) => (
            <option selected={c.uuid === props.value} value={c.uuid}>
              {c.itemName}
            </option>
          ))}
          placeholder={props.placeholder}
          value={props.value}
        </FormSelect>
        {!props.validationResult && (
          <ValidationError>{props.validationMessage}</ValidationError>
        )}
      </RightSide>
    </>
  );
};
