import React from "react";
import styled from 'styled-components';
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import PercentageField from "./PercentageField";

const SalesFrame = styled.div`
width: 80%;
justify-content: center;
background-color: #fff;
margin: auto;
box-shadow: 0 2px 5px 0px;
border-radius: 5px;
`;

const SalesDiv = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`;

const SalesFirst = styled.div`
display: flex;
text-align: start;
`;

const SalesSecond = styled.div`
display: flex;
`;

const SalesIcon = styled.div`
color: #61dafb;
padding-right: 5px;
`;

const SalesIconInfo = styled.div`
color: #bfbbbb;
`;

const Word = styled.span`
font-weight: bold;
`;

export const Sales = ({props}) => {
    

    return (
    <SalesFrame>
        <SalesDiv>
            <SalesFirst>
                <SalesIcon><FontAwesomeIcon icon={faUpload} /></SalesIcon>
                <Word>Sales</Word>
            </SalesFirst>
            <SalesIconInfo><FontAwesomeIcon icon={faInfoCircle} /></SalesIconInfo>
        </SalesDiv>
        <SalesDiv>
            <span>You had <Word>{props.uploads} uploads</Word> and <Word>{props.linesAttempted}</Word> lines added.</span>
        </SalesDiv>
        <SalesSecond>
            <PercentageField value={props.successfulUploads} total={props.uploads} word={"Upload Success"}/>
            <PercentageField value={props.linesSaved} total={props.linesAttempted} word={"Lines Saved"}/>
        </SalesSecond>
    </SalesFrame>
    )
}

Sales.propTypes = {
    uploads: PropTypes.number,
    successfulUploads: PropTypes.number,
    linesAttempted: PropTypes.number,
    linesSaved: PropTypes.number,
}

export default Sales;