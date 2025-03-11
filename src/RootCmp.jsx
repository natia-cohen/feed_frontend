import React from 'react'
import { Routes, Route } from 'react-router-dom'


import { HomePage } from './pages/HomePage'


export function RootCmp() {
    const routes = [
        { path: '/', element: <HomePage /> },
    ]

    return (
        <div className="main-container">
            {/* <AppHeader />
            <UserMsg /> */}
            <main>
                <Routes>
                    {routes.map((route, idx) => (
                        route.children ? (
                            <Route key={idx} path={route.path} element={route.element}>
                                {route.children.map((child, childIdx) => (
                                    <Route key={childIdx} path={child.path} element={child.element} />
                                ))}
                            </Route>
                        ) : (
                            <Route key={idx} path={route.path} element={route.element} />
                        )
                    ))}
                </Routes>
            </main>
            
            {/* <AppFooter /> */}
        </div>
    )
}
