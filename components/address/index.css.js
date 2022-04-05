import styled from 'styled-components';

export default styled.div`
  position: relative;

  .address-cap {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background: var(--purple-blue);
    border-radius: 3px 0px 0px 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    border: 1px solid #273e8c;
    color: var(--white);
  }

  input {
    padding-left: 110px;
  }
`;