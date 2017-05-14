import React  from 'react'
const Banner = () => (
    <div className="container-fluid" style={styles.fixPadding}>
        <div className="row">
            <div className="banner col-xs-12">
                <div className="container" style={styles.fixPadding}>
                    <div className="title-banner col-xs-12">
                        <h1>What is hot now?</h1>
                        <button className="btn btn-default">PLAY HOT DISCOVER</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const styles = {
    fixPadding: {
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}
export default Banner