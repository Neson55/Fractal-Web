import { useState } from "react";
import { useGetUsersQuery, useGetReposQuery } from "./GitHubApiSlice";

export const User = () => {
  const [username, setUsername] = useState('');

  const { isFetching  } = useGetUsersQuery(username);
  
  const handleFetch = () => {
    // Trigger the queries based on the username
    setUsername(username);
  };

  if (userError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (userLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      <input 
        type="text" 
          onSubmit={handleFetch}      
      />
      <button onClick={handleFetch} className="border p-2">Fetch</button>

      {
          <div>
            <h1>{userData?.login}</h1> 
          </div>
        
      }
    </div>
  );
};