export interface Supplier{
  supplier_id?:number;
  supplier_name: string;   // Supplier name
  contactPerson: string;   // Contact person
  phoneno: string;         // Phone number
  email: string;           // Email
  gstumber: string;        // GST number
  status: string;          // Active / Inactive
  address: string;         // Address
  note: string; 
  joining_date:Date;
     
}