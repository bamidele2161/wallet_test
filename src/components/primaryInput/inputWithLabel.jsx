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
  WarnMsg,
} from "./styled";

const InputWithLabel = ({
  label,
  labelStyle,
  containerStyle,
  edit,
  error,
  errorMessage,
  rightText,
  leftText,
  leftIcon,
  rightIcon,
  container,
  placeholder,
  secureTextEntry,
  type,
  text,
  name,
  password,
  register,
  bottomText,
  topStyles,
  inputClass,
  bottomTextClass,
  disable,
  onChange,
  onBlur,
  maxNumber,
  defaultValue,
  value,
  ref,
  inputId,
  nextElementId,
  step,
  overlayComponent,
  ...rest
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
        className={inputClass}
        ref={inputRef}
        onFocus={() => handleBorder(true)}
        onBlur={() => handleBorder(false)}
        disable={disable}
      >
        {leftIcon && <Iconwrapper>{leftIcon}</Iconwrapper>}
        {leftText && <TextWrapper>{leftText}</TextWrapper>}
        {register ? (
          <Input
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            edit={edit}
            type={!show ? type || "password" : "text"}
            step={step || "any"}
            name={name}
            id={inputId}
            disabled={disable}
            max={maxNumber}
            value={value}
            defaultValue={defaultValue}
            {...register(name, { onChange: onChange })}
            {...rest}
          />
        ) : (
          <Input
            ref={ref}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            edit={edit}
            type={!show ? type || "password" : "text"}
            step={step || "any"}
            name={name}
            id={inputId}
            disabled={disable}
            max={maxNumber}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...rest}
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
