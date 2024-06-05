import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useGetReposQuery } from "../features/Slice/GitHubApiSlice"
import { addInAddressBarRepo, selectNameRepo } from "../features/Slice/storageSlice"

export const Repo = () => {
    const dispatch = useAppDispatch()
    const nickname = useAppSelector(selectNameRepo)
    const [username, setUsername] = useState("")
    const {
        data: repoData,
        isError: repoError,
        isLoading: repoLoading,
        isSuccess: repoSuccess,
    } = useGetReposQuery(nickname, { skip: nickname === "" })

    const handleFetch = () => {
        dispatch(addInAddressBarRepo(username))
        setUsername("")
    }

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={e => {
                    setUsername(e.target.value)
                }}
                className=" h-11 border p-2 mr-2 border-slate-400 rounded-md"
            />

            <button
                onClick={handleFetch}
                className="h-11 border p-2 border-slate-400 rounded-md"
            >
                Fetch
            </button>

            {repoLoading && (
                <div>
                    <h1>Загрузка...</h1>
                </div>
            )}
            {repoError && (
                <div>
                    <h1>Произошла ошибка</h1>
                </div>
            )}

            {repoSuccess && (
                <div className="m-2">
                    <h1 className="m-2"> Имя репозитория: {repoData.name}</h1>
                    <h1 className="m-2">
                        {" "}
                        Количество звёзд: {repoData.stargazers_count}
                    </h1>
                </div>
            )}
        </div>
    )
}
