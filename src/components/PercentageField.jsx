import React,{ useEffect, useState } from "react";
import styled from 'styled-components';

const PercentageFrame = styled.div`
padding: 20px;
text-align: start;
width: 50%;
`;

const PercentageInfo = styled.div`
color: #22ab55;
font-weight: bold;
font-size: 32px;
`;

const PercentageWord = styled.label`
color: #9b9898;
font-weight: bold;
`;

export const PercentageField = ({value, total, word}) => {

    const[percentage, setPercentage] = useState("0");

    useEffect(() => {
        setPercentage(((value / total) * 100).toString().replace(".", ","));
    }, [value, total]);

  return (
    <PercentageFrame>
        <PercentageInfo>
            {percentage}%
        </PercentageInfo>
        <PercentageWord>
            {word}
        </PercentageWord>
    </PercentageFrame>
  )
}

export default PercentageField;