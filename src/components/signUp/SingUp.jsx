import { useState} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logIn } from "../../jsAdditions/userSlice";
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';

const WrongSpan = styled.span`
    color:red;
    position: absolute;
    margin-top:-16px;
    margin-left:80px;
    opacity: ${props => props.wrongData ? 1 : 0};
    &.worstPassword {
     margin-left:100px;
    }   
`

const Button = styled.button`
    cursor:pointer;
    background-color: #5970FF;
    border: none;
    height: 59px;
    width : 355px;
    font-size:22px;
    color:#fff;
    border-radius:5px;
    margin-bottom:15px;
    font-family: inter;
`
const Input = styled.input`
    width:379px;
    height:43px;
    border:1px solid #C7C7C7;
    border-radius: 5px;
    padding:0;
    margin:0;
    background: none;
    font-size:18px;
`


const SingUp = ({wrongData,setWrongData,setAuth }) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    
    const handleLoginChange = e => {
        setLogin(e.target.value);
    };
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const loginUser = async () => {
            const getAccountInfo = (token) => {
                if (token.errorCode) {
                    return;
                } else {
                    setError(false);
                    const url = "https://gateway.scan-interfax.ru/api/v1/account/info";
                    const options = {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token.accessToken}`,
                        },
                    };
                    return fetch(url, options)
                        .then((response) => {
                            return response.json();
                        })
                        .then((userData) => {
                            localStorage.setItem("userData", JSON.stringify(userData));
                            return userData;
                        })
                        .then((userData) => {
                            dispatch(
                                logIn({
                                    logIn: true,
                                    userInfo: userData.eventFiltersInfo,
                                })
                            );
                        })
                        .catch(function (error) {
                            throw new Error(error);
                        });
                }
            };

            const authorizeUser = () => {
                //fetch ЗАПРОС АВТОРИЗАЦИИ
                const url = "https://gateway.scan-interfax.ru/api/v1/account/login";
                const data = {
                    login,
                    password,
                };

                const options = {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(data),
                };

                return fetch(url, options)
                    .then((response) => {
                        return response.json();
                    })
                    .then((token) => {
                        localStorage.setItem("authToken", JSON.stringify(token));
                        if (token.errorCode) {
                            setError(true);
                            setWrongData(true);
                            return token;
                        }
                        navigate("/");
                        setAuth(true);
                        return token;
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            };

            const token = await authorizeUser();
            getAccountInfo(token);

            setLogin("");
            setPassword("");
        };

        loginUser();
    };
    return (
        <Form onSubmit={handleSubmit}>
            <div className="userSpans">
                <span>Войти</span>
                <span>Зарегистрироваться</span>
            </div>
            <div className="userForm">
                <span>логин или номер телефона</span>
                <Input
                    isInvalid={error}
                    type="text"
                    value={login}
                    onChange={handleLoginChange}
                    required
                />
                <WrongSpan  wrongData={wrongData} type="invalid">Введите корректные данные</WrongSpan>
                <span>Пароль</span>
                <Input type="password"
                    isInvalid={error}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <WrongSpan wrongData={wrongData} className="worstPassword" type="invalid">Неправильный пароль</WrongSpan>
            </div>
            <div className="signUp">
                <Button disabled={login === "" && password === ""}>Войти</Button>
                <a href="#">Восстановить пароль</a>
            </div>
        </Form>

    )
}

export default SingUp;