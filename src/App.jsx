const App = (props) => {
  const { notes } = props;
  console.log(props);
  console.log('this', notes[0].id, 'is', notes[1].id, 'fun');
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  );
};

export default App;
