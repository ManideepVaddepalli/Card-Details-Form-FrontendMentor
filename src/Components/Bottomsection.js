import React from "react";
import tickmark from "../images/icon-complete.svg";
import { createRoot } from "react-dom/client";
import { Cardsection } from "./Cardsection";

let totalFormData = {};
function Bottomsection() {
  // ------------------------setting formdata dynamically-----------------------
  let [formData, setFormData] = React.useState({
    holderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  function changeHandler(e) {
    setFormData((prevArray) => {
      return {
        ...prevArray,
        [e.target.name]: e.target.value,
      };
    });
  }
  totalFormData = formData;
  //   --------------------------------Checking each datatyed with regex----------------------
  let validation = {
    holderName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  };
  let [key, setKey] = React.useState(validation);
  let checkerForCondition = "green";

  function validator() {
    checkerForCondition = "green";
    let inputboxes = document.querySelectorAll(".form input");
    console.log(inputboxes[0]);
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear() - 2000;
    if (formData.holderName) {
      if (/^[A-Za-z]+[ ]*[a-zA-Z]+$/.test(formData.holderName)) {
        inputboxes[0].style.border = "0px";
        setKey((Elem) => {
          return {
            ...Elem,
            holderName: "",
          };
        });
      } else {
        checkerForCondition = "red";
        inputboxes[0].style.border = "1px solid hsl(0, 100%, 66%)";
        setKey((Elem) => {
          return {
            ...Elem,
            holderName: "Wrong format, Alphabets only",
          };
        });
      }
    } else {
      checkerForCondition = "red";
      setKey((Elem) => {
        inputboxes[0].style.border = "1px solid hsl(0, 100%, 66%)";
        return {
          ...Elem,
          holderName: "Can't be blank",
        };
      });
    }
    if (formData.cardNumber) {
      if (
        /^[0-9]{4}[ ]*[0-9]{4}[ ]*[0-9]{4}[ ]*[0-9]{4}$/.test(
          formData.cardNumber
        )
      ) {
        inputboxes[1].style.border = "0px";
        setKey((Elem) => {
          return {
            ...Elem,
            cardNumber: "",
          };
        });
      } else {
        checkerForCondition = "red";
        inputboxes[1].style.border = "1px solid hsl(0, 100%, 66%)";
        setKey((Elem) => {
          return {
            ...Elem,
            cardNumber: "Follow format as in example",
          };
        });
      }
    } else {
      checkerForCondition = "red";
      inputboxes[1].style.border = "1px solid hsl(0, 100%, 66%)";
      setKey((Elem) => {
        return {
          ...Elem,
          cardNumber: "Can't be blank",
        };
      });
    }
    if (formData.cvc) {
      if (/^[0-9]{3}$/.test(formData.cvc)) {
        inputboxes[4].style.border = "0px";
        setKey((Elem) => {
          return {
            ...Elem,
            cvc: "",
          };
        });
      } else {
        checkerForCondition = "red";
        inputboxes[4].style.border = "1px solid hsl(0, 100%, 66%)";
        setKey((Elem) => {
          return {
            ...Elem,
            cvc: "Numbers only",
          };
        });
      }
    } else {
      checkerForCondition = "red";
      inputboxes[4].style.border = "1px solid hsl(0, 100%, 66%)";
      setKey((Elem) => {
        return {
          ...Elem,
          cvc: "Can't be blank",
        };
      });
    }
    if (formData.expMonth && formData.expYear) {
      if (
        /^[0-9]{1,2}$/.test(formData.expMonth) &&
        /^[0-9]{2}$/.test(formData.expYear)
      ) {
        if (
          formData.expYear > currentYear &&
          formData.expMonth < 13 &&
          formData.expMonth > 0
        ) {
          setKey((Elem) => {
            inputboxes[2].style.border = "0px";
            inputboxes[3].style.border = "0px";
            return {
              ...Elem,
              expiry: "",
            };
          });
        } else if (formData.expYear === currentYear) {
          if (
            formData.expMonth >= currentMonth &&
            formData.expMonth < 13 &&
            formData.expMonth > 0
          ) {
            inputboxes[2].style.border = "0px";
            inputboxes[3].style.border = "0px";
            setKey((Elem) => {
              return {
                ...Elem,
                expiry: "",
              };
            });
          } else {
            checkerForCondition = "red";
            inputboxes[2].style.border = "1px solid hsl(0, 100%, 66%)";
            inputboxes[3].style.border = "1px solid hsl(0, 100%, 66%)";
            setKey((Elem) => {
              return {
                ...Elem,
                expiry: "Enter valid expiry date",
              };
            });
          }
        } else {
          checkerForCondition = "red";
          inputboxes[2].style.border = "1px solid hsl(0, 100%, 66%)";
          inputboxes[3].style.border = "1px solid hsl(0, 100%, 66%)";
          setKey((Elem) => {
            return {
              ...Elem,
              expiry: "Enter valid expiry date",
            };
          });
        }
      } else {
        checkerForCondition = "red";
        inputboxes[2].style.border = "1px solid hsl(0, 100%, 66%)";
        inputboxes[3].style.border = "1px solid hsl(0, 100%, 66%)";
        setKey((Elem) => {
          return {
            ...Elem,
            expiry: "Only numbers",
          };
        });
      }
    } else {
      checkerForCondition = "red";
      inputboxes[2].style.border = "1px solid hsl(0, 100%, 66%)";
      inputboxes[3].style.border = "1px solid hsl(0, 100%, 66%)";
      setKey((Elem) => {
        return {
          ...Elem,
          expiry: "Can't be blank",
        };
      });
    }
  }
  let [checkrender, setCheckrender] = React.useState("red");
  function SubmitClicked(e) {
    e.preventDefault();
    let CVVrender = document.getElementById("cvvrender");
    CVVrender.innerText = formData.cvc;
    let cardComponent = document.getElementById("card-section");
    let reRender = createRoot(cardComponent);
    reRender.render(<Cardsection />);
    validator();
    setCheckrender(checkerForCondition);
  }
  let RedRender = (
    <div className="bottom-content">
      <form className="form">
        <div className="name-number">
          <label className="name">CARDHOLDER NAME</label>
          <input
            name="holderName"
            value={formData.holderName}
            onChange={changeHandler}
            required
            type="text"
            placeholder="e.g. Jane Appleseed"
          ></input>
          {key.holderName && <p>{key.holderName}</p>}
          <label className="card-number">CARD NUMBER</label>
          <input
            value={formData.cardNumber}
            onChange={changeHandler}
            maxLength="19"
            name="cardNumber"
            type="text"
            required
            placeholder="e.g 1234 5678 9123 0000"
          ></input>
          {key.cardNumber && <p>{key.cardNumber}</p>}
        </div>
        <div className="date-cvv">
          <div className="date-box">
            <label className="exp-date">EXP.DATE(MM/YY)</label>
            <div className="input-box">
              <input
                value={formData.expMonth}
                onChange={changeHandler}
                maxLength="2"
                name="expMonth"
                type="text"
                required
                placeholder="MM"
              ></input>
              <input
                name="expYear"
                value={formData.expYear}
                onChange={changeHandler}
                maxLength="2"
                required
                type="text"
                placeholder="YY"
              ></input>
            </div>
            {key.expiry && <p>{key.expiry}</p>}
          </div>
          <div className="cvv-box">
            <label className="cvv">CVC</label>
            <input
              name="cvc"
              value={formData.cvc}
              onChange={changeHandler}
              maxLength="3"
              type="text"
              required
              placeholder="e.g. 123"
            ></input>
            {key.cvc && <p>{key.cvc}</p>}
          </div>
        </div>
        <button onClick={SubmitClicked} className="submit-btn" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
  let GreenRender = (
    <div className="thankyou">
      <img src={tickmark} alt="completed"></img>
      <h1>THANK YOU!</h1>
      <h5>We added your card details</h5>
      <button className="submit-btn" type="submit">
        Continue
      </button>
    </div>
  );
  return (
    <>
      {checkrender === "green" && GreenRender}
      {checkrender === "red" && RedRender}
    </>
  );
}
export { Bottomsection };
export { totalFormData };
