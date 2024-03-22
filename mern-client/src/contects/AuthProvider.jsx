import React, { createContext } from 'react'

export const Authcontext = createContext();
const auth =getAuth(app);


const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);  

    const createUser = (email, password) => {
        return createUser
    }
  return (
    <div>
      
    </div>
  )
}

export default AuthProvider
