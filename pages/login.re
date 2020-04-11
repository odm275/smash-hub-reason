[@react.component]
let make = () => {
  <section className="section is-fullheight">
    <div className="container">
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type_="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type_="password" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">
              {ReasonReact.string("Login")}
            </button>
          </p>
        </div>
        </div>
      </div>
    </div>
  </section>
  ;
};

let default = make;
