function submitHadler(e) {
    const cred = {
       email: e.target.email.value, 
       password: e.target.password.value
    };
    alert(JSON.stringify(cred))
}