import React from 'react';
// import { Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { About, Education, Scout, Work } from 'components';
import { brixSansFont, borderColor, orange, textGray, wilson } from 'constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 25px;
  box-sizing: border-box;
  //background: ${wilson};
`;

const SubNav = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${borderColor};
  align-items: center;
  margin-bottom: 20px;
`;

const SubNavLink = styled.a`
  position: relative;
  padding: 10px 12px;
  text-decoration: none;
  font-family: ${brixSansFont};
  font-weight: ${props => (props.active ? 500 : 300)};
  font-size: 22px;
  color: ${textGray};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${props => (props.active ? '3px' : '0px')};
    background-color: ${orange};
    transition: 0.1s ease-out;
  }
`;

export default class TabView extends React.Component {
  render() {
    var { onClick } = this.props;
    return (
      <Container>
        <SubNav>
          {/*<SubNavLink exact to={`${match.url}`}>About</SubNavLink>*/}
          <SubNavLink active onClick={onClick}>
            Scout
          </SubNavLink>
          <SubNavLink onClick={onClick}>Education</SubNavLink>
          <SubNavLink onClick={onClick}>Work</SubNavLink>
        </SubNav>
      </Container>
    );
  }
}
