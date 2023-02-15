export const testController = () => {
    try {
        return {
            test: "Hello"
        }
    } catch (error) {
        throw error
    }
}