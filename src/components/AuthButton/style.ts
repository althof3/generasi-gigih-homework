import styled from "@emotion/styled";

export const StyledProfile = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  margin: auto;
  width: fit-content;
  background: #444444;
  padding: 0 0.5rem;
  border-radius: 0.5rem;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  img {
    object-fit: contain;
    width: 3rem;
    border-radius: 50%;
  }

  button {
    margin-top: unset;
  }
`;
