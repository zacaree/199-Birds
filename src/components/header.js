import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import gatsbyLogo from '../images/gatsby-icon.png';

const Header = ({ siteTitle }) => (
  <HeaderCtr>
    <HeaderWrap>
      <Link to="/">
        <img src={gatsbyLogo} alt="" />
        <h2 style={{ margin: 0 }}>{siteTitle}</h2>
      </Link>
    </HeaderWrap>
  </HeaderCtr>
);

export default Header;

// --------
// Proptypes
// --------
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

// --------
// Styles
// --------
const HeaderCtr = styled.div`
  background: hsla(0, 0%, 100%, 0.96);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  img {
    width: 40px;
    margin-bottom: 0;
  }
`;

const HeaderWrap = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  a {
    color: rebeccapurple;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
