import { useScrollTop } from '@/hooks';
import React from 'react';

const NoInternet = () => {
  useScrollTop();

  return (
    <div className="page-not-found">
      <h1>:( Sin Coneccion a internet .</h1>
      <p>Revisa tu conexion e intenta de nuevo .</p>
      <br />
      <button
        className="button"
        onClick={() => window.location.reload(true)}
        type="button"
      >
        Try Again
      </button>
    </div>

  );
};

export default NoInternet;
