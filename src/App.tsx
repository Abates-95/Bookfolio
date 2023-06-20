import{ HashRouter,  Routes, Route, } from 'react-router-dom'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AuthChecker from './auth/AuthChecker'
import Footer from './components/Footer'

function App() {
  
  return (
    <HashRouter>
      <Provider store={store} >
        <Routes>
          { routes.map((route: any, index: any) => (
            <Route
                  key={index}
                  path={route.path}
                  element={
                    route.protected ? (
                    <AuthChecker>
                      <route.component />
                    </AuthChecker>
                    ) : (
                      <route.component />
                    )
                  }
                  />
          )) }
        </Routes>
        <Footer />
      </Provider>
    </HashRouter>
  )
}

export default App
