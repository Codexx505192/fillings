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
            </div>
        </section>

        <section>
            <div className="container">
                <div className="contacts_block">
                    <p className="txt25">Главная - Контакты</p>
                </div>
            </div>
        </section>
        </>
    )
}