import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader">
      <Oval
        height={80}
        width={80}
        color="#d32f2f"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#d32f2f"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Loader;
