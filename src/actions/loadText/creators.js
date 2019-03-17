import {
  TEXT_LOADING,
  TEXT_SUCCESS,
  TEXT_DELETE,
  TEXT_CHANGED,
} from '../../constants/loadText'

export const loadText = () => {
  return {
    type: TEXT_LOADING,
    payload: {
      isLoading: true,
    }
  }
}

export const addText = (text, fileName) => {
  return {
    type: TEXT_SUCCESS,
    payload: {
      text,
      fileName,
      isParsedText: false,
      isLoading: false,
    }
  }
}

export const parsedText = text => {
  return {
    type: TEXT_CHANGED,
    payload: {
      text,
      isParsedText: true,
      isLoading: false,
    }
  }
}

export const deleteText = text => {
  return {
    type: TEXT_DELETE,
    payload: {
      text: '',
      isParsedText: false,
      isLoading: false,
    }
  }
}