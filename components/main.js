import Ask from "./ask"
import Response from './response'
import { useQuery } from "react-query";
import { getMessages } from "../lib/request";
import Loading from "./loading";
import NotFound from './notfound'

export default ({ roomid }) => {

    const { isLoading, isError, data : messages, error }  = useQuery(['messages', roomid], () => getMessages(roomid));

    if(isLoading) return <Loading></Loading>
    if(isError) return <div className="text-center">Error: {error.message}</div>
    if(messages.length === 0) return <NotFound></NotFound>

    return (
        <main className="container mx-auto w-3/5 py-5">
            {
                messages && messages.map((message, index) => {
                    return (
                        <div key={index}>
                            {/* Ask Component */}
                            <Ask q={message.question}></Ask>
                            {/* Response */}
                            <Response ans={message.answer}></Response>
                        </div>
                    )
                })
            }

            
        </main>
    )
}