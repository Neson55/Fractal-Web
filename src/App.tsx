import { useState } from 'react';
import { Repo } from "./component/Repo";
import { User } from "./component/User";

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState('user');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(e.target.value);
  };

  return (
    <div className=" flex h-[700px] justify-center items-center">
      <div className="flex ">
        <select value={selectedComponent} onChange={handleSelectChange} className=" w-24 h-11 border-2 border-black rounded-md  p-2 mr-2 " >
          <option value="user">user</option>
          <option value="repo">repo</option>
        </select>

        {selectedComponent === 'user' && <User />}
        {selectedComponent === 'repo' && <Repo />}
      </div>
    </div>
  );
};

export default App