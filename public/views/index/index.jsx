'use strict';
import React from 'react';
// import Navigation from '../../components/nav/index';
module.exports = React.createClass({
    displayName: 'Listasdfsad',

    render: function render() {
        return (
            <div>
                <Navigation/>
            </div>
        );
    }
});

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultProps: null
        };

    }

    componentWillMount() {

    }

    render () {
        return (<div>
            <div className="navigation">
                <a href="/" className="logo"></a>
                <ul className="navList">
                    <li>ss</li>
                    <li>ww</li>
                    <li>fuck</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>);
    }
}