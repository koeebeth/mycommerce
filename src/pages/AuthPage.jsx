import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AuthPage() {
    const mode = useParams().mode;
    const navigate = useNavigate();

    const handleGoogleAuthResponse = useCallback(function () {
        navigate('/');
    }, [navigate])

    useEffect(() => {
        if (mode === 'login') {
            /* global google */
            google.accounts.id.initialize({
                client_id: '617060335430-9shpgj6qghq94g6q45d174bc3i3hr5tv.apps.googleusercontent.com',
                callback: handleGoogleAuthResponse,
            })

            google.accounts.id.renderButton(
                document.getElementById('google-auth'),
                { theme: 'outline', size: 'large' }
            )
        }
    }, [mode, handleGoogleAuthResponse])

    return (
        <div className="flex flex-col items-center h-full">
            <div className="w-fit mt-20 bg-orange-100 px-16 py-12 rounded-xl shadow">
                <h2 className="text-xl font-bold text-orange-600 mb-4 text-center">{mode.toUpperCase()}</h2>
                <form action="" className="flex flex-col gap-4 items-center">
                    <label className="flex flex-col gap-2 text-xl">
                        Email:
                        <input type="email" name="email" className="w-80 h-10 rounded-lg shadow focus:outline-orange-400 px-4"/>
                    </label>
                    <label className="flex flex-col gap-2 text-xl">
                        Password:
                        <input type="password" name="password" className="w-80 h-10 rounded-lg shadow focus:outline-orange-400 px-4"/>
                    </label>
                    <button type="submit" className="bg-orange-400 py-2 px-4 w-fit rounded-lg font-bold text-white hover:bg-orange-500 mt-6">{mode === 'login' ? 'Login' : 'Signup'}</button>
                    {mode === 'login' && <div id="google-auth"></div>}
                </form>
            </div>
        </div>
    )
}