import React from 'react';
import styled from 'styled-components';
import { StarBorderOutlined } from '@material-ui/icons';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#Room Name</strong>
                        <StarBorderOutlined />
                    </h4>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon />
                        Details
                    </p>
                </HeaderRight>
            </Header>
        </ChatContainer>
    );
}

export default Chat;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }
    > h4 > .MuiSvgIcon-root {
        margin-left: 20px;
        font-size: 18px;
    }
`;
const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 16px;
    }
`;

const ChatContainer = styled.div`
    font-size: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    color: black;
    margin-top: 60px;
`;
