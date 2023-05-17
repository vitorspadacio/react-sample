import styled from "styled-components";
import colors from "../../../../assets/styles/colors";

export const Container = styled.section<{ url: string }>`
  ${({ url }) => `background-image: url(${url});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  
  &::after {
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
`

export const Content = styled.section`
  border-radius: 1em;
  width: 30em;
  z-index: 2;
`

export const Input = styled.div`
`

export const Details = styled.article<{ color: string }>`
  ${({ color }) => `background-color: ${color};`}
  background-position: center;
  color: white;
  display: flex;

  img {
    margin: 3%;
    min-height: 15em;
    width: 52%;
  }
`

export const Simple = styled.article<{ color: string }>`
  ${({ color }) => `background-color: ${color};`}
  align-items: center;
  color: white;
  display: flex;
  justify-content: flex-end;
  min-height: 2.25em;

  img {
    height: 4em;
    margin: auto 5em;
    width: 4em;
  }
`

export const Info = styled.div`
  padding: 0.75em 1.5em 1.5em 1.5em;
  width: 45%;
`

export const Temperature = styled.div`
  margin-bottom: 2em;
`

export const WeatherInfo = styled.div`
  p {
    margin-bottom: 0.5em;
  }
`

export const Day = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  margin-bottom: 0.5em;
  text-transform: uppercase;
`

export const WeatherText = styled.span`
  display: block;
  font-size: 1.4em;
  margin-bottom: 0.75em;
  text-transform: capitalize;
`

export const GpsIcon = styled.img`
  height: 2.5em;
  position: absolute;
  width: 2.5em;
  margin: 0.5em;
`
