import React, {useState} from "react";
import { Container, Step, StyledFiCheck, StyledStatus, Circle } from "./style";

const ProgressBar = (props) => {
    const [pages, setPages] = useState(["General", "Education", "Experience", "Skills"]);
    const { view } = props;
    return (
      <Container>
        {pages.map((page, index) => {
          return (
            <Step>
              {/* if view is equal to index add active class*/}
              {view >= index + 1 ? (
                <Circle current>
                  <StyledFiCheck />
                </Circle>
              ) : (
                <Circle>{index + 1}</Circle>
              )}
              {view === index ? (
                <StyledStatus bold>{page}</StyledStatus>
              ) : (
                <StyledStatus>{page}</StyledStatus>
              )}
            </Step>
          );
        })}
      </Container>
    );
};

export default ProgressBar;