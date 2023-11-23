interface BaseProduct {
  id: string;
  title: string;
  price: number;
  description: string;
}

export interface ServerProduct extends BaseProduct {
  image: string;
}

export interface LocalProduct extends BaseProduct {
  created: string;
  isPublished: boolean;
}

export type Product = ServerProduct | LocalProduct;

export interface IProductApplication {
  create: (product: LocalProduct) => Promise<Boolean>;
  edit: (product: LocalProduct) => Promise<Boolean>;
  delete: (id: string) => Promise<Boolean>;
}
