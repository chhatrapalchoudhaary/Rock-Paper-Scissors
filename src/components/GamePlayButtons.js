import {Button, Image} from './styledComponents'

const GamePlayButtons = props => {
  const {
    image,
    id,
    result,
    changeStates,
    changeStateYourPlayers,
    choiceList,
  } = props

  const playersButtonClicked = () => {
    const randomNum = Math.floor(Math.random() * 3)
    const imageUrl = choiceList[randomNum].image
    const oppositonPlayerId = choiceList[randomNum].id
    console.log(randomNum)
    changeStates(imageUrl)

    if (id === 'PAPER' && oppositonPlayerId === 'ROCK') {
      const finalResult = result[1]
      changeStateYourPlayers(id, finalResult)
    } else if (id === 'SCISSORS' && oppositonPlayerId === 'ROCK') {
      const finalResult = result[2]
      changeStateYourPlayers(id, finalResult)
    } else if (id === 'ROCK' && oppositonPlayerId === 'PAPER') {
      const finalResult = result[2]
      changeStateYourPlayers(id, finalResult)
    } else if (id === 'SCISSORS' && oppositonPlayerId === 'PAPER') {
      const finalResult = result[1]
      changeStateYourPlayers(id, finalResult)
    } else if (id === 'ROCK' && oppositonPlayerId === 'SCISSORS') {
      const finalResult = result[1]
      changeStateYourPlayers(id, finalResult)
    } else if (id === 'PAPER' && oppositonPlayerId === 'SCISSORS') {
      const finalResult = result[2]
      changeStateYourPlayers(id, finalResult)
    } else if (id === oppositonPlayerId) {
      const finalResult = result[3]
      changeStateYourPlayers(id, finalResult)
    }
  }

  let testid = 'rockButton'

  if (id === 'ROCK') {
    testid = 'rockButton'
  } else if (id === 'SCISSORS') {
    testid = 'scissorsButton'
  } else if (id === 'PAPER') {
    testid = 'paperButton'
  }

  return (
    <Button type="button" data-testid={testid} onClick={playersButtonClicked}>
      <Image src={image} alt={id} />
    </Button>
  )
}
export default GamePlayButtons
