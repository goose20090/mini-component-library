/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper>
      <Label id="loadinglabel">{value} %</Label>
      <BarWrapper
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
      >
        <OuterBar>
          <InnerBar value={value} />
        </OuterBar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Label = styled.span`
  position: relative;
  top: -6px;
  width: 300px;
`;

const BarWrapper = styled.span``;

const OuterBar = styled.div`
  display: inline-block;
  height: 24px;
  width: 372px;
  background-color: ${COLORS.transparentGray15};
  position: relative;
  border-radius: 8px;
  left: 30px;
`;

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px ${(props) => (props.value === 100 ? "4px" : 0)}
    ${(props) => (props.value === 100 ? "4px" : 0)} 4px;
  position: absolute;
  top: 4px;
  left: 4px;
  bottom: 4px;
  right: ${(props) => 372 - props.value * 3.72 + 4}px;
`;

export default ProgressBar;
