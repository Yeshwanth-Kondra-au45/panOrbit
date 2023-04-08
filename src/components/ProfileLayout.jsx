import React, { useState, useEffect } from 'react'
import { Outlet, useLoaderData, useLocation, NavLink, Link, useSearchParams } from 'react-router-dom'
export function ProfileLayout() {
    const data = useLocation()
    const { state: { user, usersData } } = data
    const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') || null);

    useEffect(() => {
        localStorage.setItem('activeLink', activeLink);
    }, [activeLink]);
    const activeStyles = {
        position: 'relative',
        color: 'white',
        letterSpacing: '2px'
    }

    return (
        <>
            <div className="container navigation">
                <div className="sidebar">
                    <ul className='sidebar-Nav'>
                        <li className={activeLink == 1 ? 'active' : ''}
                            onClick={() => setActiveLink(1)}
                        ><NavLink
                            end
                            style={({ isActive }) => isActive ? activeStyles : null} to='.' state={{
                                user, usersData
                            }}>Profile</NavLink>
                        </li>
                        <li className={activeLink == 2 ? 'active' : ''}
                            onClick={() => setActiveLink(2)}
                        ><NavLink
                            style={({ isActive }) => isActive ? activeStyles : null} to='post'
                            state={{
                                user, usersData
                            }}
                        >Posts</NavLink>

                        </li>
                        <li className={activeLink == 3 ? 'active' : ''}
                            onClick={() => setActiveLink(3)}
                        ><NavLink
                            style={({ isActive }) => isActive ? activeStyles : null} to='gallery'
                            state={{
                                user, usersData
                            }}
                        >Gallery</NavLink>

                        </li>
                        <li className={activeLink == 4 ? 'active' : ''}
                            onClick={() => setActiveLink(4)}
                        ><NavLink
                            style={({ isActive }) => isActive ? activeStyles : null} to='todo'
                            state={{
                                user, usersData
                            }}
                        >ToDo</NavLink>
                        </li>
                    </ul>

                </div>
                <Outlet context={data} />
            </div>

        </>

    )
}
