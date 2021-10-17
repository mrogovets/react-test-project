import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
export default function SelectTextField() {
  const renderOptionsElem = () => {
    let optionsElem = [];
    for (let i = 1; i <= 100; i++) {
      optionsElem.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return optionsElem;
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        marginLeft: "1rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
      }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          albumID
        </InputLabel>
        <NativeSelect
          defaultValue={1}
          inputProps={{
            name: "albumID",
            id: "uncontrolled-native",
          }}
          onChange={handleChange}>
          {renderOptionsElem()}
          {/* <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
