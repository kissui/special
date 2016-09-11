'use strict';
/**
 * Count 构造函数类
 * props => Distance 时间间距
 * state => isOver 是否结束
 */
import React from 'react';
const COUNT_STYLE = {
    background: 'red'
};
class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.Distance
        }
    }
    componentDidMount() {
        this.countDown();
    }

    countDown() {
        console.log(this.state);
        let me = this;
        this.setState({
            time: me.state.time - 1
        });
        let timer = setTimeout(function () {
            me.countDown()
        }, 1000);
        if (this.state.time === 0) {
            clearTimeout(timer);
            this.setState({
                isOver: true
            })
        }
    }

    render() {
        let content = this.state.isOver ? '重新获取': this.state.time ;

        return (
            <div className="count" style={COUNT_STYLE}>
                {content}
            </div>
        )
    }

}
Count.propTypes = {
    Distance: React.PropTypes.number
};
module.exports = Count;