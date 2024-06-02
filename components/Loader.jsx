import { ring } from "ldrs";
import styled from "styled-components";

const Loader = () => {
  ring.register();
  return (
    <CenteredDiv>
      <l-ring color="white" size="60"></l-ring>
    </CenteredDiv>
  );
};

const CenteredDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default Loader;
