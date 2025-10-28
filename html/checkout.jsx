<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Realizar Pedido</title>
  <link rel="stylesheet" href="..\css\style_checkout.css" />
  <div className="form-container">
    <h2>Formulario de Pedido</h2>
    <form onsubmit="submitOrder(event)">
      <label>
        Nombre:
        <input type="text" required="" />
      </label>
      <label>
        Correo:
        <input type="email" required="" />
      </label>
      <label>
        Teléfono:
        <input type="tel" required="" />
      </label>
      <label>
        Ciudad:
        <select id="city" onchange="loadCommunes()" required="">
          <option value="">Seleccione</option>
          <option value="Santiago">Santiago</option>
          <option value="Valparaíso">Valparaíso</option>
        </select>
      </label>
      <label>
        Comuna:
        <select id="commune" required="">
          <option value="">Seleccione ciudad primero</option>
          <option value="santiago">Santiago</option>
          <option value="valparaiso">Valparaíso</option>
          <option value="concepcion">Concepción</option>
          <option value="antofagasta">Antofagasta</option>
          <option value="la_serena">La Serena</option>
          <option value="puerto_montt">Puerto Montt</option>
        </select>
      </label>
      <button type="submit" className="submit-btn">
        Realizar Pedido
      </button>
    </form>
  </div>
  <div id="popup" className="popup">
    <div className="popup-content">
      <p>
        Gracias por su pedido. Se enviará a su correo un enlace para realizar el
        pago.
        <br />
        Gracias por realizar la compra en Perfumería DUOC UC.
      </p>
      <button onclick="goHome()">Aceptar</button>
    </div>
  </div>
</>
