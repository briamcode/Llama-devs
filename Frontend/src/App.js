import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import SummaryApi from './common';

function App() {

  const fetchUserDetails = async()=> {
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : "include"
    });

    const dataApi = await dataResponse.json();

    console.log("data-user",dataResponse)

  }

  useEffect(()=>{
    fetchUserDetails()

  },[]);

  return (
    <>
    <Header/>
    <main className='min-h-[calc(100vh-100px)]'>
      <Outlet/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
