import React from 'react';
import styled from 'styled-components';
import './account-overview.css';
import { PropTypes } from "prop-types";
import Header from './components/Header';
import Sales from './components/Sales';

const Frame = styled.div`
  background-color: #f4f4f4;
  height: 100vh;
  margin: auto;
`;

export const AccountOverview = ({props}) => {

  return (
    <Frame>
      <Header props={props}/>
      <Sales props={props.salesOverview}/>
    </Frame>
  )
}

AccountOverview.propTypes = {
  supportContact: PropTypes.object,
  salesOverview: PropTypes.object,
}

export default AccountOverview;