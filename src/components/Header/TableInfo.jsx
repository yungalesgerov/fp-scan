import React from 'react'
import userPhoto from './Mask group.svg';
import { useSelector } from "react-redux";
import { selectUser } from "../../jsAdditions/userSlice";
import { Spinner } from 'react-bootstrap';

const TableInfo = () => {
    const user = useSelector(selectUser);
    const userInf = user.userInfo;
    return (
        <>
            {userInf ?  
                <>
                    <div className="header-stats"><div>Использовано компаний  <span> {userInf.usedCompanyCount}</span> </div>  <br /><div>Лимит по компаниям <span> {userInf.companyLimit}</span></div> </div>
                    <div className="auth-user">
                        <div>
                            <span>Алексей А.</span>
                            <div className="exit">Выйти</div>
                        </div>
                        <div ><img src={userPhoto} alt="userPhoto" /></div>
                    </div>
                </> :
                <Spinner />
            }
            
        </>
    )
}
export default TableInfo;