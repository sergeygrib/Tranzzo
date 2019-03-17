import React from 'react'
import { Card, Badge, CardHeader, CardBody, Button } from 'reactstrap'

const ViewFindPalindrome = props => {
  const { longestPalindrome, isParsedText, isText, handleFindPalindrome } = props
  const showLongestPalindrome = () => {
    if (isParsedText && longestPalindrome) {
      return (
        <Badge color='light' className='ml-4'>
          <h5 className='m-0'>
            {`The longest: ${longestPalindrome}`}
          </h5>
        </Badge>
      )
    }
  }

  return (
    <Card outline color='p-0'>
      <CardHeader>Find all palindrome and the longest one</CardHeader>
      <CardBody>
        <Button
          size='xs'
          color='primary'
          disabled={isText || isParsedText}
          onClick={handleFindPalindrome}>
          Find palindromes</Button>
        {showLongestPalindrome()}
      </CardBody>
    </Card>
  )
}

export default ViewFindPalindrome