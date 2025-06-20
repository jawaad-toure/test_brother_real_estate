export interface RealEstate {
  id: number;
  name: string;
  imgUrls: string[];
  description: string;
  price: number;
  available: boolean;
  owner: string;
  city: string;
  country: string;
  posted: Date;
  area: number;
}
