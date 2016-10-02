/**
 * Created by Remy on 02/10/2016.
 */

export default function () {
    DocHead.addMeta({
        charset: 'UTF-8'
    });

    DocHead.addMeta({
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
    });

    DocHead.addMeta({
        name: "description",
        content: "Mantra Kickstarter."
    });

    DocHead.addMeta({
        name: "fragment",
        content: "!"
    });

    var title = "Mantra - Kickstarter";
    DocHead.setTitle(title);

    /* Andoid */
    DocHead.addMeta({
        name: "theme-color",
        content: "#002EA7"
    });

    DocHead.addMeta({
        name: "mobile-web-app-capable",
        content: "yes"
    });

    /* iOS */
    DocHead.addMeta({
        name: "apple-mobile-web-app-capable",
        content: "yes"
    });

    DocHead.addMeta({
        name: "apple-mobile-web-app-status-bar-style",
        content: "white-translucent"
    });

    DocHead.addMeta({
        name: "apple-mobile-web-app-title",
        content: "Picturals"
    });

    /* FAVICON */
    DocHead.addLink({
        rel: "icon", type: "image/png", href: "http://smartisdesign.com/img/favicon.png"
    });

    DocHead.addLink({
        rel: "icon", type: "image/png", href: "http://smartisdesign.com/img/favicon-32.png"
    });

    DocHead.addLink({
        rel: "icon", type: "image/png", href: "http://smartisdesign.com/img/favicon-48.png"
    });

    DocHead.addLink({
        rel: "icon", type: "image/png", href: "http://smartisdesign.com/img/favicon-62.png"
    });

    DocHead.addLink({
        rel: "icon", type: "image/png", href: "http://smartisdesign.com/img/favicon-192.png"
    });

    DocHead.addLink({
        rel: "mask-icon", href: "http://smartisdesign.com/img/logo-small.svg"
    });


    /* icon iOS & splaschscreen */
    DocHead.addLink({
        rel: "apple-touch-icon", type: "image/png", href: "http://smartisdesign.com/img/apple-touch-icn.png"
    });

    DocHead.addLink({
        rel: "apple-touch-startup-image", type: "image/png", href: "http://smartisdesign.com/img/splash-screen-320x460.png"
    });

    DocHead.addLink({
        rel: "apple-touch-startup-image", size: "1024x748", type: "image/png", href: "http://smartisdesign.com/img/splash-screen-1024x748.png"
    });

    DocHead.addLink({
        rel: "apple-touch-startup-image", size: "960x640", type: "image/png", href: "http://smartisdesign.com/img/splash-screen-1242x2208.png"
    });

    /* Right Hand Side Of Google */
    DocHead.addLdJsonScript ({
        "@context": "http://schema.org",
        "@type" : "Organization",
        "name" : "Picturals",
        "url" : "https://picturals.com",
        "logo" : "http://smartisdesign.com/img/logo.png",
        "description" : "Picturals est un réseau social dédié à l'art, pour les curieux, les amateurs et les collectionneurs.",
        "telephone" : "+33 (0) 325 000 000",
        "address": {
            "@type" : "PostalAddress",
            "adressLocality" : "Strasbourg",
            "adressRegion" : "Alsace",
            "streetAddress" : "16 rue de Copenhague"
        }
    });


}