export interface BusinessListingResponse {
  data: BusinessListing[];
  message: string;
  status: string;
}

export interface BusinessListingEditResponse {
  data: BusinessListing;
  message: string;
  status: string;
}

export interface UserResponse {
  data: User;
  message: string;
  status: string;
}

export interface UsersResponse {
  data: User[];
  message: string;
  status: string;
}

export interface WishlistResponse {
  data: Wishlist[];
  message: string;
  status: string;
}

export interface BusinessValuationResponse {
  data: BusinessValuation[];
  message: string;
  status: string;
}

export interface BusinessValuationDetailResponse {
  data: BusinessValuationDetail;
  message: string;
  status: string;
}

export interface MessageResponse {
  data: Message[];
  message: string;
  status: string;
}

export interface BusinessListing {
  id: number;
  user_id: number;
  title: string;
  description: string;
  currency: string;
  price: number;
  reason: string;
  year_established: number;
  business_detail: BusinessDetail;
  media: Media;
  business_type: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: number;
  status: string;
  notes: string;
  created_at: string;
  updated_at: string;
}

export interface BusinessDetail {
  scales: string;
  annual_income: number;
  legal_entity: string;
  withholding_tax_report: string;
  bookkeeping_system: string;
  shareholder: number;
  asset_ownership: string;
  rent_information: RentInformation;
  number_of_employees: number;
  employee_status: string;
  support_and_training: string;
  competitors: string;
  inventory_and_facilities: string;
  selling_price_status: SellingPriceStatus;
}

export interface RentInformation {
  leased_until: string;
  average_customer_per_month: number;
  movable: string;
}

export interface SellingPriceStatus {
  rent_status: string;
  inventory_status: string;
}

export interface Media {
  videos: string[];
  photos: string[];
  links: string[];
}

export interface User {
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

export interface Wishlist {
  id: number;
  user_id: number;
  business_listing_id: number;
  business_listing: BusinessListing;
}

export interface BusinessValuation {
  id: number;
  name: string;
  business_name: string;
  email: string;
  phone_number: string;
}

export interface BusinessValuationDetail {
  id: number;
  name: string;
  business_name: string;
  email: string;
  phone_number: string;
  industri_type: string;
  current_assets: string;
  current_liabilities: string;
  other_assets: string;
  gross_sale: number;
}

export interface Message {
  id: number;
  business_listing_id: number;
  business_title: string;
  business_owner_id: number;
  sender_id: number;
  sender_name: string;
  sender_email: string;
  sender_phone_number: string;
  message: string;
  created_at: string;
}

export interface DashboardSummaryData {
  total_business: number;
  total_pending: number;
  total_view: number;
  total_favorite: number;
}

export interface DashboardSummaryResponse {
  data: DashboardSummaryData;
  message: string;
  status: string;
}

export interface ListingViewStat {
  date: string;
  count: number;
}

export interface ListingViewStatResponse {
  data: ListingViewStat[];
  message: string;
  status: string;
}
