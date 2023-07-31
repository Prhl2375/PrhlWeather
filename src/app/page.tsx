
import {redirect} from "next/navigation";
import {isNull} from "util";
import Layout from "@/app/layout";
import RouteProtectionComponent from "@/components/routeProtectionComponent";


export default function App():JSX.Element {
    return(
        <Layout>
            <RouteProtectionComponent roles={['user']}>
                <h1>main page</h1>
            </RouteProtectionComponent>
        </Layout>
    );
}
