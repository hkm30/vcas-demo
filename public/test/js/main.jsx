class Clock extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="alert alert-app-level">
                    Alert Pane
                </div>
                <header className="header header-6">
                    <div _ngcontent-c0="" className="branding">
                        <a _ngcontent-c0="" className="nav-link" href="#">
                            <span _ngcontent-c0="" className="clr-icon clr-clarity-logo"></span>
                            <span _ngcontent-c0="" className="title">Clarity</span>
                        </a>
                    </div>
                    <div _ngcontent-c0="" className="header-nav clr-nav-level-1" ng-reflect-_level="1">
                        <a _ngcontent-c0="" className="nav-link" href="/home" routerlinkactive="active"
                           ng-reflect-router-link="/home" ng-reflect-router-link-active="active"><span _ngcontent-c0=""
                                                                                                       className="nav-text">Home</span></a>
                        <a _ngcontent-c0="" className="nav-link" href="/about" routerlinkactive="active"
                           ng-reflect-router-link="/about" ng-reflect-router-link-active="active"><span _ngcontent-c0=""
                                                                                                        className="nav-text">About</span></a>
                        <a _ngcontent-c0="" className="nav-link" href="/test" routerlinkactive="active"
                           ng-reflect-router-link="/test" ng-reflect-router-link-active="active"><span _ngcontent-c0=""
                                                                                                       className="nav-text">Test</span></a>
                    </div>
                    <div _ngcontent-c0="" className="header-actions">
                    </div>
                </header>
                <nav className="subnav">
                    Subnav Pane
                </nav>
                <div className="content-container">
                    <div className="content-area">
                        <div>
                            <h1>Hello, world!</h1>
                            <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
                        </div>
                    </div>
                    <nav className="sidenav">
                        Sidenav
                    </nav>
                </div>
            </div>
        );
    }
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);