export function capitalizeWord(name: string): string {
    if (name) return name.charAt(0).toLocaleUpperCase() + name.slice(1).toLowerCase();

    return "";
}