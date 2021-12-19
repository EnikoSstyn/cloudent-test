import { useState } from "react";

export default function Modal({
  show,
  onClose,
  arr,
  setArr,
  index,
  setTitle,
  title,
  btn,
}) {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    setTitle(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setArr([...arr, name]);
    setName("");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (index) {
      arr.splice(index, 1);
    }
  };

  const handleEditOld = (e) => {
    e.preventDefault();
    arr.splice(index, 1, name);
    setName("");
  };
  if (!show) {
    return null;
  }
  return (
    <div id="demo-modal" className="modal">
      <div className="modal-content">
        <div className="modalTitle">
          {btn && btn === "edit" ? (
            <h3>Űrlap mező szerkesztése</h3>
          ) : (
            <h3>Új űrlap mező hozzáadása</h3>
          )}
          <a href="#" className="close" onClick={onClose}>
            &times;
          </a>
        </div>
        <div className="modal-body">
          <form className="modalForm">
            <div className="modalFields">
              <label>Mező elnevezése</label>
              <input
                placeholder="Szed rendszeresen gyógyszert?"
                value={btn && btn === "edit" ? title : name}
                onChange={handleChange}
              />
            </div>
            <div className="modalFields">
              <label>Űrlap mező típusa</label>
              <select>
                <option value="boolean">Igen/Nem mező</option>
                <option value="textarea">Többsoros</option>
              </select>
            </div>
          </form>
        </div>
        <div className="modalButtons">
          <button className="modalDeleteBtn" onClick={handleDelete}>
            Mező törlése
          </button>
          <button className="modalCancelBtn" onClick={onClose}>
            Mégsem
          </button>
          {btn && btn === "edit" ? (
            <button className="modalCreateBtn" onClick={handleEditOld}>
              Szerkesztés
            </button>
          ) : (
            <button className="modalCreateBtn" onClick={handleClick}>
              Létrehozás
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
