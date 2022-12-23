import store from "store"
import { setUser } from "store/auth"

export const handleUser = data => {
    store.dispatch(setUser(data))
}