import { DictionaryItems } from "components/common/DictionaryItems";
import { LeftSide, RightSide } from "./Form.style";

interface FormLineLabelProps {
  label: string;
  dictionary?: DictionaryItems;
  value?: string;
}

export const FormLineLabels = (props: FormLineLabelProps) => {
  let value: string = "";
  if (props.dictionary === null) {
    value = props.value === undefined ? "" : props.value;
  } else {
    if (props.value !== null) {
      if (props.dictionary?.items !== null) {
        let d = props.dictionary?.items?.find((d) => d.uuid === props.value);
        if (d !== undefined) {
          value = d.itemName;
        }
      }
    }
  }
  return (
    <>
      <LeftSide>{props.label}</LeftSide>
      <RightSide>{value}</RightSide>
    </>
  );
};
