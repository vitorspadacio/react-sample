import { PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import {
  all, call, put, takeEvery,
} from 'redux-saga/effects'
import Navigator from '../../components/Navigation/Navigator'
import processError from '../../infrastructure/process-error'
import { actions as appActions } from '../state'
import AuthApi from './AuthApi'
import { actions } from './AuthState'
import { LoginForm } from './LoginPage/Login.schemas'
import { RegisterForm } from './RegisterPage/Register.schemas'

function* logIn(action: PayloadAction<LoginForm>) {
  yield put(appActions.addLoadingStack())
  const { email, password } = action.payload

  try {
    const { user } = yield call(AuthApi.signIn, email, password)
    yield put(actions.setUser(user))
    Navigator.navigate('/')
  } catch (error) {
    toast.error(processError[error.code] || error.code)
  } finally {
    yield put(appActions.removeLoadingStack())
  }
}

function* googleLogIn() {
  yield put(appActions.addLoadingStack())

  try {
    const { user } = yield call(AuthApi.googleSignIn)
    yield put(actions.setUser(user))
    Navigator.navigate('/')
  } catch (error) {
    toast.error(processError[error.code] || error.code)
  } finally {
    yield put(appActions.removeLoadingStack())
  }
}

function* register(action: PayloadAction<RegisterForm>) {
  yield put(appActions.addLoadingStack())
  const { displayName, email, password } = action.payload

  try {
    const user = yield call(AuthApi.register, displayName, email, password)
    yield put(actions.setUser(user))
    Navigator.navigate('/')
  } catch (error) {
    toast.error(processError[error.code] || error.code)
  } finally {
    yield put(appActions.removeLoadingStack())
  }
}

function* logOut() {
  yield put(appActions.addLoadingStack())

  try {
    yield call(AuthApi.signOut)
    yield put(actions.setUser())
    Navigator.navigate('/')
  } catch (error) {
    toast.error(processError[error.code] || error.code)
  } finally {
    yield put(appActions.removeLoadingStack())
  }
}

export default function* () {
  yield all([
    yield takeEvery(actions.logIn.type, logIn),
    yield takeEvery(actions.googleLogIn.type, googleLogIn),
    yield takeEvery(actions.register.type, register),
    yield takeEvery(actions.logOut.type, logOut),
  ])
}
