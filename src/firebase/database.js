import { database } from './firebase'
import context from  '../context'
import {isEmpty, get, omitBy, isUndefined} from 'lodash'

export const getPeople = uid =>
  database.collection('people').where('uid', '==', uid).get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    )

export const getPerson = (personId) =>
  database.collection('people').doc(personId).get()
    .then(doc =>
      ({ id: doc.id, ...doc.data() })
    )

export const getCases = uid =>
  database.collection('cases').where('uid', '==', uid).get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    )

export const getCasesForPerson = (uid, personId) =>
  database.collection('cases')
    .where('uid', '==', uid)
    .where('personid', '==', personId).get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    )

export const getDefaultContext = async uid => {
  const people = await getPeople(uid)
  const activePerson = people.find(person => person.isDefault) || people[0]
  const cases = await getCases(uid)
  const personCases = cases.filter(kase => kase.personid === activePerson.id)
  const activeCase = personCases.find(kase => kase.isDefault) || personCases[0]
  return {
    activePerson,
    activeCase
  }
}

export const createPerson = (uid, name, isDefault = false, initialData = {}) =>
  database.collection('people').add({
    uid,
    name,
    isDefault,
    data: initialData
  })

export const createCase = (uid, personid, name, isDefault = false, initialData = {}) =>
  database.collection('cases').add({
    uid,
    personid,
    name,
    isDefault,
    data: initialData
  })

export const persistFormData = (personId, caseId, data) => {
  const promises = []
  const personData = omitBy(data.person, isUndefined)
  const caseData = omitBy(data.case, isUndefined)
  if (!isEmpty(personData)) {
    promises.push(updatePersonData(personId, personData))
  }
  if (!isEmpty(data.case)) {
    promises.push(updateCaseData(caseId, caseData))
  }
  return Promise.all(promises)
}

export const updatePersonData = (personId, data) => {
  // Update active person data in context
  const activePerson = get(context.getContext(), 'activePerson', {})
  if (activePerson.id === personId) {
    context.setContext({
      activePerson: {
        ...activePerson,
        data
      }
    })
  }
  return database.collection('people').doc(personId).update({
    data
  })
}

export const updateCaseData = (caseId, data) => {
  // Update active case data in context
  const activeCase = get(context.getContext(), 'activeCase', {})
  if (activeCase.id === caseId) {
    context.setContext({
      activeCase: {
        ...activeCase,
        data
      }
    })
  }
  return database.collection('cases').doc(caseId).update({
    data
  })
}
