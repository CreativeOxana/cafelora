import { render } from '@czechitas/render';
import './global.css';
import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Contact } from '../components/Contact/contact';
import { Gallery } from '../components/Gallery/gallery';
import { Footer } from '../components/Footer/footer';
// import { Order } from '../components/Order/Order';

const response = await fetch('http://localhost:4001/api/drinks');
const json = await response.json();
console.log(json.data);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={json.data} />
      {/* <Order items={} /> */}
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

// document.querySelectorAll('form').forEach((form) => {
//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const drinkId = e.target.dataset.id;
//     const isOrdered =
//       e.target.querySelector('.order-btn').textContent === 'Zrušit';

//     const requestOptions = {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify([
//         {
//           op: 'replace',
//           path: '/ordered',
//           value: !isOrdered,
//         },
//       ]),
//     };
//     const response = await fetch(
//       `http://localhost:4001/api/drinks/${drinkId}`,
//       requestOptions,
//     );
//     const data = await response.json();
//     console.log(data);
//   });
// });

const forms = document.querySelectorAll('.drink__controls');
forms.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formId = event.target.dataset.id;
    const currentDrink = json.data[formId];
    console.log(currentDrink);
    const isCurrentDrinkOrdered = currentDrink.ordered;

    const response = await fetch(`http://localhost:4001/api/drinks/${formId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/ordered',
          value: !isCurrentDrinkOrdered,
        },
      ]),
    });
    window.location.reload();
  });
});
