/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';
import SocialLinks from './SocialLinks';

import avatar from '../assets/images/avatar.png';
import { name, socialLinks } from '../json/json-bundle';

export class Sidebar extends Component {
  state = { collapsed: true };

  tabs = [
    { content: 'About', href: 'about' },
    { content: 'Experience', href: 'experience' },
    { content: 'Skills', href: 'skills' },
    { content: 'Education', href: 'education' },
    { content: 'Interests', href: 'interests' },
  ];

  toggleNavbar = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { collapsed } = this.state;

    const navbarContentClass = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const navBarIconClass = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    return (
      <nav
        id="side-nav"
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      >
        <a className="navbar-brand" href="#about">
          <span className="d-block d-lg-none">{name}</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <button
          className={navBarIconClass}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={collapsed}
          aria-label="Toggle navigation"
          onClick={this.toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={navbarContentClass} id="navbarSupportedContent">
          <Scrollspy
            items={this.tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {this.tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li
                  className="nav-item"
                  key={href}
                  onClick={() => this.setState({ collapsed: true })}
                >
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}

            <SocialLinks className="social-links--nav" links={socialLinks} />
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
