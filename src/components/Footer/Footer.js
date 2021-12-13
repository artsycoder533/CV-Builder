import React from "react";
import {
  StyledFooter,
  StyledLeftIcon,
  StyledRightIcon,
  StyledSendIcon,
} from "./style";
import { StyledButton, StyledDisabledButton } from "../Button/style";

const Footer = (props) => {
  const { prevView, nextView, view, valid, resetCV } = props;
  return (
    <StyledFooter>
      {valid !== true ? (
        <React.Fragment>
          <StyledDisabledButton
            disabled
            onClick={prevView}
            aria-label="previous section button">
            <StyledLeftIcon />
          </StyledDisabledButton>
          <StyledDisabledButton
            disabled
            onClick={nextView}
            aria-label="next section button">
            <StyledRightIcon />
          </StyledDisabledButton>
        </React.Fragment>
      ) : view === 0 ? (
        <React.Fragment>
          <StyledDisabledButton
            disabled
            onClick={prevView}
            aria-label="previous section button">
            <StyledLeftIcon />
          </StyledDisabledButton>
          <StyledButton onClick={nextView} aria-label="next section button">
            <StyledRightIcon />
          </StyledButton>
        </React.Fragment>
      ) : view === 3 ? (
        <React.Fragment>
          <StyledButton onClick={prevView} aria-label="previous section button">
            <StyledLeftIcon />
          </StyledButton>
          <StyledButton onClick={nextView}>
            Generate <StyledSendIcon />
          </StyledButton>
        </React.Fragment>
      ) : view === 4 ? (
        <React.Fragment>
          <StyledButton onClick={prevView} aria-label="previous section button">
            <StyledLeftIcon />
          </StyledButton>{" "}
          <StyledButton onClick={resetCV}>Reset CV</StyledButton>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StyledButton onClick={prevView} aria-label="previous section button">
            <StyledLeftIcon />
          </StyledButton>
          <StyledButton onClick={nextView} aria-label="next section button">
            <StyledRightIcon />
          </StyledButton>
        </React.Fragment>
      )}
    </StyledFooter>
  );
};

export default Footer;
