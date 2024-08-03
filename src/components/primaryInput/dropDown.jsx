import React from "react";
import { Wrapper, Label, ErrMsg, Top } from "./styled";
import Select from "react-select";

const DropDown = ({ label, labelStyle, errorMessage, onChange, options }) => {
  const selectStyle = {
    background: "red",
    container: (base, state) => ({
      ...base,
      width: "100%",
    }),
    control: (base, state) => ({
      ...base,
      boxShadow: "none",
      borderRadius: 10,
      height: 55,
      paddingInline: 20,
      fontSize: "clamp(12px, 1.2vw, 14px)",
      outline: "none",
      "&:hover": {
        borderColor: "none",
      },
      border: `1px solid ${
        state.isFocused ? "#00A2D4" : errorMessage ? "red" : "#ECECEC"
      }`,
      outlineColor: "#00A2D4",
    }),
    placeholder: (base, state) => ({
      ...base,
      fontSize: "clamp(12px, 1.2vw, 14px)",
    }),
    input: (provided, state) => ({
      ...provided,
      height: 40,
      borderRadius: 15,
      margin: 0,
      padding: 0,
      outlineColor: "#00A2D4",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      padding: 20,
      fontSize: "clamp(12px, 1.2vw, 14px)",
    }),
  };
  return (
    <Wrapper>
      <Top>
        {label && <Label className={labelStyle}>{label}</Label>}

        {errorMessage ? <ErrMsg>{errorMessage}</ErrMsg> : null}
      </Top>

      <Select onChange={onChange} options={options} styles={selectStyle} />
    </Wrapper>
  );
};

export default DropDown;
