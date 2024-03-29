import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({ title, id, imageUrl, size, linkUrl, match, history}) => (
<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div style={{
    backgroundImage: `url(${imageUrl})`
}} className="background-image" />
{console.log(match, history)}
    <div className="content">
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <span className='subtitle'>Shop Now</span>
    </div>
</div>
)

export default withRouter(MenuItem)
