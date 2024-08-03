import React, { useState, useEffect, useRef } from "react";
import {
  InputWrapper,
  Wrapper,
  Input,
  Label,
  Iconwrapper,
  RightIconwrapper,
  TextWrapper,
  ErrMsg,
  Top,
  Show,
  BottomText,
} from "./styled";

const InputWithLabel = ({
  label,
  labelStyle,
  edit,
  errorMessage,
  rightText,
  leftText,
  leftIcon,
  rightIcon,
  placeholder,
  type,
  name,
  register,
  bottomText,
  bottomTextClass,
  onChange,
  onBlur,
  defaultValue,
  value,
  ref,
}) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (active) {
      inputRef.current.focus();
    }
  }, [active]);
  const handleBorder = (bool) => {
    setActive(bool);
  };

  return (
    <Wrapper>
      <Top>
        {label && <Label className={labelStyle}>{label}</Label>}
        {errorMessage ? <ErrMsg>{errorMessage}</ErrMsg> : null}
      </Top>

      <InputWrapper
        border={
          errorMessage
            ? "1px solid red"
            : active
            ? "1px solid #00A2D4"
            : "1px solid #ececec"
        }
        ref={inputRef}
        onFocus={() => handleBorder(true)}
        onBlur={() => handleBorder(false)}
      >
        {leftIcon && <Iconwrapper>{leftIcon}</Iconwrapper>}
        {leftText && <TextWrapper>{leftText}</TextWrapper>}
        {register ? (
          <Input
            placeholder={placeholder}
            edit={edit}
            type={!show ? type || "password" : "text"}
            name={name}
            value={value}
            defaultValue={defaultValue}
            {...register(name, { onChange: onChange })}
          />
        ) : (
          <Input
            ref={ref}
            placeholder={placeholder}
            edit={edit}
            type={!show ? type || "password" : "text"}
            name={name}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
        {rightIcon && <RightIconwrapper>{rightIcon}</RightIconwrapper>}
        {rightText ? (
          <div onClick={() => setShow(!show)}>
            <Show>{!show ? "show" : "hide"}</Show>
          </div>
        ) : null}
      </InputWrapper>

      {bottomText ? (
        <BottomText className={bottomTextClass}>{bottomText}</BottomText>
      ) : null}
    </Wrapper>
  );
};

export default InputWithLabel;
