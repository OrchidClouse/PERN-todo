import React, {ReactNode} from "react";
import {Col, Row, Layout} from 'antd'
import {Helmet} from 'react-helmet'

type SimplePageProps = React.PropsWithChildren<{
    center?: boolean
    loading?: boolean
    error?: boolean
    title?: string
}>

const {Content} = Layout
const SimplePage = ({center, title ,children}: SimplePageProps): JSX.Element => {
    return(
        <Content style={{ padding: '0 50px' }}>
            {title &&
              <Helmet>
                <title>{title}</title>
              </Helmet>}
            <MainContent center={!!center}>
                {children}
            </MainContent>
        </Content>
    )
}


type ContentProps = {
    children: ReactNode
    center: boolean;
}
const MainContent = ({center, children}: ContentProps): JSX.Element => {
    if(!center){
        return <>{children}</>
    }

    return(
        <>
            <Row justify="center">
                <Col span={8}>{children}</Col>
            </Row>
        </>
    )

}

export {MainContent, SimplePage}