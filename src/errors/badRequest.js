export default function badRequest(resource = "Item") {
    return {
        type: "badRequest",
        message: `${resource}`
    }
}