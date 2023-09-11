export default function unprocessable(resource = "Item") {
    return {
        type: "incompleteData",
        message: `${resource}`
    }
}