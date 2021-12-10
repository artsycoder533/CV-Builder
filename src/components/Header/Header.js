import React from 'react';
import { Container, Title } from './style';

const Header = (props) => {
    const { view } = props;
    return (
        <Container>
            <Title>CV Builder</Title>
        </Container>
    )
}
export default Header;