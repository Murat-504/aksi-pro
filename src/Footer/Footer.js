import React from 'react'
import logo from '../img/logo.png'
import WhatsApp from '../img/WhatsApp.png'

const Footer =()=> {
    return(
        <div>
            <div className='footer'>
                <div className='wrapper'>
                    <div className='footer-top'>
                        <h2>Получите <span>бесплатную</span> консультацию</h2>
                        <p>Перезвоним через несколько минут и ответим на ваши вопросы</p>
                        <form class="register-form">
                            <div class="input-box">
                                <input type="text" placeholder="Имя:" required/>
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Телефон:" required/>
                            </div>
                            <button>Отправить</button>
                        </form>
                    </div>
                    <hr/>
                    <div className='footer-bottom'>
                        <div className='footer-link-top'>
                            <ul>
                                <li>Обслуживание и администрирование рабочих мест</li>
                                <li>Настройка и обслуживание серверов</li>
                                <li>ИТ-аудит</li>
                            </ul>
                            <ul>
                                <li>Организация удаленного доступа</li>
                                <li>Обслуживание офисной техники</li>
                                <li>Администрирование 1С</li>
                            </ul>
                            <ul>
                                <li>Защита компьютеров и сетей</li>
                                <li>IP-телефония и видеонаблюдение</li>
                                <li>Монтаж и настройка wi-fi</li>
                            </ul>
                        </div>
                        <div className='footer-link-bottom'>
                            <div className='footer-first'>
                                <img src={logo} alt='logo'/>
                                <p>2016 - 2021 © AKSi</p>
                            </div>
                            <div className='footer-second'>
                                <ul>
                                    <li>Политика конфиденциальности</li> 
                                </ul>
                                <ul>
                                    <li>Компания</li>
                                    <li>Услуги и цены</li>
                                    <li>Блог</li>
                                </ul>
                                <ul>
                                    <li>Отзывы</li>
                                    <li>Контакты</li>
                                </ul>
                            </div>
                            <div className='footer-third'>
                                <ul>
                                    <li className='footer-item-register'>
                                        <p>Бесплатный аудит</p>
                                        <span>+7 (351) 345 34 56</span>
                                    </li>
                                    <li className='footer-item-register2'>
                                        Пишите в WhatsApp
                                        <img src={WhatsApp} alt=''></img>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer