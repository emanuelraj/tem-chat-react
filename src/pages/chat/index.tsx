import React from 'react';
import logo from '../../logo.svg';
import ChatBar from '../../components/Component.ChatBar/component.chatbar';
import '../../App.scss';

function ChatPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/chat/index.tsx</code> and save to reload.
        </p>
        <ChatBar title='Sample Chat'>
        </ChatBar>
      </header>
    </div>
  );
}

export default ChatPage;
