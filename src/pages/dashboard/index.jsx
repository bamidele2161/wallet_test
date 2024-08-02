import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Content,
  ProfileSection,
  WalletSection,
  SectionTitle,
  ProfileContent,
  HeaderContent,
  ProfileDetails,
  WalletContent,
  Detail,
  ProfileImageWrapper,
  ProfileWrapper,
  BtnWrapper,
} from "./style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetProfileQuery, useGetWalletMutation } from "../../services/user";
import Button from "../../components/button";

const Dashboard = () => {
  const userInfo = useSelector((state) => state.UserDataReducer?.userInfo);
  const navigate = useNavigate();
  const [walletDetails, setWalletDetails] = useState({});

  const { data } = useGetProfileQuery();
  const [getWallet] = useGetWalletMutation();

  const handleGetWallet = async () => {
    try {
      const response = await getWallet(userInfo?.token);
      if (response?.data?.statusCode === 200) {
        setWalletDetails(response?.data?.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    handleGetWallet();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Container>
      <Header>
        <HeaderContent>
          <div>Dashboard</div>
          <BtnWrapper>
            <Button onClick={handleLogout} title="Logout" bg_color={"black"} />
          </BtnWrapper>
        </HeaderContent>
      </Header>
      <Content>
        <ProfileSection>
          <SectionTitle>Profile</SectionTitle>
          <ProfileContent>
            <ProfileWrapper>
              <ProfileImageWrapper>
                {data?.data?.profile?.firstname.slice(0, 1)}
              </ProfileImageWrapper>
            </ProfileWrapper>
            <ProfileDetails>
              <Detail>
                <strong>First Name:</strong> {data?.data?.profile?.firstname}
              </Detail>
              <Detail>
                <strong>Last Name:</strong> {data?.data?.profile?.lastname}
              </Detail>

              <Detail>
                <strong>Email:</strong> {data?.data?.profile?.emailaddress}
              </Detail>
              <Detail>
                <strong>Phone Number:</strong>{" "}
                {data?.data?.profile?.phonenumber}
              </Detail>
            </ProfileDetails>
          </ProfileContent>
        </ProfileSection>
        <WalletSection>
          <SectionTitle>Wallet Details</SectionTitle>
          <WalletContent>
            <Detail>
              <strong>Balance:</strong> {walletDetails?.balance}
            </Detail>
            <Detail>
              <strong>Wallet Number:</strong> {walletDetails?.walletNumber}
            </Detail>
            <Detail>
              <strong>Wallet Created On: </strong>
              {walletDetails?.createdDate?.slice(0, 10)}
            </Detail>
          </WalletContent>
        </WalletSection>
      </Content>
    </Container>
  );
};

export default Dashboard;
