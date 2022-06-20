import React from "react";
import styled from 'styled-components';
import ContactImage from "./ContactImage";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HeaderFrame = styled.div`
display: flex;
margin: auto;
justify-content: center;
padding: 20px
`;

const HeaderH2 = styled.h2`
margin: auto;
`;

const HeaderH5 = styled.h5`
color: #9e9b9b;
margin-bottom: 5px;
text-align: left;
`;

const HeaderSupport = styled.div`
margin-top: auto;
margin-right: auto;
margin-bottom: auto;
`;

const HeaderAbout = styled.div`
display: flex;
`;

const HeaderContact = styled.div`
padding-left: 10px;
`;

const Name = styled.div`
font-weight: bold;
text-align: left;
`;

const Information = styled.div`
color: #9e9b9b;
display: flex;
grid-gap: 1rem;
`;
export const Header = ({props}) => {
  console.log(props);

  return (
    <HeaderFrame>
      <HeaderH2>Account Overview</HeaderH2>
      <HeaderSupport>
        <HeaderH5>YOUR FEEFO SUPPORT CONTACT</HeaderH5>
        <HeaderAbout>
            <ContactImage props={props.supportContact}/>
            <HeaderContact>
                <Name>{props.supportContact.name}</Name>
                <Information>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <label>{props.supportContact.email}</label>
                  <label>{props.supportContact.number}</label>
                </Information>
            </HeaderContact>
        </HeaderAbout>
      </HeaderSupport>
    </HeaderFrame>
  )
}

Header.propTypes = {
  supportContact: PropTypes.object,
}

export default Header;