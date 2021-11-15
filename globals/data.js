module.exports = [
    {
        testCase: "Should show name error message",
        name: "",
        message: "Entering the message",
        ScreenshotFileName: "./screen_evidence/name error Screenshot",
        expected: "Please, fill in the following fields:\nName"

    },
    {
        testCase: "Should show message error",
        name: "Hassan",
        message: "",
        ScreenshotFileName: "./screen_evidence/message error Screenshot",
        expected: "Please, fill in the following fields:\nMessage"

    },
    {
        testCase: "Should show name & message errors",
        name: "",
        message: "",
        ScreenshotFileName: "./screen_evidence/name & message error Screenshot",
        expected: "Please, fill in the following fields:\nName\nMessage"
    }
]