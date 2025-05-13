export type Book = {
  id: number;
  title: string;
  author: string | null;
  isbn: string;
  genre: string | null;
  publishedDate: string | null;
  publisher: string | null;
  language: string | null;
  pageCount: number | null;
  availability: boolean | null;
  rating: string | null;
};
