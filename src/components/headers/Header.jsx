import React, { Component } from "react";
import styled, { css } from 'styled-components';
import logo from '../../assets/img/logo-light.png';
import config from "./config";

const Logo = styled.div`
  padding: 10px;
`;

const HeaderStyled = styled.header`  
  background-color: transparent !important;
  height: 65px !important;
`;

const Link = styled.a`
      font-size: 0.8em !important;
      color: #fff !important;
      letter-spacing: 1.5px !important;
      font-weight: 300 !important;
`;


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: config
    };
  }

  handleClick = (header) => {
    event.preventDefault();

    let { headers } = this.state;

    headers = headers.map(current => {

      if(current.id === header.id) {
        current.isActive = true;
        return current;
      } 

      current.isActive = false;
      return current;
    });

    this.setState({
      headers
    })
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
        let scrollPos = $(document).scrollTop();

        if(scrollPos > 500) {
          $('body').addClass('scrolled-to');
        } else {
          $('body').removeClass('scrolled-to');
        }
  }

  render() {
    const { headers } = this.state;

    const ActiveLink = ({ className, children}) => (
      <a className={className}>
        {children}
      </a>
    );

    const StyledLink = styled(ActiveLink)`
      font-size: 0.8em !important;
      color: #fff !important;
      letter-spacing: 1.5px !important;
      font-weight: 300 !important;
    `;
    return (
      <HeaderStyled className="page_header theme_header cs">
        <div className="container">
          <div className="row mainrow">
            <div className="col-md-3">
              <Logo>
                <img src={logo} alt="Logo" width="150" height="150"/>                
              </Logo>
            </div>
            <div className="col-md-9">
              <nav className="mainmenu_wrapper">
                <div className="logo" />
                <ul className="pull-right mainmenu nav sf-menu">
                  {headers.map((current, index) => {
                    return (
                      <li key={index}>
                        {current.isActive ? 
                          (<StyledLink onClick={() => this.handleClick(current)}>{current.title}</StyledLink>) 
                          : 
                          (<Link onClick={() => this.handleClick(current)}>{current.title}</Link>)}                        
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <span className="toggle_menu">
                <span />
              </span>
            </div>
          </div>
        </div>
      </HeaderStyled>
    );
  }
}
