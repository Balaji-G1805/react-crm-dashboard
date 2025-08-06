export interface Customer {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  status: 'Active' | 'Inactive';
}
