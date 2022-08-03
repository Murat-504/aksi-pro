import React from 'react'
import Banner from './Banner/Banner'
import logo from '../img/logo.png'
import question from '../img/question.png'

const Header =()=> {
    return(
        <div>
            <div className='header'>
                <div className='wrapper'>
                    <div className='nav'>
                        <div className='header-first'>
                            <img src={logo} alt='logo'/>
                        </div>
                        <div className='header-second'>
                            <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

                            <ul id='dropdown1' class='dropdown-content'>
                                <li><a href="#!">one</a></li>
                                <li><a href="#!">two</a></li>
                                <li class="divider" tabindex="-1"></li>
                                <li><a href="#!">three</a></li>
                                <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                                <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                            </ul>
                            <ul>
                                <li><a href='#'>Компания</a></li>
                                <li><a href='#'>Услуги и цены</a></li>
                                <li><a href='#'>ИТ-аутсорсинг</a></li>
                                <li><a href='#'>Блог</a></li>
                                <li><a href='#'>Контакты</a></li>
                            </ul>
                        </div>
                        <div className='header-third'>
                            <ul>
                                <li className='item-question'>
                                    <img src={question} alt='question'/>
                                    <p><a href='#'>Задать вопрос</a></p>
                                </li>
                                <li className='item-register'>
                                    <p>Бесплатный аудит</p>
                                    <span>+7 (351) 345 34 56</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <Banner/>
            </div>
        </div>
    )
}

export default Header