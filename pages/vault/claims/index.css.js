import styled from 'styled-components';

export default styled.div`
  header {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--gray-300);
    height: 40px;
  }

  header h4 {
    font-size: 20px;
  }

  @media screen and (min-width: 992px) {
    header h4 {
      font-size: 24px;
    }
  }
`;