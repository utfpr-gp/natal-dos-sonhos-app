export type Letter = {
  id: string;
  imageURL: string;
  productId: number;
  product?: Product;
};

export type Product = {
  id: number;
  name: string;
  imageURL: string;
  description: string;
  price: number;
  raised: number;
  letterId: string;
};
