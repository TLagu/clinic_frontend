export const isAccountValidation = (value: any, field: string) => {
  switch (field) {
    case "password":
      return (
        value !== null &&
        (value.length === 0 || (value.length >= 5 && value.length <= 50))
      );
    case "email":
      return !value === false && value.length >= 5 && value.length <= 50;
    case "clinic":
      return !value === false && value.length <= 40;
    case "firstName":
      return !value === false && value.length >= 3 && value.length <= 50;
    case "secondName":
      return value !== null && value.length <= 50;
    case "lastName":
      return !value === false && value.length >= 3 && value.length <= 50;
    case "pesel":
      return !value === false && value.length === 11;
    case "idNumber":
      return !value === false && value.length < 20;
    case "birthDay":
      return !value === false && !isNaN(Date.parse(value));
    case "nip":
      return (value !== null && value.length === 0) || value.length === 10;
    default:
      return false;
  }
};
