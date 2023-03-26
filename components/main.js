import Ask from "./ask"
import Response from './response'

export default () => {
    return (
        <main className="container mx-auto w-3/5 py-5">
            {/* Ask Component */}
            <Ask></Ask>
            {/* Response */}
            <Response></Response>
        </main>
    )
}