import {noop} from 'lodash'

let context = {}
let changeCallback = noop

function onContextChanged(callback) {
  changeCallback = callback
}

function removeOnContextChanged() {
  changeCallback = noop
}

function getContext() {
  return context
}

function setContext(newContext) {
  context = {
    ...context,
    ...newContext
  }
  changeCallback(context)
}

export default {
  onContextChanged,
  removeOnContextChanged,
  getContext,
  setContext,
}
