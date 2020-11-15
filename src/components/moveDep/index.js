import React from 'react'

export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {name: 'grapefruit', value: 1},
                {name: 'lime', value: 2},
                {name: 'coconut', value: 3},
                {name: 'mango', value: 4},
            ]
        };
    }
    componentDidMount() {
        this.props.setValue( 2);
        this.setState({value: 2})
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.props.setValue( event.target.value);
    };

    render() {
        return (
            <form >
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {this.state.list.map((item, index) => (
                            <option key={index} value={item.value}>{item.name}</option>
                        ))}
                    </select>
                </label>

            </form>
        );
    }
}
