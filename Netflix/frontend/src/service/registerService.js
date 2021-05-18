export const registerService = (FirstName, LastName, UserName, PhoneNumber, Password, ConfirmPassword) => {
    return (
        fetch(process.env.REACT_APP_API + 'signup', {
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FirstName: FirstName,
                LastName: LastName,
                UserName: UserName,
                PhoneNumber: PhoneNumber,
                Password: Password,
                ConfirmPassword: ConfirmPassword
            })
        }).then((Response) => Response.json())
    )
}