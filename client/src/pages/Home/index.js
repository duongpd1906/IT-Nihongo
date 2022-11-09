import { useAppContext } from "../../context/appContext";

function Home () {
    const {logoutUser} = useAppContext()

    return (
        <div>
            THIS IS HOME
            <button onClick={logoutUser}>
                LOGOUT_USER
            </button>
        </div>
    )
}

export default Home;