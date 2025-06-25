import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './components/Footer';
import './components/Header';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className='app-container'>

        <Header/>

        <main className='main-content'>
          <AppRoutes/>
        </main>

        <Footer/>


      </div>
  );
}

export default App;
