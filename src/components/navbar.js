import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import logo from '../images/todo.logo.png'

const Navbar=(props)=> {
    return (
        <div>
            

            <nav className="navbar navbar-expand-lg bg-body-tertiary my-nav">
  <div className="container-fluid p-3">
    <a className="navbar-brand" href="#">
   <img src={logo} alt='logo'  width={70}/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
           {props.about}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
           { props.menu}
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle active"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item active" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
  
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

</div>
        
    )
}






const ComponentA=()=> {
    return (

        <div>

            <h1>Hello, World!</h1>

        </div>
        )
}


export  { Navbar, ComponentA}







