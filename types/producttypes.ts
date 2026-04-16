interface Category {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string; // or Date
    updatedAt: string; // or Date
  }
  
  export interface Product {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
    creationAt: string; // or Date
    updatedAt: string; // or Date
  }
  
  
  // 2. Define the Props for the component
  export interface ProductListProps {
    products?: Product[]; // '?' handles cases where products might be undefined
  }
  