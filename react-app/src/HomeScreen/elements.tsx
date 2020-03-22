import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const StyledTitle = styled(Typography)`
  && {
    font-size: 40px;
  }
  text-align: center;
  color: #fff;
`;

export const Subtitle = styled(Typography)`
  font-size: 20px;
  text-align: center;
  color: #abd8ff;
  && {
    font-weight: 400;
  }
`;

export const Divider = styled.div<{ top?: number; bottom?: number }>`
  ${({ top }) => top && `margin-top: ${top}px;`}
  ${({ bottom }) => bottom && `margin-bottom: ${bottom}px;`}
`;
