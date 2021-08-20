const Pages = () =>{
    return(
        <section className="wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header">
                <i className="fa fa fa-bars">
                    </i> Pages</h3>
            <ol className="breadcrumb">
              <li>
                  <i className="fa fa-home">
                      </i><a href="index.html">Home</a></li>
              <li>
                  <i className="fa fa-bars">
                      </i>Pages</li>
              <li>
                  <i className="fa fa-square-o">
                      </i>Pages</li>
            </ol>
          </div>
        </div>

        Page content goes here
        
      </section>
    );
};

export{ 
    Pages
}