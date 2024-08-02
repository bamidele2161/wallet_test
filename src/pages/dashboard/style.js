import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  color: #333;
`;
export const Header = styled.header`
  background-color: #070c8a;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 200px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-top: 2rem;
`;

export const Section = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 45%;
`;

export const ProfileSection = styled(Section)``;

export const WalletSection = styled(Section)``;

export const SectionTitle = styled.h2`
  color: #070c9a;
  margin-bottom: 1rem;
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 1rem;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WalletContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Detail = styled.div`
  margin-bottom: 0.5rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #070c9a;
  border-radius: 50%;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const ProfileImageWrapper = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;
