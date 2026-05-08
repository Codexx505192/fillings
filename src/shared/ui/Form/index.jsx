export default function Form(){
    return(
        <form>
                <div className="form_itm">
                  <p className="txt16">Задать вопрос</p>

                <div className="inputs_block">
                  <input type="text" name="" id="" placeholder="Имя" className="inp"/>
                  <input type="text" name="" id="" placeholder="Введите номер телефона" className="inp"/>

                  <textarea name="" id="" cols="30" rows="10" placeholder="Сообщение"/>

                  <button className="btn3">
                    Отправить
                  </button>

                  <div className="check_block">
                    <input type="checkbox" />

                    <p className="txt17">
                      Нажимая кнопку “Отправить”, вы соглашаетесь с политикой конфединцеальности
                    </p>
                  </div>
                </div>
                </div>
              </form>
    )
}