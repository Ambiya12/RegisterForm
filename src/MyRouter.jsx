import {Routes, Route} from 'react-router'
import App from './App'
import Profile from './pages/Profile'
import Navbar from './components/NavBar'
import RegisterForm from './pages/RegisterForm'


const MyRouter = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<App/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
        </Routes>
        </>
    )
}

export default MyRouter