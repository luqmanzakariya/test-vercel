export interface UserProps {
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
  broker_details: {
    job_title: string;
    company: string;
    photo_profile: string;
    about: string;
    social_media_links: string[];
  };
  photo_profile: string;
  status: "UNVERIFIED" | "VERIFIED" | string; // You can adjust the union if more statuses are known
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}
