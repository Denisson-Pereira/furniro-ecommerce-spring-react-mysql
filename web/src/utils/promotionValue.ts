export function promotionValue(discount: number, valor: string): string {
    const numericValue = parseFloat(valor);
    const applyDiscount = numericValue - numericValue*(discount/100);
    return applyDiscount.toString();
}