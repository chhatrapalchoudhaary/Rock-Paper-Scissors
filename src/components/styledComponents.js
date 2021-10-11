import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #1d3959;
  padding: 30px;
  overflow: auto;
`
export const InnerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 30px;
`
export const ResultBox = styled.div`
  width: 100%;
  padding: 20px 40px;
  border: 1px solid white;
  border-radius: 20px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.h1`
  line-height: 1.2;
  color: white;
  font-family: Roboto;
  font-size: 36px;
`
export const ScoreButton = styled.div`
  padding: 15px 25px;
  height: 100%;
  border-radius: 20px;
  background-color: white;
  text-align: center;
`
export const RuleButton = styled.button`
  margin-top: 100px;
  width: 120px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid;
  font-family: Roboto;
  font-size: 16px;
  font-weight: solid;
  align-self: flex-end;
`
export const ButtonContainers = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 100px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
`
export const Image = styled.img`
  width: 200px;
`
export const Span = styled.p`
  color: #1d3959;
  font-family: Roboto;
  font-size: 30px;
  line-height: 0;
`
export const Score = styled.p`
  color: #1d3959;
  font-family: Roboto;
  font-size: 60px;
  line-height: 0;
`
export const PopupContainer = styled.div`
  background-color: white;
  padding: 10px;

  width: 50%;
`
export const RuleImage = styled.img`
  width: 100%;
`
export const ClosePopupButton = styled.button`
  background-color: white;
  align-self: flex-end;
  margin-right: 25vw;
`
export const ContainerCenter = styled.div`
  margin-top: 50px;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const Box = styled.div`
  margin-top: 70px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
export const Player = styled.div`
  text-align: center;
`
export const PlayerTitle = styled.h1`
  font-size: 24px;
  color: white;
`
export const ResultTitle = styled.p`
  color: white;
`
export const PlayAgianButton = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid;
  font-family: Roboto;
  font-size: 16px;
  font-weight: solid;
  align-self: center;
`
