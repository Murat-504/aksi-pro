import React from 'react'
import Banners from './img/Banners.png'
import plus from './img/plus.png'
import {Container, Grid} from '@material-ui/core'

const Banner =()=> {
    return(
        <div>
            <Container>
                <Grid cotainer spacing = {12}>
                <div className='banner'>
                    <Grid item md = {6}>
                        <div className='banner-left'>
                            <h1>
                                Профессиональный 
                                ИТ-аутсорсинг 
                                в Челябинске
                            </h1>
                            <p className='banner-text'> 
                                Берем на себя ответственность за состояние и 
                                работоспособность сети, серверов, 
                                компьютеров и офисной техники
                            </p>
                            <button className="banner-btn"><a href="#">Расчет стоимости</a></button>
                            <p className='banner-bottom__text'>
                                Выполняем техническое обслуживание компаний — от установки компьютеров до 
                                закупки оборудования и прокладки сети. Вместо 1 системного администратора 
                                в штате — коллектив из 5 программистов, 3 техников и 4 менеджеров-консультантов. 
                                Команда справляется с поставленной задачей в 3 раза быстрее, 
                                чем администратор, работающий в одиночку.
                            </p>
                        </div>
                    </Grid>
                    <Grid item md = {6}>
                        <div className='banner-right'>
                            <img className='banner-img' src={plus} alt='plus'/>
                            <img src={Banners} alt='Banner'/>
                        </div>
                    </Grid>
                </div>
                </Grid>
                
            </Container>
        </div>
)
}

export default Banner