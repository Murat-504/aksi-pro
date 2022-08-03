import React from 'react'
import star from '../img/star.png'
import N01 from '../img/N01.png'
import N02 from '../img/N02.png'
import N03 from '../img/N03.png'
import image2 from '../img/image2.png'
const Section3 =()=> {
    return(
        <div>
            <div className='sec3'>
                <div className='wrapper'>
                    <div className='sec3-title'>
                        <h3>
                            3 направления обслуживания<br/> компьютеров в Челябинске в «AksiPro»
                        </h3>
                        <img src={star} alt='star' />
                    </div>
                    <div className='sec3-text'>
                        <p>
                            Для результативного и выгодного взаимодействия 
                            предлагаем 3 типа технического аутсорсинга. 
                            Отличаются объемом вверенных задач и уровнем 
                            включенности исполнителей в рабочие процессы заказчика. 
                            Выберите тот, который подходит компании
                        </p>
                    </div>
                    <div className='sec3-cards'>
                        <div className='sec3-card1'>
                            <img src={N01} alt='Frame'/>
                            <h4>Полное ИТ-обслуживание компьютеров на постоянной основе</h4>
                            <span>от 5 000 ₽/мес.</span>
                            <p>
                                Вариант — для организаций с 
                                большим кличеством компьютеров, 
                                собственным сервером, развитой 
                                технической инфраструктурой
                            </p>
                            <button>Заказать</button>
                        </div>
                        <div className='sec3-card1'>
                            <img src={N02} alt='Frame'/>
                            <h4>Функциональный технический аутсорсинг</h4>
                            <span>от 300 ₽/услуга.</span>
                            <p>
                                Заключаем договор на 
                                выполнение конкретных задач, 
                                контролируем и поддерживаем 
                                технические процессы в выбранном направлении
                            </p>
                            <button>Заказать</button>
                        </div>
                        <div className='sec3-card1'>
                            <img src={N03} alt='Frame'/>
                            <h4>ИТ-аутсорсинг компаний по запросу</h4>
                            <span>от 500 ₽/услуга</span>
                            <p>
                                Вариант — для организаций с 
                                большим кличеством компьютеров, 
                                собственным сервером, развитой 
                                технической инфраструктурой
                            </p>
                            <button>Заказать</button>
                        </div>
                    </div>
                    <div className='sec3-img'>
                        <img src={image2} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3