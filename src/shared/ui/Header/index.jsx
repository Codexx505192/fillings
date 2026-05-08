import Link from "next/link"
import { useState } from "react"

export default function Header(){
 const [openMenu, setOpenMenu] = useState(false)
 

    return(
     <header>
              <div className="header_left">
                  <div className="header_top">
                     <div className="logo">
                      <img src="./img/logo.png" alt="logo" />
                     </div>

                     <div>
                      <p className="txt4">Тамбов,</p>
                      <p className="txt4">Бульвар Строителей, 2Б, офис 28</p>
                     </div>
                  </div>

                  <div className="header_bottom">
                    <button className="btn">
                    <div className="f">
                      <img src="./img/filter-left.png" alt="" />
                    </div>
                      Каталог
                    </button>

                    <ul className="ul1">
                      <li className="li1">
                        <Link href="/" className="lnk4">
                         Главная
                        </Link>
                      </li>

                      <li className="li2">
                         <Link href="/aboutUs" className="lnk4">
                         О компаний
                         </Link>
                      </li>

                      <li className="li2">
                        <Link href="/contacts" className="lnk4">
                        Контакты
                        </Link>
                      </li>
                    </ul>
                  </div>
              </div>

              <div className="header_right">
                <div className="txt_hdr">
                  <p className="txt">пн-пт: 9:00 - 16:00</p>
                  <p className="txt">сб-вс: выходной</p>
                </div>

               <div className="txt_hdr2">
                <p className="txt2">+7 (915)-872-41-07</p>
                <p className="txt3">Перезвоним через 5 минут</p>
               </div>
              </div>

              <div className="header_menu">
                <ul className={`header_list ${openMenu ? "active" : ""}`}>
                  <li className="header_tim">
                    Главная
                  </li>

                  <li>
                    О компаний
                  </li>

                  <li>
                    Контакты
                  </li>

                  <li onClick={() => setOpenMenu(false)}>
                    close
                  </li>
                </ul>
               
                <button className="header_btn" onClick={() => setOpenMenu(!openMenu)}>
                  <img src="./icons/menu.png" alt="menu" />
                </button>
              </div>
             </header>
    )
}