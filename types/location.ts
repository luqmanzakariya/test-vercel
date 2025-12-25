export interface CountryData {
  id: string;
  country: string;
}

export interface CountriesResponse {
  data: CountryData[];
  message: string;
  status: string;
}

export interface StateData {
  state: "string";
  cities: string[];
}

export interface StateResponse {
  data: StateData[];
  message: string;
  status: string;
}
