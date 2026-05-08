import Banner from "@/shared/ui/Banner";
import Header from "@/shared/ui/Header";
import Head from "next/head";

export default function Page(){
    return(
        <>
        <section id="cataloc-page">
            <div className="container">
                <Header/>
                <Banner/>
            </div>
        </section>
        </>
    )
}