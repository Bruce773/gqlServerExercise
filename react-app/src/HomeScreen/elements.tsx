import styled from "styled-components";

export const StyledTitle = styled.div`
  font-size: 52px;
  text-align: center;
  color: #44972cf2;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  text-align: center;
  color: #abd8ff;
`;

export const Divider = styled.div<{ top?: number; bottom?: number }>`
  ${({ top }) => `margin-top: ${top}px;`}
  ${({ bottom }) => `margin-bottom: ${bottom}px;`}
`;
