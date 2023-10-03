function submitHadler(e) {
    const cred = {
        username: e.target.username.value, 
       email: e.target.email.value, 
       password: e.target.password.value
    };
    alert(JSON.stringify(cred))
    console.log(cred);
}