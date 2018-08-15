import React from 'react';

import './css/PageContent.css';


class PageContent extends React.Component {
  render() {
    return (
      <div className='page-content'>
        { this.props.children }
      </div>
    )
  }
}

export default PageContent;
