export function setCredentials(email: string, password: string) {
    if (!email || !password) {
        console.log("Email and password are required.");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    console.log("Credentials saved to localStorage.");
}