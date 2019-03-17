import textState from './textState'
import {
  TEXT_LOADING,
  TEXT_SUCCESS,
  TEXT_CHANGED,
  TEXT_DELETE,
  TEXT_FAILURE,
} from '../../constants/loadText'

const textData = (state = textState, { type, payload }) => {
  switch (type) {
    case (TEXT_LOADING): {
      return { ...state, isLoading: true }
    }
    case (TEXT_SUCCESS):
    case (TEXT_CHANGED): {
      return {
        ...state,
        ...payload,
        isLoading: false
      }
    }
    case (TEXT_DELETE): {
      return {
        ...state,
        text: '',
        fileName: '',
        isLoading: false,
        isParsedText: false
      }
    }
    case (TEXT_FAILURE):
    default:
      return { ...state }
  }
}

export default textData