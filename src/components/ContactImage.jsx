import React from "react";
import styled from 'styled-components';
import { PropTypes } from "prop-types";

const ContactImageFrame = styled.div`
background-color: #f9cf03;
border-radius: 5px;
height: 35px;
width: 35px;
`;

const ContactImageLetter = styled.div`
vertical-align: middle;
font-weight: bold;
margin: auto;
line-height: 2.2em;
`;

export const ContactImage = ({props}) => {
  console.log(props);

  return (
    <ContactImageFrame>
        <ContactImageLetter>{props.name.charAt(0)}</ContactImageLetter>
    </ContactImageFrame>
  )
}

ContactImage.propTypes = {
  name: PropTypes.string
}

export default ContactImage;