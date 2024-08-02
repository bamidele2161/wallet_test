import React from "react";
import styled from "styled-components";

import image from "../assets/wallet.png";

const AuthLayout = ({ children, hideLeftAt }) => {
  return (
    <Layout>
      <LayoutLeft></LayoutLeft>
      <LayoutRight hideLeftAt={hideLeftAt}>
        <LogoContainer>
          <img
            src={image}
            alt="Wallet logo"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
            }}
          />
        </LogoContainer>
        <div>{children}</div>
      </LayoutRight>
    </Layout>
  );
};

export default AuthLayout;

const Layout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: #f9fafb;
  height: 100vh;
`;

const LayoutLeft = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  display: none;
  @media screen and (max-width: ${(props) => "1000px" || props.hideLeftAt}) {
    display: none;
  }
`;

const LayoutRight = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
  > div {
    width: clamp(566px, 30%, 100%);
    margin: 1rem auto 63px;
    padding: 10px;
    @media screen and (max-width: ${(props) => "1000px" || props.hideLeftAt}) {
      width: 90%;
    }
  }
`;

const LogoContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0 auto;
  display: flex;
`;
