export function getCheck() {
    const check = localStorage.getItem("check") || '';
    return check;
}