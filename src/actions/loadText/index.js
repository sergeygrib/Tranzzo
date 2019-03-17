import Reader from '../../services/reader'
import { addText, loadText, parsedText, deleteText as actionDelete } from './creators'

const ReaderAPI = new Reader()

const readText = dispatch => file => {
  dispatch(loadText())

  return ReaderAPI.getText(file)
    .then(text => dispatch(addText(text, file.name)))
    .catch(errorMessage => console.error(errorMessage))
}

export const changeText = dispatch => newText => {
  dispatch(parsedText(newText))
}

export const deleteText = dispatch => () => {
  dispatch(actionDelete())
}

export default readText