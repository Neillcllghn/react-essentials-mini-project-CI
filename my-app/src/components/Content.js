import React, { Component } from 'react';
import css from './css/Content.module.css';
import PostItem from './PostItem';

export class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div ClassName={css.Content}>
                <div ClassName={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <div ClassName={css.SearchResults}>
                   <PostItem />
                </div>
            </div>
        );
    }
}

export default Content;