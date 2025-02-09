export function setCheck(state: string) {
    localStorage.setItem("check", state);
    console.log("Check saved.");
}