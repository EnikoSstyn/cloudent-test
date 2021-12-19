import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";
import FormList from "./FormList";
import Hamburger from "./Hamburger";

const Books = () => {
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([]);
  const [index, setIndex] = useState();
  const [title, setTitle] = useState("");
  const [btn, setBtn] = useState();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const openModal = () => {
    setShow(true);
  };

  const onClose = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setBtn("edit");
    setIndex(e.target.dataset.id);
    setTitle(arr[e.target.dataset.id]);
    openModal();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setBtn("add");
    openModal();
  };
  return (
    <div>
      <div className="header">
        <div className={hamburgerOpen ? "navbar" : "toggleNavbar"}>
          <div className="navbar-items">
            <a href="#">Patiens</a>
            <a href="#">Calendar</a>
            <a href="#">Invoice</a>
          </div>
          <div className="navbar-items">
            <input type="text" placeholder="Search" className="search" />
            <a href="#">Settings</a>
            <a href="#" className="user">
              KristofB
            </a>
          </div>
        </div>
        <div
          className={hamburgerOpen ? "navburger" : "toggleNavburger"}
          onClick={toggleHamburger}
        >
          <Hamburger />
        </div>
      </div>
      <div className="main">
        <div className="sidebar">
          <h2>Settings</h2>
          <a href="#">Naptár</a>
          <a href="#">Email & SMS</a>
          <a href="#">Properties</a>
          <a href="#" className="sidebox">
            Email & SMS
          </a>
          <a href="#">Users</a>
          <a href="#">Invoices</a>
          <a href="#">Discounts</a>
          <a href="#">Biling</a>
          <a href="#">Health insurance</a>
          <a href="#">Documents</a>
          <a href="#">Translations</a>
          <a href="#">Data migration</a>
        </div>
        <div className="mainpage">
          <h4>Árlista & Mezők</h4>
          <h2>Páciens adatlap mezők</h2>
          <div className="information">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              size="lg"
              color="#606FC8"
            />
            <p>
              Itt tudod szerkeszteni a páciens személye adatlaphoz tartozó
              mezőket. Ne feledd: A sorrend, amit itt beállítasz alapján fognak
              megjelenni új páciens létrehozásakor, valamint amikor megtekinted
              és szerkeszteni szeretnéd a már meglévő páciens adatait. Nézd meg{" "}
              <a href="#">videónkat és leírást itt</a>
            </p>
          </div>
          <h3>Adatlap űrlap</h3>
          <p>
            Ez az űrlap lesz a páciens számára is elérhető majd a Páciens Portál
            modul-ban. Hamarosan érkezik! Így a páciens már akár otthonról, vagy
            a rendelőben egy tabletről is kitöltheti az adatait, ezáltal
            ténylegesem csökkentve az adminisztrációs terheket és a hiba
            lehetőséget a rendelőben.
          </p>
          <div className="listField">
            {arr.length > 0 &&
              arr.map((el, id) => (
                <FormList fieldName={el} id={id} handleEdit={handleEdit} />
              ))}
            <div className="addBtn">
              <button
                className="newFieldBtn"
                onClick={handleAdd}
                data-name="add"
              >
                + Új mező hozzáadása
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onClose={onClose}
        arr={arr}
        setArr={setArr}
        index={index}
        title={title}
        btn={btn}
        setTitle={setTitle}
      />
    </div>
  );
};

export default Books;
