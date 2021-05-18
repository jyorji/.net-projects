export const loginService = (UserName, Password) => {
    return (
        fetch(process.env.REACT_APP_API + 'login', {
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: UserName,
                Password: Password
            })
        }).then((Response) => Response.json())
    )
}



