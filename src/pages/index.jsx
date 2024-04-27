import { render } from '@czechitas/render';
import './global.css';
import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Contact } from '../components/Contact/contact';
import { Gallery } from '../components/Gallery/gallery';
import { Footer } from '../components/Footer/footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const nav = document.querySelector('.nav-btn');
const rollout = document.querySelector('.rollout-nav');

rollout.addEventListener('click', () => {
  rollout.classList.add('nav-closed');
});

nav.addEventListener('click', () => {
  rollout.classList.toggle('nav-closed');
});
