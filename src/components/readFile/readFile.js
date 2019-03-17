import React, { Component } from 'react'
import { connect } from 'react-redux'
import readText from '../../actions/loadText'
import ViewReadSection from './viewReadSection'

class ReadFile extends Component {
  state = {
    fileTypes: 'text/*',
  }

  handleFiles = ({ 0: file }) => {
    this.props.readText(file)
  }

  render() {
    return (
      <ViewReadSection
        fileName={this.props.textData.fileName}
        fileTypes={this.state.fileTypes}
        handleFiles={this.handleFiles} />
    )
  }
}

const mapStateToProps = ({ textData }) => ({
  textData
})

const mapDispatchToProps = dispatch => ({
  readText: readText(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadFile)