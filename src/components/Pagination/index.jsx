import React, { Component } from 'react';

import './style.css';

class Pagination extends Component {
  componentDidMount() {
    window.addEventListener('keydown', event => this.handleKeydown(event));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', event => this.handleKeydown(event));
  }

  handleKeydown(event) {
    switch (event.keyCode) {
      case 37:
        if (this.props.previous) {
          window.location = this.props.previous.frontmatter.path;
        }
        break;
      case 39:
        if (this.props.next) {
          window.location = this.props.next.frontmatter.path;
        }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <ul className="pagination">
        {this.props.previous && (
          <li className="pagination__previous">
            <a href={this.props.previous.frontmatter.path} rel="prev">
              previous
            </a>
          </li>
        )}
        {this.props.next && (
          <li className="pagination__next">
            <a href={this.props.next.frontmatter.path} rel="next">
              next
            </a>
          </li>
        )}
      </ul>
    );
  }
}

export default Pagination;
