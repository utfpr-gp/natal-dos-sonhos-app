export type Letter = {
  id: number;
  imageURL?: string;
  studentName: string;
  productId: number;
  product?: Product;
  classroomId: number;
  classroom?: Classroom;
};

export type Product = {
  id: number;
  name: string;
  imageURL?: string;
  description: string;
  price: number;
  raised: number;
};

export type Classroom = {
  id: number;
  schoolId: number;
  name: string;
};
