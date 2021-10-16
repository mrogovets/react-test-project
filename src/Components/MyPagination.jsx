import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function MyPagination({ fetchedDataLength }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination
        count={Math.round(fetchedDataLength / 12)}
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
