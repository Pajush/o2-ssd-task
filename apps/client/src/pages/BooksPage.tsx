import BooksTable from "../components/BooksTable";
import { useGetBooks } from "../api/useGetBooks";
import { Stack, Typography } from "@mui/material";

export const BooksPage = () => {
  const { data, isLoading } = useGetBooks();

  return (
    <>
      <Stack>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Knihy
        </Typography>
        {isLoading && <div>Načítání...</div>}
        {data && <BooksTable rows={data} total={data.length} />}
      </Stack>
    </>
  );
};
