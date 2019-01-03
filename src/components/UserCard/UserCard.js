import React from 'react';
import styled from 'styled-components';
// import { Link as A } from 'react-router-dom';
import { H1, P } from 'layout';
import {
  blue,
  borderColor,
  borderRadius,
  borderRadiusSm,
  gray,
  purple,
  sentinelFont,
  teal,
  white,
  wilson,
  textGray,
} from 'constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100% - 72px) / 4);
  margin-bottom: 20px;
  margin-left: 12px;
  margin-right: 12px;

  &:nth-child(4n + 4) {
    margin-right: 0;
  }

  &:nth-child(4n + 1) {
    margin-left: 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const ProfilePic = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
  background-color: ${wilson};
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  box-sizing: border-box;
  border: 1px solid ${borderColor};
  border-top: none;
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  height: 120px;
`;
// TODO: hardcoded height

const Name = styled(H1)`
  text-align: center;
  line-height: 1.1;
  font-style: italic;
  font-size: 22px;
  margin: 4px;
`;

const Username = styled(P)`
  font-weight: 400;
`;

const Status = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: ${textGray};
  letter-spacing: 3px;
  padding: 4px 6px 4px 8px;
  border: 1px solid
    ${props => {
      switch (props.status) {
        case 'A':
          return blue;
        case 'I':
          return purple;
        default:
          return teal;
      }
    }};
  margin: 8px 0 6px;
  text-align: center;
  border-radius: ${borderRadiusSm};
`;

const Joined = styled(P)`
  font-size: 12px;
  font-weight: 300;
  color: ${gray};
  margin: 2px;
`;

const ColoredBar = styled.div`
  height: 4px;
  width: 100%;
  background-color: ${props => {
    switch (props.status) {
      case 'A':
        return blue;
      case 'I':
        return purple;
      default:
        return teal;
    }
  }};
`;

const statuses = {
  A: 'Alumni',
  M: 'Member',
  I: 'Inactive',
};
export default class UserCard extends React.Component {
  render() {
    var { user } = this.props;
    var joinSem =
      user.roles.length === 0
        ? null
        : user.roles[user.roles.length - 1].team.semester;
    const numSemesters = user.roles.length;
    return (
      <Container>
        <Link to={`/users/${user.id}`}>
          {/* <ProfilePic src={this.props.uri + user.profile_picture} /> */}
          <ProfilePic src={'static/img/default.jpg'} />
          <ColoredBar status={user.status} />
          <UserInfo>
            <Name>
              {user.first_name} {user.last_name}
            </Name>
            <Joined>
              {/* TODO placeholder */}
              {numSemesters === 0
                ? '1 semester'
                : `${numSemesters} semester${numSemesters > 1 ? 's' : ''}`}
            </Joined>
            {/* <Username>@{user.username}</Username> */}
            <Status status={user.status ? user.status[0].toUpperCase() : ''}>
              {statuses[user.status]}
            </Status>
          </UserInfo>
        </Link>
      </Container>
    );
  }
}
