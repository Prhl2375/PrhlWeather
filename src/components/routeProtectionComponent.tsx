"use client"

import {parse} from "cookie";
import {boolean} from "zod";
import React, {useEffect, useState} from "react";
import {redirect} from "next/navigation";





interface IComponentProps {
    children:JSX.Element;
    roles:Array<string>;
}
const RouteProtectionComponent:React.FC<IComponentProps> = ({children, roles}):JSX.Element=>{
    const defaultRoutesForRole:{[key:string]:string} = {
        0: '/login',
        user: '/'
    }
    const [loadingState, setLoadingState] = useState<boolean>(true);
    const [role, setRole] = useState<string>('0');
    useEffect(()=>{
        getTrueRole().then(() => {
            if(!roles.includes(role)){
                window.location.replace(defaultRoutesForRole[role]);
            }else {
                setLoadingState(false);
            }
        })
    })
    async function getTrueRole(){
        if(parse(document.cookie)['JWT']){

        }
    }




    if (loadingState){
        return (
            <main>
                0
            </main>
        )
    }else {
        return children;
    }
}

export default RouteProtectionComponent;