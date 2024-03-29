const Charts = () => {

    return (
      <section className="wrapper">
          <div className="row">
        <div>
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  <h3>General Chart
                  </h3></header>
                <div className="panel-body">
                  <div className="tab-pane" id="chartjs">
                    <div className="row">
                      {/* Line */}
                      <div className="col-lg-6">
                        <section className="panel">
                          <header className="panel-heading">
                            Line
                          </header>
                          <div className="panel-body text-center">
                            <canvas id="line" height={300} width={450} />
                          </div>
                        </section>
                      </div>
                      {/* Bar */}
                      <div className="col-lg-6">
                        <section className="panel">
                          <header className="panel-heading">
                            Bar
                          </header>
                          <div className="panel-body text-center">
                            <canvas id="bar" height={300} width={500} />
                          </div>
                        </section>
                      </div>
                    </div>
                    <div className="row">
                      {/* Radar */}
                      <div className="col-lg-6">
                        <section className="panel">
                          <header className="panel-heading">
                            Radar
                          </header>
                          <div className="panel-body text-center">
                            <canvas id="radar" height={300} width={400} />
                          </div>
                        </section>
                      </div>
                      {/* Polar Area */}
                      <div className="col-lg-6">
                        <section className="panel">
                          <header className="panel-heading">
                            Polar Area
                          </header>
                          <div className="panel-body text-center">
                            <canvas id="polarArea" height={300} width={400} />
                          </div>
                        </section>
                      </div>
                    </div>
                    <div className="row">
                      {/* Pie */}
                      <div className="col-lg-6">
                        <section className="panel">
                          <header className="panel-heading">
                            Pie
                          </header>
                          <div className="panel-body text-center">
                            <canvas id="pie" height={300} width={400} />
                          </div>
                        </section>
                      </div>
                      {/* Doughnut */}
                      <div className="col-lg-6">
                        <section className="panel">
                          <header className="panel-heading">
                            Doughnut
                          </header>
                          <div className="panel-body text-center">
                            <canvas id="doughnut" height={300} width={400} />
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              </div>
            </div>
          </div>
         </section> 
    )
}

export {
    Charts
}