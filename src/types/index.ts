export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  seller: {
    id: string;
    name: string;
    type: 'individual' | 'professional';
  };
  variations?: ProductVariation[];
  category: string;
  condition: string;
  createdAt: string;
}

export interface ProductVariation {
  size: string;
  color: string;
  quantity: number;
  price?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'individual' | 'professional';
  rating: number;
  joinedDate: string;
}