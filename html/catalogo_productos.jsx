<>
  <meta charSet="UTF-8" />
  <title>Todos los Productos</title>
  <link rel="stylesheet" href="..\css\style_catalogo.css" />
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
  <h1>Todos los Productos</h1>
  <div id="productos-container" />
  {/*Barra inferior*/}
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
</>
