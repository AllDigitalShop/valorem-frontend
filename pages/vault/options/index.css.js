import styled from 'styled-components';

export default styled.div`
  header {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--gray-300);
    height: 60px;
  }

  header h4 {
    font-size: 20px;
  }

  header button {
    margin-left: auto;
  }

  .options ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .options ul li {
    background: #fff;
    padding: 30px;
    border-radius: 3px;
    border: 1px solid var(--gray-400);
  }

  .options ul li:hover {
    transform: scale(1.01, 1.01);
    box-shadow: var(--box-shadow-light);
    border: 1px solid var(--purple-blue);
    z-index: 10;
    cursor: pointer;
  }

  .options ul li .option-row {
    display: flex;
  }

  .options ul li .option-row .option-datapoint {
    width: 100%;
  }

  .options ul li .option-row:not(:last-child) {
    margin-bottom: 25px;
  }

  .options ul li .option-row h5 {
    font-size: 16px;
    margin-bottom: 10px;
    color: var(--gray-600);
    text-shadow: 0px 1px 1px var(--white);
  }
  
  .options ul li .option-row h4 {
    font-size: 24px;
    color: var(--purple-blue);
    text-shadow: 0px 1px 1px var(--white);
  }

  @media screen and (min-width: 992px) {
    header h4 {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1290px) {
    .options ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;