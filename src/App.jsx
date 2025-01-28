import HomePage from "./components/Home"
import appStore from "./utils/appStore"
import { Provider } from "react-redux"

function App() {

  return (
    <Provider store={appStore}>
    <HomePage/>
    </Provider>
  )
}

export default App

