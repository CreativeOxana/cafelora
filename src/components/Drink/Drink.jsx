import './drink.css';

export const Drink = ({ name, image }) => {
  return (
    <div className="drink">
      <img src={image} alt="{name}" />
      <h3>{name}</h3>
      <button>Objednat</button>
    </div>
  );
};
