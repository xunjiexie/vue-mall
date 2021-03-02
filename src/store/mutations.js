import { SIGN_IN } from './mutation-type'
export default {
  [SIGN_IN] (state) {
    state.isLogin = true
  }
}
