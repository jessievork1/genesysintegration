async function createChannel() {
    const accessToken = 'YOUR_ACCESS_TOKEN';  // This is no longer needed in the frontend

    // Get the userId (this could come from user input, session, etc.)
    const userId = 'e50f40f6-d705-4a1a-a068-6b8ba4bbc144';  // Replace with actual user ID

    // Send a request to create the WebSocket channel and automatically subscribe to the topic
    const response = await fetch('https://testjessie-genesys.azurewebsites.net/api/WebSocketProxy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userId })
    });

    if (response.ok) {
        const responseData = await response.json();
        console.log('Channel created and subscribed:', responseData);

        // Optionally handle the response data here (WebSocket URI, channel ID, subscription data)
    } else {
        console.error('Failed to create channel and subscribe:', await response.text());
    }
}

document.getElementById('createChannelButton').addEventListener('click', createChannel);
