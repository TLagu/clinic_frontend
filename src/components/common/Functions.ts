export const formatDate = (date: Date): string => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const formatTime = (date: Date): string => {
  var d = new Date(date),
    hour = "" + (d.getHours() + 1),
    minute = "" + d.getMinutes();

  if (hour.length < 2) hour = "0" + hour;
  if (minute.length < 2) minute = "0" + minute;

  return [hour, minute].join(":");
};
