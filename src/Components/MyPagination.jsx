import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function MyPagination({ fetchedDataLength, getPage }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    getPage(page);
  });
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.round(fetchedDataLength / 12)}
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
