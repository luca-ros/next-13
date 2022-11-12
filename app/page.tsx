// This is Now a Server component which mean ny state or clickhandler whan't work
import ChatInput from './ChatInput'
import MessageList from './MessageList'

function HomePage() {
    return (
        <main className=''>
            {/* Message List */}
            <MessageList />

            {/* Chat List */}
            <ChatInput />
            <h2>Messia</h2>
        </main>
    )
}

export default HomePage