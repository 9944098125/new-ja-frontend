import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const LoginState = useSelector((state) => state.login)

    React.useEffect(() => {
        if (!localStorage.getItem('isAuthenticatedToJobsApp')) {
            navigate('/login', { replace: true })
        }
    }, [LoginState.isAuthenticated, navigate])

    return children
}