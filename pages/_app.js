import App from 'next/app';

import Layout from '../components/layout';
import '../components/reset.css';
import '../components/App/styles.css'
import '../components/Container/style.css'
import '../components/FullScreenVideo/style.css'
import '../components/Header/style.css'
import '../components/Introduction/style.css'
import '../components/Languages/style.css'
import '../components/MainText/style.css'
import '../components/PlayButton/style.css'
import '../components/Player/style.css'
import '../components/Sticker/style.css'

class MyApp extends App {
    
    static async getInitialProps ({ Component, ctx }) {
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
        return (
            <Layout>
                <Component {...pageProps}  />   
            </Layout>
            )
    }
}

export default MyApp
