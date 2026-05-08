import Link from "next/link";

export default function Footer(){
    return(
        <footer>
              <div className="footer_top">
                <div className="footer_left">

                  <div className="logo_ft">
                    <img src="./img/logo_footer.png" alt="" />
                  </div>

                  <div className="iphone_nmbr">
                   <p className="txt19">+7 915 872 41 07</p> 
                   <p className="txt19">+7 4752 504 507  </p> 
                  </div>

                  <p className="txt20">
                    г. Тамбов,  <br />
                    Бульвар Энтузиастов, 2Б, офис 28
                  </p>
                </div>

                <div className="footer_right">
                  <ul className="ul3">
                    <li>
                      <Link href="#" className="lnk3">
                       Главаня
                      </Link>
                    </li>

                     <li>
                      <Link href="#" className="lnk3">
                       Каталог
                      </Link>
                    </li>

                     <li>
                      <Link href="#" className="lnk3">
                       О компании
                      </Link>
                    </li>

                     <li>
                      <Link href="#" className="lnk3">
                       Контакты
                      </Link>
                    </li>

                     <li>
                      <Link href="#" className="lnk3">
                       Политика конфиденциальности
                      </Link>
                    </li>
                  </ul>

                  <ul className="ul3">
                    <li>
                      <Link href="#" className="lnk3">
                       Универсальные пломбы
                      </Link>
                    </li>

                     <li>
                      <Link href="#" className="lnk3">
                       Пломбы с проволокой
                      </Link>
                    </li>

                     <li>
                      <Link href="#" className="lnk3">
                       Антимагнитные пломбы
                      </Link>
                    </li>

                  </ul>

                   <ul className="ul3">
                    <li>
                      <Link href="#" className="lnk3">
                       Пломбировочные наклейки и ленты
                      </Link>
                    </li>

                     <li>
                      <Link href="#" className="lnk3">
                       Запорно-пломбировачные устройства
                      </Link>
                    </li>

                     <li>
                      <Link href="#" className="lnk3">
                       Антимагнитные пломбы
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>

              <div className="footer_bottom">
                <p className="txt18">2022</p>

                <p className="txt18">Разработано студией MAXOCOM</p>
              </div>
            </footer>
    )
}