import App from 'next/app';
import React, { useState } from 'react';
import { PageTransition } from 'next-page-transitions'

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
import '../components/Archive/ArchiveLocations/style.css'
import '../components/Event/EventToolBar/style.css'
import '../components/Event/EventFeedback/style.css'
import '../components/Event/style.css'
import '../components/Home/Credits/style.css'
import '../components/Menu/style.css'
import '../components/utils/cookiebar.css'

class MyApp extends App {

    state = { lang: 'de', impressum: ''};
    
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

    setImpressum = (value) => {
        this.setState({impressum: value})
    }

    render() {
        const { Component, pageProps } = this.props;
        const path = this.props.router._inFlightRoute;
        console.log(path);
        return (
            <Layout setLang={this.setLang} lang={this.state.lang} impressum={this.state.impressum}>
                {/* <PageTransition timeout={300} classNames="page-transition"> */}
                    <Component {...pageProps} lang={this.state.lang} setImpressum={this.setImpressum} key={path}/>   
                {/* </PageTransition> */}
                <style jsx global>{`
                .page-transition-enter {
                    opacity: 0;
                }
                .page-transition-enter-active {
                    opacity: 1;
                    transition: opacity 300ms;
                }
                .page-transition-exit {
                    opacity: 1;
                }
                .page-transition-exit-active {
                    opacity: 0;
                    transition: opacity 300ms;
                }
                `}</style>
            </Layout>
            )
    }
}

export default MyApp
