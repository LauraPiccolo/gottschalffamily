import App from 'next/app';
import React, { useState } from 'react';

import Layout from '../components/layout'
import '../components/reset.css'
import '../components/styles.css'
import '../components/Home/FullScreenVideo/style.css'
import '../components/Header/style.css'
import '../components/Introduction/style.css'
import '../components/Languages/style.css'
import '../components/Home/MainText/style.css'
import '../components/Home/PlayButton/style.css'
import '../components/Home/Player/style.css'
import '../components/Sticker/style.css'
import '../components/Home/HomeToolbar/style.css'
import '../components/Now/EventList/style.css'
import '../components/Now/Theme/style.css'
import '../components/Archive/ArchiveList/style.css'
import '../components/Archive/ArchiveToolBar/style.css'
import '../components/Event/EventToolBar/style.css'
import '../components/Event/EventFeedback/style.css'
import '../components/Event/style.css'
import '../components/Home/Credits/style.css'
import '../components/Menu/style.css'

class MyApp extends App {

    state = { lang: 'de'}
    
    static async getInitialProps ({ Component, ctx }) {
        console.log(this.state);
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {
            pageProps,
        }
    }

    setLang = (value) => {
        this.setState({lang: value})
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout setLang={this.setLang} lang={this.state.lang}>
                <Component {...pageProps} lang={this.state.lang}/>   
            </Layout>
            )
    }
}

export default MyApp
