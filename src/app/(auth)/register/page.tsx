import React from "react";
import Layout from "@/app/layout";
import RouteProtectionComponent from "@/components/routeProtectionComponent";
import SendingFormComponent from "@/components/sendingFormComponent";


const RegisterPage:React.FC = ():JSX.Element => {
    return (
        <Layout>
            <RouteProtectionComponent roles={['0']}>
                <div>
                    <SendingFormComponent></SendingFormComponent>
                </div>
            </RouteProtectionComponent>
        </Layout>
    )
}

export default RegisterPage;