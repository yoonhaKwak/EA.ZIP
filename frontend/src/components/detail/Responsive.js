import styled from 'styled-components';

const ResponsiveBlock = styled.div`

padding-left:1rem;
padding-right:1rem;
max-width:100%;
margin: 0 auto



`;

const Responsive = ({ children, ...rest }) => {
    return <ResponsiveBlock{...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;