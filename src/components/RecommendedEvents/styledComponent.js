import styled from "styled-components";

export const RecommendedEventsContainer = styled.li`
  min-width: 200px;
  min-height: 300px;
  background-size: cover;
  background-image: url(https://res.cloudinary.com/dlubbarfa/image/upload/v1711875753/Rectangle_2_oy9ubd.svg);
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
`;

export const EventTitle = styled.p`
  color: #ffffff;
  font-family: "Inter";
  font-size: 15px;
`;

export const Details = styled.p`
  color: #ffffff;
  font-family: "Inter";
  font-size: 12px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
