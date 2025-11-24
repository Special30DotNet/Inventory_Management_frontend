export interface Iagriculture{

  id?: number;
  product_name: string;
  purchase_price: number;
  product_decription?: string;
  product_selling_price: number;
  product_stock_quantity: number;
  status: string;
  created_at: string;   // ISO date string
  created_by: string;
  modified_at?: string;
  modified_by?: string;
}