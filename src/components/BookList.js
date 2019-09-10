import React, { Component } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";


export default class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="booklist" style={{ background: theme.bg, color: theme.syntax}}>
                <ul>
                    <li style={{ background: theme.ui}}>Lion King</li>
                    <li style={{ background: theme.ui}}>Mystery</li>
                    <li style={{ background: theme.ui}}>Siddartha</li>
                </ul>
            </div>
        )
    }
}
