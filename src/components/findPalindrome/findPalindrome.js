import React, { Component } from 'react'
import ViewFindPalindrome from './viewFindPalindrome'
import { connect } from 'react-redux'
import { changeText } from '../../actions/loadText'

class FindPalindrome extends Component {
  state = {
    longestPalindrome: '',
  }
  wrapPalindrome = word => `<span class='bg-warning'>${word}</span>`
  resetPrevPalindrome = () => this.setState({ longestPalindrome: '' })
  findLongest = () => {
    let prevPalindrome = this.state.longestPalindrome

    return {
      getActualPalindrome: () => prevPalindrome,
      check: word => {
        if (word.length > prevPalindrome.length) {
          prevPalindrome = word
        }
      }
    }
  }
  findPalindromeAlgorithm = (word, findLongest) => {
    const strLen = word.length

    for (let i = 0; i < strLen; i++) {
      if (word[i] !== word[strLen - 1 - i]) {
        return word;
      }
    }

    findLongest.check(word)

    this.setState({
      longestPalindrome: findLongest.getActualPalindrome()
    })

    return this.wrapPalindrome(word)
  }
  handleFindPalindrome = () => {
    const { text } = this.props.textData
    const regExpfindWords = /[-A-zА-я]{3,}/g
    const findLongest = this.findLongest()
    let textWithPalindrome

    this.resetPrevPalindrome()
    textWithPalindrome = text.replace(regExpfindWords, word => {
      return this.findPalindromeAlgorithm(word, findLongest)
    })

    this.props.changeText(textWithPalindrome)
  }
  render() {
    const { isParsedText, text } = this.props.textData
    const isText = text.length === 0

    return <ViewFindPalindrome
      isText={isText}
      isParsedText={isParsedText}
      longestPalindrome={this.state.longestPalindrome}
      handleFindPalindrome={this.handleFindPalindrome} />
  }
}

const mapStateToProps = ({ textData }) => ({
  textData
})

const mapDispatchToProps = (dispatch) => ({
  changeText: changeText(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FindPalindrome)
