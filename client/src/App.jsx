
import React, { useState } from "react";
import { AuthPage, ChatPage } from './components'
const App = () => {
  const [user, setUser] = useState(null);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatPage user={user} />;
  }
};
export default App;