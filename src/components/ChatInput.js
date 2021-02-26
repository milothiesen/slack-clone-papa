import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase';

function ChatInput({ channelName, channelId, chatRef }) {
    // const inputRef = useRef(null);
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault(); // prevents refresh
        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            // message: inputRef.current.value,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'milo thiesen',
            userImage:
                'https://pbs.twimg.com/profile_images/1357466841568993280/Dp6slEsY_400x400.jpg',
        });

        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        });

        setInput('');
    };

    return (
        <ChatInputContainer>
            <form>
                {/* <input ref={inputRef} placeholder={`Message #ROOM`} /> */}
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message ${channelName}`}
                />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;
    display: flex;
    justify-content: center;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > Button {
        display: none !important;
    }
`;
