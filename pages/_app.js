import App from 'next/app';
import React, { useState } from 'react';

import '../components/style.css';

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

    render() {
        const { Component, pageProps } = this.props;
        const path = this.props.router._inFlightRoute;
        console.log(path);
        return (
                <Component {...pageProps} lang={this.state.lang} setImpressum={this.setImpressum} key={path}/>   
            )
    }
}

export default MyApp
