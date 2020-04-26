const tryParse = <T>(value: string) => {
    try {
        return JSON.parse(value) as T
    } catch {
        return null
    }
}

const random = (min: number, max: number) => (Math.random() * (max - min + 1)) << 0

export { tryParse, random }