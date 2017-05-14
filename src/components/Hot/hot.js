import React from 'react'

const Hot = () => (
    <div className="container">
        <div className="row">
            <div className="col-xs-12">
                <div className="title-popular-artists">
                    <h2>Popular Artists You May Like</h2>
                    <p>Based On Artists Everyone Listened</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <div className="area">
                    <div className="mask">
                        <div className="vertical-align">
                            <i className="fa fa-play-circle"></i>
                            <p>Play Now</p>
                            <h3>Top 100 Songs</h3>
                        </div>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Billboard_Hot_100_logo.jpg" alt="" className="img-responsive" />
                    <span className="new-song">Top 10 Songs</span>
                </div>
                <h4>West Super Bowl 2015, West Super Bowl 2015, West Super Bowl 2015</h4>
            </div>
            <div className="col-sm-4">
                <div className="area">
                    <div className="mask">
                        <div className="vertical-align">
                            <i className="fa fa-play-circle"></i>
                            <p>Play Now</p>
                            <h3>Top 10 Discovers</h3>
                        </div>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Billboard_Hot_100_logo.jpg" alt="" className="img-responsive" />
                    <span className="new-song">Top 10 Discovers</span>
                </div>
                <h4>West Super Bowl 2015, West Super Bowl 2015, West Super Bowl 2015</h4>
            </div>
        </div>
    </div>
)

export default Hot