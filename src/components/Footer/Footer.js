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
  console.log(valid, typeof valid);
  return (
    <StyledFooter>
      {valid !== true ? (
        <React.Fragment>
          <StyledDisabledButton disabled onClick={prevView}>
            <StyledLeftIcon />
          </StyledDisabledButton>
          <StyledDisabledButton disabled onClick={nextView}>
            <StyledRightIcon />
          </StyledDisabledButton>
        </React.Fragment>
      ) : view === 0 ? (
        <React.Fragment>
          <StyledDisabledButton disabled onClick={prevView}>
            <StyledLeftIcon />
          </StyledDisabledButton>
          <StyledButton onClick={nextView}>
            <StyledRightIcon />
          </StyledButton>
        </React.Fragment>
      ) : view === 3 ? (
        <React.Fragment>
          <StyledButton onClick={prevView}>
            <StyledLeftIcon />
          </StyledButton>
          <StyledButton onClick={nextView}>
            Generate <StyledSendIcon />
          </StyledButton>
        </React.Fragment>
      ) : view === 4 ? (
        <React.Fragment>
          <StyledButton onClick={prevView}>
            <StyledLeftIcon />
          </StyledButton>{" "}
          <StyledButton onClick={resetCV}>
            Reset CV
          </StyledButton>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StyledButton onClick={prevView}>
            <StyledLeftIcon />
          </StyledButton>
          <StyledButton onClick={nextView}>
            <StyledRightIcon />
          </StyledButton>
        </React.Fragment>
      )}
    </StyledFooter>
  );
};

export default Footer;
