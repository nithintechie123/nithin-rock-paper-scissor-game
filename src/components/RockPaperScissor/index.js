import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import {
  AppContainer,
  ScoreHeadingContainer,
  HeadingsContainer,
  EachChoiceName,
  ScoreContainer,
  ScoreHeading,
  ScoreCount,
  ChoicesContainer,
  RulesButton,
  PopupContainer,
  PopupImage,
  CloseIconButton,
} from '../../styledComponents'

import ChoiceItem from '../ChoiceItem'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissor extends Component {
  state = {score: 0}

  renderRulesPopup = () => (
    <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
      {close => (
        <PopupContainer>
          <CloseIconButton
            label="true"
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <RiCloseLine />
          </CloseIconButton>
          <PopupImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
            alt="rules"
          />
        </PopupContainer>
      )}
    </Popup>
  )

  renderPlayingView = () => (
    <ChoicesContainer>
      {choicesList.map(eachChoice => (
        <ChoiceItem key={eachChoice.id} eachChoiceDetails={eachChoice} />
      ))}
    </ChoicesContainer>
  )

  render() {
    const {score} = this.state

    return (
      <AppContainer>
        <ScoreHeadingContainer>
          <HeadingsContainer>
            <EachChoiceName>Rock Paper Scissors</EachChoiceName>
          </HeadingsContainer>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <ScoreCount>{score}</ScoreCount>
          </ScoreContainer>
        </ScoreHeadingContainer>
        {this.renderPlayingView()}
        {this.renderRulesPopup()}
      </AppContainer>
    )
  }
}

export default RockPaperScissor
