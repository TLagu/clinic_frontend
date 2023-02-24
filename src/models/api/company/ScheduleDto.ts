export type ReferralDto = {
  uuid: string;
  locality: string;
  referralDate: Date;
  clinicName: string;
  patientFullName: string;
  patientAge: number;
  patientAddress: string;
  patientPesel: string;
  patientPhone: string;
  diagnosis: string;
  diseaseType: DiseaseTypeDto;
  purpose: string;
  examinationsPerformed: string;
};

export type PrescriptionDto = {
  uuid: string;
  code: string;
  accessCode: string;
  issueDate: Date;
  patient: string;
  doctor: string;
  pzw: string;
  phone: string;
  controlDate: Date;
  number: string;
  drug: string;
  realizationDate: Date;
  packagingType: string;
  dosage: string;
};

export type DiseaseTypeDto = {
  uuid: string;
  code: string;
  description: string;
};

export type SickLeaveDto = {
  uuid: string;
  series?: string;
  number?: string;
  pesel?: string;
  patient?: string;
  insuredType?: string;
  birthDayInsured?: Date;
  postCode?: string;
  post?: string;
  street?: string;
  streetNo?: string;
  flatNo?: string;
  startDate?: Date;
  endDate?: Date;
  hospitalStartDate?: Date;
  LocalDate?: Date;
  indicationType?: string;
  code1?: string;
  code2?: string;
  code3?: string;
  code4?: string;
  diseaseType?: DiseaseTypeDto;
};

export type AppointmentDto = {
  uuid: string;
  patient?: string;
  doctor: string;
  clinic?: string;
  description?: string;
  recommendations?: string;
  sickLeave?: SickLeaveDto;
  prescription?: PrescriptionDto;
  referral?: ReferralDto;
};

export type ScheduleDto = {
  uuid: string;
  userUuid: string;
  startTime: Date;
  endTime: Date;
  appointment?: AppointmentDto;
};

export type ScheduleItems = {
  items: ScheduleDto[];
  date: Date;
};
