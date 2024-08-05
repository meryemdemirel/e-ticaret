import './App.css';
import { Routes, Route, BrowserRouter as Router, useLocation, Navigate } from 'react-router-dom';

import Navbar from 'components/Navbar'
import Main from 'pages/Main/Main';
import Signin from 'pages/auth/signin/Signin';
import Footer from 'components/Footer';
import Signup from 'pages/auth/signup/Signup';
import Error404 from 'pages/Error404/Error404';
import Profile from 'pages/Profile/Profile';
import ProtectedRoute from 'pages/ProtectedRoute';
// import { useAuth } from 'contexts/AuthContext';
import Messages from 'pages/Messages/Messages';
import Search from 'pages/Search/Search';
import Siparis from 'pages/siparis';
import Products from 'components/Products/Products';
import Cart from 'components/cart/Cart';
import { useSelector } from 'react-redux';
import { isObjectEmpty } from 'helpers/IsEmptyObject';
import AddNewAddress from 'components/cart/AddNewAddressButton';
import AddNewAddressModal from 'components/cart/AddNewAddressModal';


function App() {

  const { pathname } = useLocation();
  const { userInfo } = useSelector(state => state.auth)

  // const { loggedIn } = useAuth();


  return (
    <div className='mx-auto max-w-7xl'>

      {pathname === '/signin' || pathname === '/signup' ? (
        ''
      ) : (
        <Navbar />
      )}



      <Routes>
        <Route path='/' exact="true" element={<Main />} />
        <Route path='/signin' exact="true" element={!isObjectEmpty(userInfo) ? <Navigate to="/" /> : <Signin />} />
        <Route path='/signup' exact="true" element={!isObjectEmpty(userInfo) ? <Navigate to="/" /> : <Signup />} />
        <Route path='/siparis' exact="true" element={<Siparis />} />
        <Route path='/cart' exact="true" element={<Cart />} />
        <Route path='/addAddress' exact="true" element={<AddNewAddressModal />} />

        {/* <Route path='/profile' exact="true" element={<Profile />} /> */}

        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>

        {/* <ProtectedRoute path='/profile' element={<Profile />} /> */}

        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={loggedIn} Component={Profile}>
              <Profile />
            </ProtectedRoute>
          }

        /> */}

        <Route path='/messages' exact="true" element={<Messages />}>


        </Route>
        <Route path='/search' exact="true" element={<Search />} />

        <Route path="*" element={<Error404 />} />
      </Routes>

    </div >
  );
}

export default App;
