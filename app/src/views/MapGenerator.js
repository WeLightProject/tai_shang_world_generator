import { Map, GenMap, ViewMap, MintMap, LoadNFT, Back, ProgressBar, Dialog, Alert } from "../components";
import { useSelector } from "react-redux";

function App() {
  let page = useSelector(state => state.page);
  return (
    <div style={{display: 'flex'}}>
      <Map />
      {/* <!-- Inputs --> */}
      <div style={{ width: 'calc(20% - 1rem)', maxHeight: '100vh', marginLeft: '10px'}}>
        { page === 1 && 
          <>
            <GenMap />
            <ViewMap />
          </>
        }
        { page === 2 &&
          <>
            <Back />
            <MintMap />
            <LoadNFT />
            <Alert />
          </>
        }
      </div>
      <Dialog />
      <ProgressBar />
    </div>
  );
}
export default App;