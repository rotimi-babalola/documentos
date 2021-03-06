import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Documentos</h5>
              <p className="grey-text text-lighten-4">
                A full stack document management system</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2017 Rotimi Babalola
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

