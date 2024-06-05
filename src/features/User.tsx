import { useState } from "react";
import { useGetUsersQuery, useGetNumsOfReposQuery } from "./GitHubApiSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addInAddressBar, selectName } from "./counter/storageSlice";

export const User = () => {
  const dispatch = useAppDispatch()
  const nickname = useAppSelector(selectName)
  const [username, setUsername] = useState('');

  const { data: userData, isLoading: userLoading, isError: userError, isSuccess:userSuccess} = useGetUsersQuery(nickname, {
    skip: nickname === '',
  });

  const {
    data: repoData,
    isError: repoError,
    isLoading: repoLoading,
    isSuccess: repoSuccess,
  } = useGetNumsOfReposQuery(nickname,{ skip: nickname === '' })

  const handleFetch = () => {
    dispatch(addInAddressBar(username))
    setUsername(''); // You might want to update the username state here if you're not already
  };

  return (
    <div>
      <input 
        type="text"
        value={username}
        onChange={e => {
          setUsername(e.target.value)
          
          
         }}
         className="p-2 mr-2 border-2 border-slate-400 rounded-md"            
      />

      <button onClick={handleFetch} className="border p-2 border-slate-400 rounded-md">Fetch</button>

      {(userLoading || repoLoading) && (
        <div>
          <h1>Загрузка...</h1>
        </div> 
      )}
      {(userError||repoError) && (
        <div>
          <h1>Произошла ошибка</h1>
        </div>
      )}
      
      {(userSuccess && repoSuccess) && (
        <div className="m-2">
          <h1 className="m-2">Имя: {userData?.login}</h1>

          <h1 className="m-2"> Число репозиториев: {repoData.length}</h1> 
        </div>
      )}
    </div>
  );
};