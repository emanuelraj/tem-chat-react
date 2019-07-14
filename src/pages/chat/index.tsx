import React from 'react';
import logo from '../../logo.svg';
import ChatArea from '../../components/Component.ChatArea/Component.ChatArea';
import '../../App.scss';

function ChatPage() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatArea/>
      </header>
    </div>
  );
}

export default ChatPage;