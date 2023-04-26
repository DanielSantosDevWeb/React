import styled from 'styled-components'

export const NavBarStyled = styled.div`

  display: flex;
  justify-content: space-between;
  background-color: #000000;
  padding: 20px;
  color: #fff;

  & input {
    height: 30px;
    width: 60%;
    padding: 8px;
    font-size: 20px;
  }
  
  & ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    position: fixed;
    overflow: hidden;
    background-color: #fdfdfd;
    right: 0;
    list-style: none;
    transition: all .4s  ;
    border: 1px solid #eee;
    width: ${(prop) => (
    prop.children[3].props.tamanho
  )

  };
    top: 0;
    height: 100%;

    li {
      width: 90%;
      height: 40px;
      display: flex;
      justify-content: center;
      border: 1px solid #eee;
    }

    li a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #eee;
      
    }

    & .close {
      font-family: Arial, Helvetica, sans-serif;
      margin-right: 80%;
      font-size: 30px;
      font-weight: bold;
      padding: 10px;
      cursor: pointer;
    }
  }

  & .hamburguer {
    cursor: pointer;
  }

  & .hamburguer div {
    background-color: black;
    width: 30px;
    height: 4px;
    margin: 5px;
  }

  @media screen and (min-width:600px) and (max-width:1000px) {
    ul {  
      background-color: #ffffff00;
      flex-direction: row;
      position: static;
      justify-content: right;
      border: 0;
      width: 30%;
    }

    ul li {
      border: 0;
    }


    & .close {
      display: none;
    }

    & .hamburguer {
      display: none;
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 20px 20% 20px 50px;

    ul {  
      background-color: #ffffff00;
      flex-direction: row;
      position: static;
      justify-content: right;
      border: 0;
      width: 30%;
    }

    ul li {
      border: 0;
    }


    & .close {
      display: none;
    }

    & .hamburguer {
      display: none;
    }
  }

`
