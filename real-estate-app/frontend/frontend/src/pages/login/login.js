const UserLoginForm = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle user login here
    };

    return (
        <div>
            <h1>User Login</h1>
            <form onSubmit={handleLogin}>
                <p>Username: <input type="text" name="username" value={loginData.username} onChange={handleInputChange} required /></p>
                <p>Password: <input type="password" name="password" value={loginData.password} onChange={handleInputChange} required /></p>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export { UserLoginForm };