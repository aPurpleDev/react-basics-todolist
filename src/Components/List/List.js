import React, { Component } from 'react'

class List extends Component {
    render() {
        return(
            <div>
                { this.props.names.map(element =>
                    <a key={element.id} onClick={() => this.props.deleteById(element.id)}>
                        <h1>
                            {element.name}
                        </h1>
                    </a>
                )}
            </div>
        )
    }
}

export default List;
