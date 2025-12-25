export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  name: string;
  email: string;
  password: string;
  phone_number: string;
}

export interface IProfilePayload {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  address_details: {
    address: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
  };
  type: string;
  photo_profile: string;
  broker_details: {
    job_title: string;
    company: string;
    website: string;
    photo_profile: string;
    about: string;
    social_media_links: string[];
  };
  status: string;
}

export interface IAccountSettingPayload {
  new_password: string;
  confirm_password: string;
}

export interface IBusinessListingPayload {
  id: number;
  user_id: number;
  title: string;
  description: string;
  currency: string;
  price: number;
  reason: string;
  year_established: number;
  business_detail: {
    scales: string;
    annual_income: number;
    legal_entity: string;
    withholding_tax_report: string;
    bookkeeping_system: string;
    shareholder: number;
    asset_ownership: string;
    rent_information: {
      leased_until: string; // ISO Date string, can also be typed as Date if parsed
      average_customer_per_month: number;
      movable: string;
    };
    number_of_employees: number;
    employee_status: string;
    support_and_training: string;
    competitors: string;
    inventory_and_facilities: string;
    selling_price_status: {
      rent_status: string;
      inventory_status: string;
    };
  };
  media: {
    videos: string[];
    photos: string[];
    links: string[];
  };
  business_type: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: number;
}

export interface IAdminUpdateBusinessPayload {
  id: number;
  status: string;
  notes: string;
}

export interface IMessagePayload {
  business_listing_id: number;
  message: string;
}

export interface IFilterPayload {
  business_type: string;
  country: string;
  state: string;
  city: string;
  year_established: string;
  min_price: string;
  max_price: string;
}

export interface ISearchParamPayload {
  searchParams: string;
}

export interface IUploadImagePayload {
  image: File | null;
}

export interface IWishlistPayload {
  business_listing_id: number;
}

export interface IChangePasswordAdminPayload {
  user_id: number;
  new_password: string;
  confirm_password: string;
}
