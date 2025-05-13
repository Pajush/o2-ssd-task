export interface Book {
    id: number;
    title: string;
    authorId?: number;
    isbn: string;
    genre?: string;
    publishedDate?: Date;
    publisher?: string;
    language?: string;
    pageCount?: number;
    availability?: boolean;
    rating?: number;
    updatedAt: Date;
  }
  