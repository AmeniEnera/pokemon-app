import React from "react";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CardText = styled.p`
  color: #555;
`;
