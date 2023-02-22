export type UserDetails = {
  uuid: string;
  firstName: string;
  secondName: string;
  lastName: string;
  pesel: string;
  idNumber: string;
  birthDay: Date;
  nip: string;
};

export type UserDto = {
  uuid: string;
  password: string;
  username: string;
  email: string;
  roles: string[];
  userAppDetails: UserDetails;
  clinic: string;
};
