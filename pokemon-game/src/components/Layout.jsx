import React from 'react'
import '../layoutStyle.css'

function Layout()
{
    return(
        <>
        <div style={{background:'url(https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4337cf5-3f3b-4436-b045-8aff91da2cac/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210311T174848Z&X-Amz-Expires=86400&X-Amz-Signature=f32033587d5b1d3c00f304d62c4dc0f233b8e1d7427bc50e8f87f64906259aa8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg1.jpg%22)'}}>
        <section class="root">
    <div class="wrapper">
        <article>
            <div class="title">
                <h3><-- ЗДЕСЬ props.title --></h3>
                <span class="separator"></span>
            </div>
            <div class="desc full">
                <p><-- ЗДЕСЬ props.desc --></p>
            </div>
        </article>
    </div>
</section>
        </div>
       
        </>
    )


}

export default Layout;