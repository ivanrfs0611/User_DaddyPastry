import { event } from "jquery";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Card = (props) => {
  console.log(props);

  const [quant, setQuant] = useState("");
  var listRotiId = [];
  var listRotiName = [];
  var listRotiPrice = [];
  var listRotiQty = [];

  function thousandSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function addCart(id, qty) {
    console.log(id, " ", qty);

    let cookieCartList = cookies.get("cart_list_id");
    console.log(props.menu.productname);
    if (cookieCartList === undefined) {
      if (qty > 0) {
        listRotiId.push(id);
        listRotiName.push(props.menu.productname);
        listRotiPrice.push(props.menu.price);
        listRotiQty.push(qty);
      }
    } else {
      let exist = false;

      listRotiId = cookies.get("cart_list_id");
      listRotiName = cookies.get("cart_list_name");
      listRotiPrice = cookies.get("cart_list_price");
      listRotiQty = cookies.get("cart_list_qty");

      for (var i = 0; i < listRotiId.length; i++) {
        if (listRotiId[i] == id) {
          if (qty > 0) {
            listRotiName[i] = props.menu.productname;
            listRotiPrice[i] = props.menu.price;
            listRotiQty[i] = qty;
            exist = true;
            console.log("masuk A");
            break;
          } else if (qty == 0) {
            listRotiId.splice(i, 1);
            listRotiName.splice(i, 1);
            listRotiPrice.splice(i, 1);
            listRotiQty.splice(i, 1);
            console.log("masuk splice");
          }
        }
      }

      if (!exist) {
        if (qty > 0) {
          listRotiId.push(id);
          listRotiName.push(props.menu.productname);
          listRotiPrice.push(props.menu.price);
          listRotiQty.push(qty);
          console.log("masuk B");
        }
      }
    }

    cookies.remove("cart_list_id");
    cookies.remove("cart_list_name");
    cookies.remove("cart_list_price");
    cookies.remove("cart_list_qty");

    cookies.set("cart_list_id", listRotiId, { path: "/" });
    cookies.set("cart_list_name", listRotiName, { path: "/" });
    cookies.set("cart_list_price", listRotiPrice, { path: "/" });
    cookies.set("cart_list_qty", listRotiQty, { path: "/" });

    console.log("COOKIE_ID :", cookies.get("cart_list_id"));
    console.log("COOKIE_NAME :", cookies.get("cart_list_name"));
    console.log("COOKIE_PRICE :", cookies.get("cart_list_price"));
    console.log("COOKIE_QTY :", cookies.get("cart_list_qty"));
  }

  // function addCart (id, qty){
  //   console.log(id, " ", qty)
  //   let cookieCartList = cookies.get('cart_list');

  //   if (cookieCartList === undefined){
  //       cookies.set('cart_list_id', [id], { path: '/' });
  //       cookies.set('cart_list_qty', [qty], { path: '/' });
  //   } else {
  //       let exist = false;
  //       for (var i=0; i<cookieCartList.length; i++){
  //           if (cookieCartList[i] === id){
  //               exist = true;
  //               cookies.set()
  //               break;
  //           }
  //       }

  //       if (!exist){
  //           // cookieCartList.push(id, qty);
  //           //cookies.set('cart_list', cookieCartList, { path: '/' });
  //       }
  //   }

  //   cookieCartList = cookies.get('cart_list');
  //   console.log("COOKIE :", cookieCartList);

  //   // this.setState({
  //   //     success_flag: 1
  //   // });

  // }

  return (
    <div style={{ display: "inline-block" }}>
      <section id="card">
        <div className="cardcon">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="card" style={{ width: "20rem" }}>
                  <img
                    className="card-img-top"
                    src={`http://localhost:3002/images/${props.menu.filename}`}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{props.menu.productname}</h5>
                    <p className="card-text">{props.menu.Description}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      {thousandSeparator(props.menu.price)}
                    </li>
                  </ul>
                  <div className="card-body">
                    <a>
                      Quantity:{" "}
                      <input
                        type="number"
                        min={0}
                        max={1000}
                        onChange={(event) => setQuant(event.target.value)}
                        name="ifQty"
                      />
                      <br></br> <br></br>
                    </a>
                    <Link to="/cart">
                      <button
                        type="submit"
                        className="card-link"
                        onClick={() => addCart(props.menu.Id, quant)}
                      >
                        Add to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Card;
