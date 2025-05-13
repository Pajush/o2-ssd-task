import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { csCZ } from "@mui/x-data-grid/locales";
import { Book } from "../types/book";
import { Box, Button, Stack, TextField } from "@mui/material";

const columns = [
  { field: "title", headerName: "Název knihy", minWidth: 200, flex: 2 },
  { field: "author", headerName: "Autor", minWidth: 160, flex: 1 },
  { field: "isbn", headerName: "ISBN", minWidth: 150, flex: 1 },
  { field: "genre", headerName: "Žánr", minWidth: 120, flex: 1 },
  { field: "publishedDate", headerName: "Datum vydání", minWidth: 130, flex: 1 },
  { field: "publisher", headerName: "Vydavatelství", minWidth: 150, flex: 1 },
  { field: "language", headerName: "Jazyk", minWidth: 100, flex: 1 },
  { field: "pageCount", headerName: "Počet stran", minWidth: 100, flex: 1 },
  { field: "availability", headerName: "Dostupnost", minWidth: 130, flex: 1 },
  { field: "rating", headerName: "Hodnocení", minWidth: 110, flex: 1 },
];


type Props = {
  rows: Book[];
  total: number;
};

export default function BooksTable({ rows, total }: Props) {
  const [searchText, setSearchText] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState(rows);
  const handleSearch = () => {
    const filteredData = rows.filter((row) =>
      Object.values(row).some((value) =>
        value?.toString().toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
    setFilteredRows(filteredData);
  };

  return (
    <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
      <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
        <TextField
          label="Vyhledávání"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Button
          sx={{ maxWidth: 120 }}
          variant="contained"
          onClick={handleSearch}
        >
          Filtrovat
        </Button>
      </Stack>
      
      <DataGrid
        rows={filteredRows}
        rowCount={total}
        columns={columns}
        localeText={csCZ.components.MuiDataGrid.defaultProps.localeText}
        sx={{
          borderRadius: 2,
          maxHeight: 450,
          mt: 2,
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 6 } },
        }}
        pageSizeOptions={[6]}
        disableRowSelectionOnClick
      />
    </Stack>
  );
}
