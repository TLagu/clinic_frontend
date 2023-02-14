import { Item } from "./PaginationItem.styles";

type PaginationItemProps = {
  number: number;
  onPageChanged: (number: number) => void;
};

export const PaginationItem = ({
  number,
  onPageChanged,
}: PaginationItemProps) => {
  return <Item onClick={() => onPageChanged(number)}>{number}</Item>;
};
