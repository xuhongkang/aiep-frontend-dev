export async function register(username, password) {
    const response = await fetch('https://bc7orw9yq3.execute-api.us-east-1.amazonaws.com/test/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });
    if (!response.ok) {throw new Error('Registration Failed')}
}

export async function login(username, password) {
    const response = await fetch('https://bc7orw9yq3.execute-api.us-east-1.amazonaws.com/test/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {throw new Error('Login failed');}
    const data = await response.json();
    const userId = data.UserId;
    return userId
}

export async function uploadFile(file, userId, targetLocale) {
    const response = await fetch('https://bc7orw9yq3.execute-api.us-east-1.amazonaws.com/test/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, targetLocale }),
    });

    if (!response.ok) {throw new Error('Init Post to Upload Endpoint Failed');}
    const data = await response.json();
    const sessionId = data.session_id;
    const preSignedUrl = data.url
    const uploadResponse = await fetch(preSignedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': 'application/pdf',
        },
    });
    if (!uploadResponse.ok) {throw new Error('Upload to S3 Failed')}
    return sessionId
}

export async function getSessionData(accessCode) {
    const response = await fetch('https://bc7orw9yq3.execute-api.us-east-1.amazonaws.com/test/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessCode }),
    });

    if (!response.ok) {throw new Error('Response Not Ok');}
    const data = await response.json();
    const content = data.content;
    const assistantId = data.assistant_id;
    const conversationHistory = data.conversation_history;
    return [content, assistantId, conversationHistory]
}

export async function getChatReponse(accessCode, assistantId, prompt) {
    const response = await fetch('https://bc7orw9yq3.execute-api.us-east-1.amazonaws.com/test/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            accessCode,
            assistantId,
            prompt
        }),
    });

    if (!response.ok) {throw new Error('Response Not Ok');}
    const data = await response.json();
    const chatResponse = data.chat_response;
    const conversationHistory = data.conversation_history;
    return [chatResponse, conversationHistory]
}
