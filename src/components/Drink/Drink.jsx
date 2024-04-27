import { Layer } from '../Layer/Layer';
import './drink.css';

export const Drink = ({ id, name, image, layers, ordered }) => {
  const handleOrderClick = () => {
    console.log(`Objednán nápoj s ID: ${id}`);
  };
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={'http://localhost:4001' + image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layers, index) => (
            <Layer key={index} color={layers.color} label={layers.label} />
          ))}
        </div>
      </div>
      <form data-id={id} className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button
          className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}
          onClick={handleOrderClick}
        >
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};
