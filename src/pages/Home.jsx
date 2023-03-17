import '../App.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Wilder from '../components/Wilder';
import { useEffect, useState} from 'react';
import axios from 'axios';
import WilderAddForm from '../components/WilderAddForm';

const Home = () => {

    const [wilders, setWilders] = useState([]);

    useEffect (() => {
      const fetchData = async () => {
        const wilders = await axios.get("http://localhost:5000/api/wilder");
        // console.log(wilders.data);
        setWilders(wilders.data);
      };
      fetchData();
    }, []);

    return (
        <>
        <header className='App-header'>
            <Header/>
        </header>

        <main className="container">
            <h2> Wilders </h2>
            <section className="card-row">
                {wilders?.map((wilder) => (
                    <Wilder 
                        key={wilder.id}
                        {... wilder}
                        />
                    ))}
            </section>
          <br />
          <section>
            <WilderAddForm />
          </section>
        </main>
      <footer>
        <Footer/>
      </footer>
      </>
    );
}

export default Home;

