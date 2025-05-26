// All types here
export type Payment = {
  id: string;
  organisation_id: string;
  subscriber_id: string;
  payment_status: string;
  payment_amount: string;
  currency: string;
  payment_description: string;
  payment_due_date: string;
  payment_link: string;
  order_date: string;
  agreement_date: string;
};

export type CustomerPayment = {
  id: string;
  organisation_id: string;
  first_name: string;
  last_name: string;
  email: string;
  locale: string;
  phone_number: string;
  address: string;
  city: string;
  postal_code: string;
  country_code: string;
  payment: Payment;
};

export type PaymentMethodType = {
  id: string;
  name: string;
  description: string;
  countries: string[];
  image: string;
  issuers: IssuerType[];
};

export type IssuerType = {
  id: string;
  name: string;
  image: string;
};
