import React from 'react';
import './App.css';

import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/gruvbox';

function App() {
  return (
    <div className="App">
      <AceEditor
        mode="javascript"
        theme="gruvbox"
        name="mccor"
        editorProps={{$blockScrolling: true}}
      />
    </div>
  );
}

export default App;
