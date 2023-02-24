export const isAppointmentValid = (value: any, field: string) => {
  switch (field) {
    case "patient":
      return !value === false && value.length <= 40;
    case "doctor":
      return !value === false && value.length <= 40;
    case "clinic":
      return !value === false && value.length <= 40;
    case "description":
      return !value === false;
    case "recommendations":
      return !value === false;
    case "sickLeave":
      return (
        (value !== null && value.length === 0) ||
        (!value === false && value.length <= 40)
      );
    case "prescription":
      return (
        (value !== null && value.length === 0) ||
        (!value === false && value.length <= 40)
      );
    case "referral":
      return (
        (value !== null && value.length === 0) ||
        (!value === false && value.length <= 40)
      );
    default:
      return false;
  }
};
