import React from 'react';
import News from './News';
import Search from './Search';
import Banner from './Banner';
import Aside from './Aside';

/**
 * Отображение сайта
 */
export default function App() {
    return (
       <container>
           <News img='' alt='' link='' title=''/>
           <Search link='' name='' />
           <Banner bannerImg=''  bannerAlt=''/>
           <Aside/>
       </container>
    )
}