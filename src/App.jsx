import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './DefaultLayout/DefaultLayout'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import SingleTrip from './pages/SingleTrip'
import { SearchProvider } from './context/SearchContext'
import NewTravel from './pages/NewTravel'

function App() {

  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path='/trip/:id' element={<SingleTrip />} />
              <Route path='/newtravel' element={<NewTravel />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  )
}

export default App
