import "./ProductList.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <section>
      <div className="pl-list">
        {products.map((item) => (
          <div className="p">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <div>
              <h2>{item.title} </h2>
              <img src={item.image} alt="" className="p-img" />
              <p className="p-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
