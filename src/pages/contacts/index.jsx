import Banner from "@/shared/ui/Banner";
import Catl from "@/shared/ui/catl";
import Header from "@/shared/ui/Header";
import Footer from "@/widjets/Footer";

export default function Page(){
    return(
        <>
        <section id="contacts-page">
            <div className="container">
                <Header/>
                <Banner/>

                <div className="cataloc_block">
                    <p className="txt25">Главная - Каталог</p>
                    <Catl/>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <Footer/>
            </div>
        </section>
        </>
    )
}