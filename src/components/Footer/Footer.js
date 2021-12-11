import React from "react";
import {
  StyledFooter,
  StyledLeftIcon,
  StyledRightIcon,
  StyledSendIcon,
} from "./style";
import { StyledButton, StyledDisabledButton } from "../Button/style";

const Footer = (props) => {
  const { prevView, nextView, view, valid } = props;

  return (
    <StyledFooter>
      {view === 0 ? (
        ""
      ) : (valid === true ?<StyledButton onClick={prevView}>
          <StyledLeftIcon />
        </StyledButton> :
        <StyledDisabledButton onClick={prevView}>
          <StyledLeftIcon />
        </StyledDisabledButton>
      )}
      {view > 2 && view < 4 ? (
        valid === true ? (
          <StyledButton onClick={nextView}>
            Generate <StyledSendIcon />
          </StyledButton>
        ) : (
          <StyledDisabledButton disabled onClick={nextView}>
            Generate <StyledSendIcon />
          </StyledDisabledButton>
        )
      ) : view > 3 ? (
        ""
      ) : valid === true ? (
        <StyledButton onClick={nextView}>
          <StyledRightIcon />
        </StyledButton>
      ) : (
        <StyledDisabledButton disabled onClick={nextView}>
          <StyledRightIcon />
        </StyledDisabledButton>
      )}
    </StyledFooter>
  );
};

export default Footer;
