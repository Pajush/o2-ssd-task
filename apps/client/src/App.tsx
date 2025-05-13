import { AppLayout } from "./AppLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import { BooksPage } from "./pages/BooksPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/cs';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="cs">
              <AppLayout>
                <Routes>
                  <Route path="/" element={<BooksPage />} />
                </Routes>
              </AppLayout>
            </LocalizationProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
