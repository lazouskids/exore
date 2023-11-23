export interface ProductApi {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
}

export interface LoginResponseApi {
  token?: string;
}
