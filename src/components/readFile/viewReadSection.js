import React from 'react'
import { Card, Badge, CardHeader, CardBody, Button } from 'reactstrap'
import ReactFileReader from 'react-file-reader'

const ViewReadSection = props => {
  const { fileTypes, handleFiles, fileName } = props
  const showCurrentFile = () => {
    if (fileName) {
      return (
        <Badge color='light' className='d-inline-flex ml-4'>
          <h5 className='m-0'>
            {`Current file: ${fileName}`}
          </h5>
        </Badge>
      )
    }
  }
  return (
    <Card outline color='p-0'>
      <CardHeader>Choose your text file</CardHeader>
      <CardBody className='d-flex align-items-center'>
        <div className='d-inline-flex'>
          <ReactFileReader
            fileTypes={fileTypes}
            handleFiles={handleFiles}>
            <Button size='xs' color='success'>Upload file</Button>
          </ReactFileReader>
        </div>
        {showCurrentFile()}
      </CardBody>
    </Card>
  )
}

export default ViewReadSection