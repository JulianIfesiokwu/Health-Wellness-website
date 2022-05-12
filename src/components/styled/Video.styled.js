import styled from "styled-components";

export const StyledVideoContainer = styled.div`
  position: relative;
  width: 100%;

  :before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  video {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
