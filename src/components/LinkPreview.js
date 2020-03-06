import React, { Component } from 'react';
import Tippy from '@tippy.js/react';
import { ReactTinyLink } from 'react-tiny-link';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

class LinkPreview extends Component {
  renderPreviewContent = url => <ReactTinyLink url={url} />;

  render() {
    const { url, children, ...rest } = this.props;

    return (
      <Tippy
        content={this.renderPreviewContent(url)}
        theme="light"
        interactive
        {...rest}
      >
        <a className="link-preview" href={url} target="_blank">
          {children}
        </a>
      </Tippy>
    );
  }
}

export default LinkPreview;
