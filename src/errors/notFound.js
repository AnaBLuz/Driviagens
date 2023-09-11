export default function notFoundError(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} não encontrado!`
    }
}