export function monetaryUnit(value: string) {
    const numericValue = parseFloat(value);
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(numericValue);
}