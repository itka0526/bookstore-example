"use client";
import Script from "next/script";
import Head from "next/head";

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
    return (
        <>
            <head>
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                ym(93851204, "init", {
                                        clickmap:true,
                                        trackLinks:true,
                                        accurateTrackBounce:true
                                });
                         `,
                    }}
                ></script>
                <noscript>
                    <div>
                        {/* eslint-disable-next-line @next/next/next-script-for-ga, @next/next/no-img-element */}
                        <img src="https://mc.yandex.ru/watch/93851204" style={{ position: "absolute", left: "-9999px" }} alt="" />
                    </div>
                </noscript>
            </head>
        </>
    );
};

export default GoogleAnalytics;
