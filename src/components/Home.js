import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GamePlayButtons from './GamePlayButtons'
import {
  Container,
  ResultBox,
  Title,
  ScoreButton,
  RuleButton,
  ButtonContainers,
  InnerContainer,
  Span,
  Score,
  PopupContainer,
  RuleImage,
  ClosePopupButton,
  ContainerCenter,
} from './styledComponents'
import ResultArea from './ResultArea'

const result = ['none', 'YOU WON', 'YOU LOSE', 'IT IS DRAW']

class Home extends Component {
  state = {
    score: 0,
    isWon: result[0],
    showResult: false,
    opponentPlayer: '',
    yourPlayer: '',
  }

  changeStates = ref => {
    this.setState(prevState => ({
      showResult: !prevState.showResult,
      opponentPlayer: ref,
    }))
  }

  changeStateYourPlayers = (id, finalResult) => {
    const {choicesList} = this.props

    let image = ''
    if (id === 'ROCK') {
      image = choicesList[0].image
    } else if (id === 'SCISSORS') {
      image = choicesList[1].image
    } else if (id === 'PAPER') {
      image = choicesList[2].image
    }

    if (finalResult === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (finalResult === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (finalResult === 'IT IS DRAW') {
      this.setState(prevState => ({score: prevState.score}))
    }

    this.setState({
      yourPlayer: image,
      isWon: finalResult,
    })
  }

  renderPlayArea = () => {
    const {choicesList} = this.props
    const {showResult} = this.state
    return (
      <ButtonContainers>
        {choicesList.map(each => (
          <GamePlayButtons
            key={each.id}
            id={each.id}
            image={each.image}
            choiceList={choicesList}
            result={result}
            showResult={showResult}
            changeStates={this.changeStates}
            changeStateYourPlayers={this.changeStateYourPlayers}
          />
        ))}
      </ButtonContainers>
    )
  }

  renderResultArea = () => {
    const {opponentPlayer, yourPlayer, isWon} = this.state
    return (
      <ResultArea
        changeStates={this.changeStates}
        opponentPlayer={opponentPlayer}
        yourPlayer={yourPlayer}
        isWon={isWon}
      />
    )
  }

  render() {
    const {score, showResult} = this.state

    const renderScreen = showResult
      ? this.renderResultArea()
      : this.renderPlayArea()
    return (
      <Container>
        <InnerContainer>
          <ResultBox>
            <Title>
              Rock <br /> Paper <br /> Scissors
            </Title>
            <ScoreButton>
              <Span>Score</Span> <br />
              <Score>{score}</Score>
            </ScoreButton>
          </ResultBox>
          {renderScreen}
          <Popup modal trigger={<RuleButton type="button">Rules</RuleButton>}>
            {close => (
              <>
                <ContainerCenter>
                  <ClosePopupButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </ClosePopupButton>
                  <PopupContainer>
                    <RuleImage
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </PopupContainer>
                </ContainerCenter>
              </>
            )}
          </Popup>
        </InnerContainer>
      </Container>
    )
  }
}

export default Home
