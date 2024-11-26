import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                | ₹
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-auto rounded-md"
              alt={item.card.info.name}
            />
            <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-lg p-2 w-3/5 hover:bg-gray-200">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
