import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  background-size: cover;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ScoreHeadingContainer = styled.div`
  border: 3px solid #ffffff;
  border-radius: 6px;
  padding: 10 px;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeadingsContainer = styled.div`
  color: #ffffff;
  font-family: 'Bree Serif';
`

export const EachChoiceName = styled.h1`
  margin: 10px;
  width: 50px;
  line-height: 1.8;
  font-size: 20px;
  font-weight: 500;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  margin: 10px;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #223a5f;
  font-weight: 500;
`

export const ScoreHeading = styled.p`
  margin: 0px;
  font-family: 'Bree Serif';
`

export const ScoreCount = styled.p`
  margin: 0px;
  font-size: 1.5rem;
  font-family: 'Roboto';
`
export const ChoicesContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  margin-top: 40px;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  border-radius: 6px;
  border-width: 0px;
  outline: none;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: 500;
  width: 80px;
  padding: 6px;
  cursor: pointer;
  margin-left: 600px;
`
export const EachChoiceItem = styled.li``

export const EachChoiceButton = styled.button`
  outline: none;
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
`

export const EachChoiceImage = styled.img`
  width: 140px;
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
  width: 40vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`

export const CloseIconButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
`

export const PopupImage = styled.img`
  width: 100%;
`
