export class CreateBookDto {
    title: string;
    isbn: string;
    authorId?: number | null;
    genre?: string | null;
    publishedDate?: Date | null;
    publisher?: string | null;
    language?: string | null;
    pageCount?: number | null;
    availability?: boolean | null;
    rating?: number | null;
  }
  