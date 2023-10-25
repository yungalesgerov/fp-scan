export const getCardsData = (ids) => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    const url = "https://gateway.scan-interfax.ru/api/v1/documents";
    const payload = {
        ids,
    };

    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            Authorization: `Bearer ${token.accessToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(payload),
    };

    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .catch(function (error) {
            throw new Error(error);
        });
};
