const test = (req, res) => {
    try {
        res.json({ message: 'this is the test code' })

    } catch (e) {
        res.json({ message: 'this is the test code' })
    }
}

const handleLogin = async (req, res) => {

}




export { test }