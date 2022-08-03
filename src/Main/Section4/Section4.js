import React from 'react'
import star from '../img/star.png'
import stars from '../img/stars.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'

const Section4 =()=> {
    return(
        <div>
            <div className='sec4'>
                <div className='wrapper'>
                    <div className='sec4-title'>
                        <h3>
                            ИТ-аутсорсинг компаний в Челябинске от «AksiPro» — дарим бизнесу больше времени
                        </h3>
                        <img src={star} alt='star' />
                    </div>
                    <div className='sec4-text'>
                        <p>
                            Делегирование технических задач профессиональной команде программистов 
                            и техников позволит максимально сконцентрироваться на выполнении 
                            профильных задач организации. ИТ-компания для обслуживания компьютеров 
                            на аутсорсе увеличивает ресурсы бизнеса. Сотрудничество с «AksiPro» — 
                            гарантия оперативного решения технических вопросов и уверенной работы 
                            информационной структуры организации
                        </p>
                    </div>
                    <div className='sec4-cards'>
                        <div className='sec4-card1'>
                            <div className='sec4-img'>
                                <img src={img1} alt='Frame'/>
                            </div>
                            <h4>Выгодные условия сотрудничества</h4>
                            <p>
                                Стоимость обслуживание 1 ПК — от 500 рублей. 
                                Действует программа скидок для постоянных клиентов
                            </p>
                        </div>
                        <div className='sec4-card1'>
                            <div className='sec4-img'>
                                <img src={img2} alt='Frame'/>
                            </div>
                            <h4>Оборудование на подмену</h4>
                            <p>
                                На время ремонта предоставляем в пользование аналогичную технику
                            </p>
                        </div>
                        <div className='sec4-card1'>
                            <div className='sec4-img'>
                                <img src={img3} alt='Frame'/>
                            </div>
                            <h4>Удаленное решение вопросов</h4>
                            <p>
                                85% задач выполняется в онлайн-формате или по телефону.
                            </p>
                        </div>
                        <div className='sec4-card1'>
                            <div className='sec4-img'>
                                <img src={img4} alt='Frame'/>
                            </div>
                            <h4>Бесплатный аудит</h4>
                            <p>
                                После заключения договора на сотрудничество проводим 
                                бесплатный анализ ИТ-инфраструктуры компании
                            </p>
                        </div>
                        <div className='sec4-card1'>
                            <div className='sec4-img'>
                                <img src={img5} alt='Frame'/>
                            </div>
                            <h4>Онлайн-мониторинг</h4>
                            <p>
                                Круглосуточное наблюдение за функционированием серверного оборудования
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4