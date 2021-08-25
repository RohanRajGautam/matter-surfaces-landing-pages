import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  max-width: ${(props) => props.theme.maxWidth};
  color: ${(props) => props.theme.colors.grey};
`;

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
