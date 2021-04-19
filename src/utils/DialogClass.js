import React from "react";
import {Dialog} from "../Dialog";

class DialogClass extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return(
            <div>
                <button onClick={(e) => this.setState({isOpen: true})} id="show-bucket-button"> About</button>
                <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>The About information goes
                 here.</Dialog>
            </div>
        );
    }
}


export default DialogClass