import React from "react";
import styled from "styled-components";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 36px;
  box-shadow: 0 4px 16px rgb(152, 139, 165);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    box-shadow: none;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 36px;
  @media (max-width: 768px) {
    order: -1;
    border-radius: 0;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    border-color: #ff4500;
  }
`;

export { StyledContainer as Container, TextContainer, ImageContainer, Image };
