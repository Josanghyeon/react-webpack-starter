import NOCRA from './NOCRA.png';

function App() {
  const a = 0;
  return (
    <div>
      <strong>
        This is the default template. Customize it from now on Now Mode is
        {process.env.APP_ENV}
      </strong>
      <img src={NOCRA} alt="NOCRA IMG" />
    </div>
  );
}

export default App;
