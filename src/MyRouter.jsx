import {Routes, Route, Navigate} from 'react-router'
import App from './App'
import Profile from './pages/Profile'
import Navbar from './components/NavBar'
import RegisterForm from './pages/RegisterForm'
import SignIn from './pages/SignIn'

const MyRouter = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<App/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
        </>
    )
}

export default MyRouter