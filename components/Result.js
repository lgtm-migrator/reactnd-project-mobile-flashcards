import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TextButton from './TextButton'

class Result extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params
    return {
      title: `${deckTitle} Quiz Result`
    }
  }

  restartQuiz = () => {
    const { navigation } = this.props
    const { deckTitle, totalCards } = navigation.state.params
    navigation.navigate(
      'Quiz',
      {
        deckTitle,
        cardIndex: 0,
        totalCards,
        score: 0
      }
    )
  }

  showDeck = () => {
    const { navigation } = this.props
    const { deckTitle } = navigation.state.params

    navigation.navigate(
      'DeckDetail',
      { deckTitle }
    )
  }

  render() {
    const { score, totalCards } = this.props.navigation.state.params
    const scorePercentage = (score / (totalCards) * 100).toFixed(2)
    return (
      <View>
        <Text>{score} out of {totalCards} were correct</Text>
        <Text>Score: {scorePercentage}%</Text>
        <TextButton style={{margin: 20}}
          onPress={this.restartQuiz} >
          Restart Quiz
        </TextButton>
        <TextButton style={{margin: 20}}
          onPress={this.showDeck} >
          Back to Deck
        </TextButton>
      </View>
    )
  }
}

export default Result
