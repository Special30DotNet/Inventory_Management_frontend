export interface Product {
  id?: number;
  product_name: string;
  purchase_price: number;
  product_selling_price: number;
  product_stock_quantity: number;
  status: string;
  product_decription?: string;
  created_at?: string;
  created_by?: string;
  modified_at?: string;
  modified_by?: string;
}