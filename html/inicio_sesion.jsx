<>
  <meta charSet="UTF-8" />
  <title>Inicio de Sesión</title>
  <link rel="stylesheet" href="..\css\style_inicio_sesion.css" />
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
    </div>
  </header>
  <main>
    <div className="login-container">
      {/* Botón superior para alternar formularios */}
      <button id="btn-toggle-form">Registrarse</button>
      {/* Formulario de inicio de sesión */}
      <form id="login-form">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          placeholder="usuario@ejemplo.com"
          required=""
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          placeholder="Contraseña"
          required=""
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {/* Formulario de registro (oculto inicialmente) */}
      <form id="registro-form" style={{ display: "none" }}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          maxLength={100}
          placeholder="Nombre completo"
          required=""
        />
        <label htmlFor="email-registro">Correo electrónico:</label>
        <input
          type="email"
          id="email-registro"
          placeholder="usuario@duoc.cl"
          required=""
        />
        <label htmlFor="password-registro">Contraseña:</label>
        <input
          type="password"
          id="password-registro"
          placeholder="4-10 caracteres con al menos un número"
          required=""
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </main>
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
