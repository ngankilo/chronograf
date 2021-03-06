// Constants
import {functions} from 'src/flux/constants'

// Types
import {Suggestion} from 'src/types/flux'

export const getSuggestions = (): Suggestion[] => {
  return functions.map(({args, name}) => {
    const params = args.reduce((acc, {name: argName, type}) => {
      acc[argName] = type
      return acc
    }, {})

    return {name, params}
  })
}
