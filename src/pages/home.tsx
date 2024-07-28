import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  width: 12rem;
  height: 6rem;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #D9D9D9;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s;
  &:hover {
    background-color: rgb(158, 85, 226);
    fill: white;
  }
`
const Box = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: end;
`
const H = styled.h1`
  font-size: 3.5rem;
  text-align: center;
`
const S = styled.span`
  background-color: black;
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  color: white;
`

export default function Home(){
  
  return(
      <Box className='flex' id='box'>
          <H>Hello <S>World</S></H>
          <Link to='learn'>
              <Button>   
                  <svg xmlns="http://www.w3.org/2000/svg" height="52px" viewBox="0 -960 960 960" width="52px"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>
              </Button></Link>
      </Box>
  )
}