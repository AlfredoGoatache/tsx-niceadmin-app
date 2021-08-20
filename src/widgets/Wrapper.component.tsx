const Wrapper = ({pagina}: any) => {
    return (
        <section className="wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="page-header"><i className="fa fa fa-bars" /> Pages</h3>
                <ol className="breadcrumb">
                  <li><i className="fa fa-home" /><a href="index.html">Home</a></li>
                  <li><i className="fa fa-bars" />Pages</li>
                  <li><i className="fa fa-square-o" />Pages</li>
                </ol>
            </div>
          </div>

          {pagina}
        </section>
    )
}

export{
    Wrapper
}