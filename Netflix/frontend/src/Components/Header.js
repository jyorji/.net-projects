import styled from 'styled-components'
import { useHistory, useLocation } from "react-router-dom"
import React, { useState, useEffect } from 'react';

function Header() {
    const [isMenuActive, setMenuActiveFlag] = useState(false);
    const token = localStorage.getItem('userToken')
    const history = useHistory()
    const location = useLocation();
    let RedirectTo = e => {
        history.push("/Home");
    }
    let LogOut = e => {
        setMenuActiveFlag(false)
        localStorage.clear()
        history.push('/Login')
    }
    let ShowMenu = e => {
        if (isMenuActive) {
            setMenuActiveFlag(false)
        } else {
            setMenuActiveFlag(true)
        }
    }
    useEffect(() => {
        // Update the document title using the browser API
        //document.title = `You clicked ${count} times`;
        //setMenuActiveFlag(false);
    });


    return (
        <Nav>
            <Logo src='' />
            {location.pathname === '/Login' || location.pathname === '/Signup' || location.pathname === '/'

                ? null
                :
                <>
                    <NavMenu>
                        <a>
                            <img src='/images/home-icon.svg' alt='' />
                            <span onClick={RedirectTo}>HOME</span>
                        </a>
                        <a>
                            <img src='/images/search-icon.svg' alt='' />
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <img src='/images/watchlist-icon.svg' alt='' />
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <img src='/images/original-icon.svg' alt='' />
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src='/images/movie-icon.svg' alt='' />
                            <span>MOIVES</span>
                        </a>
                        <a>
                            <img src='/images/series-icon.svg' alt='' />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>

                    <UserMenu>
                        <UserImg src='https://yt3.ggpht.com/yti/ANoDKi54HzQXpzcGGtY2fwQzzAX_6936JAKE-SS9NU5Q=s108-c-k-c0x00ffffff-no-rj' alt='' onClick={ShowMenu} />
                        {isMenuActive ? (
                            <Dropdown onClick={LogOut}>Sign out</Dropdown>
                        ) : (
                            null
                        )}
                    </UserMenu>
                </>
            }

        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    positon: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 3;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        padding 0 22px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            padding-left: 10px;
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            
            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    height: 100%;
`
const Dropdown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    z-index: 99;
`

const UserMenu = styled.div`
    position: relative;
    width: 48px;
    height: 48px;
    display: flex;
    cursor: pointer;
    align-item: center;
    justify-content: center;

    ${UserImg}{
        border-radius: 50%;
        height: 100%;
        width: 100%;
    }
}
`