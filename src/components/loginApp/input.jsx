import React from "react";
class Input extends React.Component {
    render() {
        return (
                <input
                    className="input"
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    spellCheck={this.props.spellCheck}
                    value={this.props.value}
                    name={this.props.name}
                    required
                />
        )
    }
}
export default Input;