import { logIn } from '../features/userSlice'

export const getUserInfo = async (token, dispatch) => {

    if (token.errorCode) {
        return;
    }

    const url = "https://gateway.scan-interfax.ru/api/v1/account/info";
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token.accessToken}`,
        },
    };

    const response = await fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .catch(function (error) {
            throw new Error(error);
        });

    if (!response.errorCode) {
        localStorage.setItem("userData", JSON.stringify(response));

        dispatch(
            logIn({
                logIn: true,
                userInfo: response.eventFiltersInfo,
            })
        );
    }
}