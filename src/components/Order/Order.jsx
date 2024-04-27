import { Header } from './components/Header';
import { Footer } from '../Footer/footer';

export const Order = (items) => {
  return (
    <div>
      <Header showMenu={true} />
      <Footer />
    </div>
  );
};
