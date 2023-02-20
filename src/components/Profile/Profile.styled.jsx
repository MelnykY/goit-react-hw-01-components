import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bde7ff;
  padding-top: 60px;
  padding-bottom: 60px;
  width: 360px;
  border: 1px solid black;
  margin: 20px auto;
  box-shadow: 5px 3px 2px 0px rgba(0, 0, 0, 0.5);
`;

export const ProfileDescription = styled.div`
  background-color: #effaff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
`;
export const ProfileAvatar = styled.img`
  display: block;
  height: 220px;
  width: 200px;
  margin-top: 20px;
`;
export const ProfileName = styled.p`
  font-size: 22px;
  line-height: 1.62;
  font-weight: 900;
  color: #0f0f4f;
  margin-top: 20px;
`;
export const ProfileTxt = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1;
  font-weight: 800;
  color: #484137;
`;
export const ProfileStatsList = styled.ul`
  min-width: 320px;
  background-color: #fff;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-top: 1px solid grey;
  box-shadow: 2px 3px 2px 0px rgba(0, 0, 0, 0.5);
`;

export const ProfileStatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const ProfileStatsLabel = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  font-weight: 500;
  text-align: center;
  color: red;
`;

export const ProfileStatsNum = styled.span`
  color: #0f0f4f;
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 800;
  margin: 5px auto;
`;
