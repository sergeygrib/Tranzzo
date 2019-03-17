import React from 'react'
import { Row, Col } from 'reactstrap'
import ReadFile from '../readFile'
import FindPalindrome from '../findPalindrome'
import TextArea from '../textArea'

const SplitByGrid = () => {
  return (
    <div className='my-2'>
      <Row>
        <Col>
          <ReadFile />
        </Col>
        <Col>
          <FindPalindrome />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextArea />
        </Col>
      </Row>
    </div>
  )
}

export default SplitByGrid