import React from "react";
import RouteProtectionComponent from "@/components/routeProtectionComponent";
import SendingFormComponent from "@/components/sendingFormComponent";
import ProtectedLayout from "@/app/protectedLayout";


const LoginPage:React.FC = ():JSX.Element => {
    return (
        <ProtectedLayout>
            <RouteProtectionComponent roles={['0']}>
                <div className="w-full">
                    <SendingFormComponent></SendingFormComponent>
                </div>
            </RouteProtectionComponent>
        </ProtectedLayout>
    )
}

export default LoginPage;