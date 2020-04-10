import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

export default function Logon() {

  return (
    <div className="logon-container">
      <section className="form">
        Voltar <FiLogIn size={16} color="#E02041"/>
      </section>
    </div>
  )
}
