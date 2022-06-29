import "./App.css";
import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import ModalWindow from "./components/ModalWindow";

function App() {
  const inputRef = useRef();
  const modalRef = useRef();
  const [value, setValue] = useState("");

  const handleFocus = () => {
    inputRef.current();
  };
  return (
    <div className="App" >
      <CustomInput ref={inputRef} value={value} setValue={setValue} />
      <button onClick={handleFocus}>Focus</button>
      <div className="btn-container">
        <button onClick={() => {modalRef.current.confirmRef()}}>focus confirm</button>
        <button onClick={() => {modalRef.current.rejectRef()}}>focus reject</button>
        <button onClick={() => {modalRef.current.cancelRef()}}>focus cancel</button>
      </div>
      <ModalWindow ref={modalRef}/> 
    </div>
  );
}

const CustomInput = forwardRef(({ value, setValue }, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return () => alert(value);
    },
    [value]
  );
  return (
    <input
      type="text"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
});

export default App;
