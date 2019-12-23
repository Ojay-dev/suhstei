export interface IBook {
  id: string;
  title: string;
  authors: string[];
  subtitle?: string;
  publisher?: string;
  publishedDate?: string;
  categories?: string[];
  description?: string;
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
  };
}
