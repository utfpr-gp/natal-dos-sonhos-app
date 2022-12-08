export type Letter = {
  id: string;
  classroom: { name: string };
  studentName: string;
  imageURL: string;
  product?: Product;
};

export type Product = {
  id: string;
  name: string;
  imageURL: string;
  price: number;
};
