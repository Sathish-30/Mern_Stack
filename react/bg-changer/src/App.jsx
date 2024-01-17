import { useState } from "react";
import Button from "./Button.jsx";

const App = () => {
  const [color, setColor] = useState("skyblue");
  return (
    <div
      className="h-[100vh] flex items-end pb-[10%] justify-center duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" text-lg font-semibold fixed bottom-12 flex gap-[30px] border max-w-screen-md h-[60px] justify-center items-center px-[1%] rounded-full shadow-xl bg-white">
        <Button color="red" setColor={setColor} />
        <Button color="orange" setColor={setColor} />
        <Button color="yellow" setColor={setColor} />
        <Button color="blue" setColor={setColor} />
        <Button color="grey" setColor={setColor} />
        <Button color="violet" setColor={setColor} />
      </div>
    </div>
  );
};

export default App;
