<>
  <title>Formulario de Contacto</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=no"
  />
  <link rel="stylesheet" href="../css/style_contacto.css" />
  <header>
    <div className="header-content">
      <div className="logo">
        <img src="logo_1.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="home.html">Home</a>
          </li>
          <li>
            <a href="catalogo_productos.html">Productos</a>
          </li>
          <li>
            <a href="nosotros.html">Nosotros</a>
          </li>
          <li>
            <a href="blogs.html">Blogs</a>
          </li>
          <li>
            <a href="contacto.html">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="login-carrito">
        <a href="../html/inicio_sesion.html">Iniciar Sesión</a>
        <div className="carrito">
          <span className="carrito-icon">🛒</span>
          <span className="carrito-count">0</span>
        </div>
      </div>
    </div>
    {/* Modal del carrito */}
    <div id="modal-carrito" className="modal-carrito">
      <div className="modal-content">
        <span className="close">×</span>
        <h2>Carrito de Compras</h2>
        <ul id="carrito-lista" />
        <p id="carrito-total" />
      </div>
    </div>
  </header>
  {/* Formulario de contacto */}
  <section
    id="contact-form"
    className="inner form-container"
    style={{
      maxWidth: 600,
      margin: "50px auto",
      padding: 30,
      background: "#fff",
      borderRadius: 10,
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }}
  >
    <h2>Contáctanos</h2>
    <p>Completa el formulario y te responderemos lo antes posible.</p>
    <form id="contactForm">
      <div className="field">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          style={{
            width: "100%",
            padding: 10,
            marginTop: 5,
            marginBottom: 15,
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />
      </div>
      <div className="field">
        <label htmlFor="Asunto">Asunto</label>
        <br />
        <input
          type="text"
          name="Asunto"
          id="Asunto"
          style={{
            width: "100%",
            padding: 10,
            marginTop: 5,
            marginBottom: 15,
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />
      </div>
      <div className="field">
        <label htmlFor="Mensaje">Mensaje</label>
        <br />
        <textarea
          name="Mensaje"
          id="Mensaje"
          rows={6}
          style={{
            width: "100%",
            padding: 10,
            marginTop: 5,
            marginBottom: 15,
            border: "1px solid #ccc",
            borderRadius: 6,
            resize: "none"
          }}
          defaultValue={""}
        />
      </div>
      <input
        type="submit"
        id="button"
        defaultValue="Enviar"
        style={{
          background: "#019180",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: "bold",
          transition: "background 0.2s ease"
        }}
      />
    </form>
  </section>
  {/* Footer */}
  <footer>
    <div className="footer-content">
      <div className="footer-section productos-footer">
        <h3>Premiados en 2024</h3>
        <ul>
          <li>
            <a href="producto.html?id=2">Perfume Dulce</a>
          </li>
          <li>
            <a href="producto.html?id=6">Perfume Amaderado</a>
          </li>
          <li>
            <a href="producto.html?id=1">Perfume Cítrico</a>
          </li>
        </ul>
      </div>
      <div className="footer-section info-footer">
        <h3>Sobre Nosotros</h3>
        <p>
          Perfumes Sahur ofrece las mejores fragancias importadas y nacionales,
          con envío a todo el país y atención personalizada para cada cliente.
        </p>
      </div>
      <div className="footer-section contacto-footer">
        <h3>Contacto</h3>
        <p>Email: contacto@perfumesahur.com</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 Perfumes Sahur. Todos los derechos reservados.</p>
    </div>
  </footer>
  {/* EmailJS */}
</>
