import Banner from "@/shared/ui/Banner";
import Header from "@/shared/ui/Header";
import Footer from "@/widjets/Footer";

export default function Page(){
    return(
        <>
        <section id="aboutUs-page">
            <div className="container">
                <Header/>
                <Banner/>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="about_block">

                    <div className="about_itm">
                        <p className="txt22">Главная - О компании</p>

                        <div className="about_elm">

                            <div>
                                <p className="txt23">Мы рядом с Вами уже много лет</p>

                                <p className="txt24">
                                    Наша цель — сохранить ваше имущество в пути, на складе, дома.   <br />
                                    Пломбы не являются абсолютным решением проблем, но это позволит  <br />
                                    уменьшить риски потерь, взять на контроль движение материальных  <br />
                                    ценностей.

                                    Мы поможем Вам подобрать средство опломбирования. Стоимость   <br />
                                    покупки не имеет значения, заказ  от одной пломбы  важен для нас
                                </p>
                            </div>
                        </div>
                    </div>
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