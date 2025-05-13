import { useQuery } from "@tanstack/react-query";
import api from "./axiosInstace";
import { Book } from "../types/book";

const getBooks = async () => {
  const { data } = await api.get("/books");
  return data;
};

export const useGetBooks = () => {
  return useQuery<Book[]>({
    queryKey: ["getBooks"],
    queryFn: () => getBooks(),
  });
};
