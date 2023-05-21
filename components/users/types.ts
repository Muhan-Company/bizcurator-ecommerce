export interface LoginFormValues {
  username: string;
  password: string;
}
interface IndexingTypes {
  [key: string]: string | undefined;
}
export interface SignupFormValues extends IndexingTypes {
  username: string;
  password: string;
  password_confirm: string;
  business_name: string;
  representative: string;
  business_number: string;
  postal_code?: string;
  postalCode?: string;
  address: string;
  detailAddress?: string;
  business_registration_Image: string;
  manager: string;
  manager_email: string;
  manager_phone_number: string;
}
