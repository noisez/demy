import React, {Component} from 'react';
import './Drawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [1, 2, 3];

class Drawer extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a>Link {link}</a>
                </li>
            )
        });
    }

    render() {
        const cls = ['drawer'];

        if (!this.props.isOpen) {
            cls.push('close');
        }

        return (
            <React.Fragment>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Drawer;