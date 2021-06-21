// npm install bootstrap reactstrap
// npm install --save react-bootstrap

import React, { Component } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import RenderMap from './renderMap';

class App extends Component{
        
        
        state = {
                theme: null,
                nameMap: null,
                dropdownOpen: false
        }
        
        toggleDropdown = () => {
                this.setState({dropdownOpen: !this.state.dropdownOpen});
        }

        resetTheme = evt => {
                evt.preventDefault();
                this.setState({ theme: null});
                this.setState({ nameMap: null});
        }

        changeBtn = (theme, nameMap, evt) => {
                evt.preventDefault();
                this.setState({ theme });
                this.setState({ nameMap });
                //this.setState({ nameMap: nameMap});
                console.log(nameMap);
                //console.log(this.state.theme);
                //console.log(this.state.nameMap);
        }

        render() {
                const { theme, dropdownOpen} = this.state;
                const themeClass = theme? theme.toLowerCase() : 'secondary';

                const nameMap = this.state.nameMap;
               

                return(
                        <div >
                                <div className="d-flex flex-wrap justify-content-center align-items-center">
                                        <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>
                                                {nameMap || 'Default'}
                                        </span>

                                        <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggleDropdown}>
                                                <DropdownToggle caret size="sm" color={themeClass}/>
                                                <DropdownMenu>
                                                        <DropdownItem onClick={e => this.changeBtn('Primary','Map202006', e)}>Map202006 </DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Success','Map202007', e)}>Map202007</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Danger','Map202008', e)}>Map202008</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Warning','Map202009', e)}>Map202009</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Info','Map202010', e)}>Map202010</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Light','Map202011', e)}>Map202011</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Dark','Map202012', e)}>Map202012</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Warning','Map202101', e)}>Map202101</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Info','Map202102', e)}>Map202102</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Light','Map202103', e)}>Map202103</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Dark','Map202104', e)}>Map202104</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={this.resetTheme}>Default</DropdownItem>
                                                </DropdownMenu>
                                        </ButtonDropdown>
                                        
                                </div>
                                <br/>
                                
                                <RenderMap myId={this.state.nameMap}/> 
                        </div>
                        
                )
        }
}

export default App;