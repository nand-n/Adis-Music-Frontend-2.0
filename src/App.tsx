import { Provider } from 'react-redux'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import './App.css'
import AppRoutes from './routes'
import { store, history } from './store/store'

const App = () => (
  <>
    <Provider store={store}>
      <Router history={history}>
        <AppRoutes />
      </Router>
    </Provider>
  </>
)

export default App
