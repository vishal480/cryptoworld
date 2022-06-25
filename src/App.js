import './App.css';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cryptodetails from './components/Cryptodetails';
import Cryptocurrencies from './components/Cryptocurrencies';
import Homepage from './components/Homepage';
import News from './components/News';
import { Layout, Space, Typography } from 'antd';


function App() {

  return (
    
    <Router>
    <div className="app">
      
      <div className='navbar'>
          <Navbar/>
      </div>
      <div className='main'>
          <Layout>
            <div className='routes'>
                <Routes>
                  <Route exact path='/' element={<Homepage/>}/> 
                  <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>} />
                  <Route exact path='/crypto/:coinRank-:coinId' element={ <Cryptodetails/>} />
                  <Route exact path='/news' element={<News/>} />
                </Routes>
            </div>
          </Layout>
      <div className='footer'>
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
          Cryptoverse <br/>
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
