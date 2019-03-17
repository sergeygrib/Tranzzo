import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Button } from 'reactstrap'
import { deleteText } from '../../actions/loadText'

const styles = {
  cardBody: {
    minHeight: 200
  }
}

class TextArea extends Component {
  handleDelete = () => {
    this.props.deleteText()
  }
  render() {
    const { text } = this.props.textData
    return (
      <Card outline color='p-0 mt-4'>
        <CardHeader className='d-flex align-items-center justify-content-between'>
          <h6 className='d-flex m-0'>Text from your file</h6>
          <Button
            size='xs'
            color='danger'
            disabled={text.length === 0}
            onClick={this.handleDelete}>
            Delete</Button>
        </CardHeader>
        <CardBody style={styles.cardBody}>
          <p
            className='text-muted'
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </CardBody>
      </Card>
    )
  }
}
const mapStateToProps = ({ textData }) => ({
  textData
})
const mapDispatchToProps = (dispatch) => ({
  deleteText: deleteText(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextArea)