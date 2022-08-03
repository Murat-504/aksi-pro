import React from 'react'
import star from '../img/star.png'
import Frame1 from '../img/Frame1.png'
import Frame2 from '../img/Frame2.png'
import Frame3 from '../img/Frame3.png'
import Frame4 from '../img/Frame4.png'
import Frame5 from '../img/Frame5.png'
import Frame6 from '../img/Frame6.png'
import Frame7 from '../img/Frame7.png'
import Frame8 from '../img/Frame8.png'
import Frame9 from '../img/Frame9.png'

const Section1 =()=> {
    return(
        <div>
            <div className='wrapper'>
                <div className='sec1'>
                    <div className='sec1-title'>
                        <h3>Услуги и стоимость</h3>
                        <img src={star} alt=''/>
                    </div>
                    <div className='cards'>
                        <div className='card1'>
                            <img src={Frame1} alt='Frame'/>
                            <h4>Обслуживание и администрирование раб. мест</h4>
                            <span>от 5 000 ₽/мес.</span>
                            <p>
                                Аутсорсинг компьютеров: установка 
                                оборудования, настройка программ, 
                                интернета, wi-fi, подключение принтеров, 
                                диагностика работоспособности...
                            </p>
                            <button>Заказать</button>
                            <a href='#'>Подробнее</a>
                        </div>
                        <div className='card1'>
                            <img src={Frame2} alt='Frame'/>
                            <h4>Настройка и обслуживание серверов</h4>
                            <span>от 10 000 ₽/мес.</span>
                            <p>
                                Администрирование серверов и серверных 
                                приложений, оптимизация работы оборудования, 
                                наблюдение за функционированием сетевых устройств
                            </p>
                            <button>Заказать</button>
                            <a href='#'>Подробнее</a>
                        </div>
                        <div className='card1'>
                            <img src={Frame3} alt='Frame'/>
                            <h4>ИТ-аудит</h4>
                            <span>от 5 000 ₽/мес.</span>
                            <p>
                                Экспертная оценка ИТ-инфраструктуры компании 
                                для выявления проблем в работе и роста 
                                эффективности использования ИТ-систем
                            </p>
                            <button>Заказать</button>
                            <a href='#'>Подробнее</a>
                        </div>
                        <div className='card1'>
                            <img src={Frame4} alt='Frame'/>
                            <h4>Организация удаленного доступа</h4>
                            <span>от 3 000 ₽/мес.</span>
                            <p>
                                Настройка подключения и управления 
                                несколькими компьютерами с 1 ПК
                            </p>
                            <button>Заказать</button>
                            <a href='#'>Подробнее</a>
                        </div>
                        <div className='card1'>
                            <img src={Frame5} alt='Frame'/>
                            <h4>Обслуживание офисной техники</h4>
                            <span>от 1 500 ₽/мес.</span>
                            <p>
                                Подключение принтеров и сканеров, настройка, 
                                устранение неисправностей, подмена оборудования 
                                в рамках ИТ-обслуживания компаний
                            </p>
                            <button>Заказать</button>
                            <a href='#'>Подробнее</a>
                        </div>
                        <div className='card1'>
                            <img src={Frame6} alt='Frame'/>
                            <h4>Администрирование 1С</h4>
                            <span>от 5 000 ₽/мес.</span>
                            <p>
                                Администрирование серверов и серверных приложений, 
                                оптимизация работы оборудования, наблюдение за 
                                функционированием сетевых устройств
                            </p>
                            <button>Заказать</button>
                            <a href='#'>Подробнее</a>
                        </div>
                        <div className='card1'>
                            <img src={Frame7} alt='Frame'/>
                            <h4>Защита компьютеров и сетей</h4>
                            <span>от 1 000 ₽/мес.</span>
                            <p>
                               Подбор, установка и настройка антивирусной программы, 
                               обучение сотрудников навыкам безопасной работы в интернете
                            </p>
                            <button>Заказать</button>
                            <a href='#'>Подробнее</a>
                        </div>
                        <div className='card1'>
                            <img src={Frame8} alt='Frame'/>
                            <h4>IP-телефония и видеонаблюдение</h4>
                            <span>от 3 000 ₽/мес.</span>
                            <p>
                                Проектирование, монтаж и контроль систем видеонаблюдения. 
                                Настройка единой сети телефонии, распределения и учета звонков
                            </p>
                            <button>Заказать</button>
                            <a href='#'>Подробнее</a>
                        </div>
                        <div className='card1'>
                            <img src={Frame9} alt='Frame'/>
                            <h4>Монтаж и настройка Wi-fi</h4>
                            <span>от 3 000 ₽/мес.</span>
                            <p>
                                Выберем оборудование спецаильно под 
                                параметры вашего помещения. 
                                Настроим беспроводную сеть. 
                            </p>
                            <button>Заказать</button>
                            <a href='#'>Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        <p className='k'></p>
        </div>
)
}

export default Section1