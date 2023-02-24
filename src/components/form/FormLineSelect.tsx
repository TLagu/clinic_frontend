import { DictionaryItems } from "components/common/DictionaryItems";
import { LeftSide, RightSide, FormSelect, ValidationError } from "./Form.style";

interface FormLineSelectProps {
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  dictionary: DictionaryItems;
  value: string;
  validationResult: boolean;
  validationMessage: string;
}

export const FormLineSelect = (props: FormLineSelectProps) => {
  return (
    <>
      <LeftSide>{props.label}</LeftSide>
      <RightSide>
        <FormSelect
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        >
          <option value="defaultValue" hidden>
            {props.placeholder}
          </option>
          {props.dictionary?.items?.map((c) => (
            <option value={c.uuid}>{c.itemName}</option>
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
