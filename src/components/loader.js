// import {
//   CircularProgressbar,
//   ProgressProvider,
// } from "react-circular-progressbar  ";

function Loader() {
  const percentage = 66;

  return (
    <div className="loader">
      {/* <ProgressProvider valueStart={0} valueEnd={66}>
        {(value) => <CircularProgressbar value={value} />}
      </ProgressProvider> */}
    </div>
  );
}

export default Loader;
