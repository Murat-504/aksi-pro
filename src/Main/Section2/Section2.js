import React from 'react'
import {Container, Grid} from '@material-ui/core'
import image from '../img/image.png'
import star from '../img/star.png'
import li from '../img/li.png'
import admin from '../img/admin.png'
import admin2 from '../img/admin2.png'
import admin3 from '../img/admin3.png'
import admin4 from '../img/admin4.png'

const Section2 =()=> {
    return (
        <div>
            <div className='sec2'>
                <div className='wrapper'>
                <Container>
                    <div className='sec2-top-title'>
                        <h3>Командная ИТ-поддержка компаний на<br/> аутсорсинге вместо штатного сотрудника</h3>
                        <img src={star} alt='star2'/>
                    </div>
                    <Grid cotainer spacing = {12}>
                    <div className='sec2-top-text'>
                        <Grid item md = {6}>
                        <ul>
                            <li><div className='img'><img src={li} alt='li'/></div>
                                Решаем задачи без перерывов на обед, отпуск или больничный.
                            </li>
                            <li><div className='img'><img src={li} alt='li'/></div>
                                Узкоспециализированные мастера с 
                                углубленными знаниями быстро находят причины и 
                                устраняют возникшие проблемы, а также ведут 
                                параллельную работу по разным направлениям.
                            </li>
                            <li><div className='img'><img src={li} alt='li'/></div>
                                Удобный контроль эффективности услуг благодаря 
                                ежемесячным отчетам о проделанной работе.
                            </li>
                            <li><div className='img'><img src={li} alt='li'/></div>
                                Аутсорсинг в 3 раза снижает затраты на 
                                поддержание ИТ-инфраструктуры в сравнении с
                                содержанием штатного отдела техников.
                            </li>
                        </ul>
                        </Grid>
                        <Grid item md = {6}>
                        <img src={image} alt='image' width='670px' height='390px' />
                        </Grid>
                    </div>
                    </Grid>
                    <div className='sec2-bottom'>
                        <div className='sec2-bottom-title'>
                            <h3>Наша команда</h3>
                            <img src={star} alt='star2'/>
                        </div>
                        <div className='sec2-bottom-worker'>
                            <div class='sec2-bottom-cards'>
                                <div className='sec2-bottom-card1'>
                                    <img src={admin} alt='admin'/>
                                    <p>Сергей</p>
                                    <span>старший системный администратор</span>
                                </div>
                                <div className='sec2-bottom-card1'>
                                    <img src={admin4} alt='admin'/>
                                    <p>Петр</p>
                                    <span>системный администратор</span>
                                </div>
                                <div className='sec2-bottom-card1'>
                                    <img src={admin2} alt='admin'/>
                                    <p>Евгений</p>
                                    <span>специалист по сетевым технологиям</span>
                                </div>
                                <div className='sec2-bottom-card1'>
                                    <img src={admin3} alt='admin'/>
                                    <p>Елена</p>
                                    <span>оператор тех поддержки</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='s'></p>
                </Container>
                </div>
            </div>
        </div>
    )
}

export default Section2