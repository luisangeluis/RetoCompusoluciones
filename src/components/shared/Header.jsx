//Dependencies
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//Slices
import addModalSlice from '../../store/slices/addModal.slice';
import { setShowModal } from '../../store/slices/showModal.slice';
const Header = () => {
  const dispatch = useDispatch();

  const showModal = (modal, action) => {
    dispatch(addModalSlice({ modal, action }));
    dispatch(setShowModal(true));
  };

  const addCompany = () => {
    console.log('adding...');
  };

  // console.log();
  return (
    <section className="header">
      <div className="container-fluid header-container">
        <nav className="navbar navbar-expand-lg fw-bolder">
          <div className="container navbar-container">
            <a className="navbar-brand fw-bold" href="#">
              EMPRESAS
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav p-2 p-md-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button
                    className="btn bg-color-three"
                    onClick={(e, FormModal, addCompany) =>
                      showModal(FormModal, addCompany)
                    }
                  >
                    Agregar empresa +
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};
export default Header;
