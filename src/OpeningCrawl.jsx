import React from "react";
import styled from "styled-components";

const CrawlWrapper = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  min-width: 500px;
  background-color: #e9e9e9;
`;

const CrawlText = styled.p`
  font-size: 0.8 rem;
`;

const OpeningCrawl = ({ openingCrawl }) => {
  return (
    <CrawlWrapper>
      <CrawlText>{openingCrawl}</CrawlText>
    </CrawlWrapper>
  );
};

export default OpeningCrawl;
