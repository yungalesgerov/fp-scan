import {Component} from "react";
import styled from 'styled-components';
import errorImg from './errorImg.svg';
const ErrorDiv = styled.div`
    width:100%;
    height:100%;
    color:red;
    font-size:40px;
    h1 {
        margin-left:200px;
    }
    img {
        width:100%;
        height:400px;
        margin: 0 auto;
    }
    @media screen and (max-width:376px) {
        h1 {
            margin-left:0;
            font-size:32px;
        }
    }
`

class ErrorBoundary extends Component {
   constructor(props) {
    super(props) 
    this.state = {
         hasError:false,
         error:null,
         errorInfo:null
    }
    
   }

    // static getDerivedStateFromError(error) {
    //     return {hasError:true};
    // } 
    componentDidCatch(error,errorInfo) {
        this.setState({
            hasError:true,
            error,
            errorInfo
        })
    }
    render() {
        if(this.state.hasError) {
            return (
                <ErrorDiv>
                    <h1>Something went wrong</h1>
                    <img src={errorImg} alt="errorImg" />
                </ErrorDiv>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;