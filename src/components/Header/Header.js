import React from 'react';
import { Container, Title, StyledDownloadIcon } from './style';
import { DownloadButton } from '../Button/style';

const Header = (props) => {
    const { view } = props;
    return (
      <Container>
        <Title>CV Builder</Title>
        {/* {view === 4 ? (
          <DownloadButton className="hide" onClick={() => window.print()}>
            {" "}
            <StyledDownloadIcon />
          </DownloadButton>
        ) : (
          ""
        )} */}
      </Container>
    );
}
export default Header;