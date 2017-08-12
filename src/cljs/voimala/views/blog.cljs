(ns voimala.views.blog
  (:require [voimala.ui.general :as ui]))

(defn blog []
  [:span
   [:article.blog-post
    [ui/h1 "Do image pixels matter on the web?"]
    [ui/p "When people are creating web sites and uploading images to the web they often tend to ask what is the proper size for images, i.e. what is the proper image resolution for images to be uploaded to the web. I believe there is no one right answer to this question and I could ask that does the resolution even matter for web images?"]
    [ui/p "As you probably know, " [ui/a {:href "http://designshack.net/articles/layouts/vector-vs-raster-what-do-i-use"} "vector images have many strengths"] " and you should always consider using them instead of pure raster images. But if you have to use raster images on the web, you should know the difference between image resolution and the physical size of the image on a web page."]
    [ui/p "When I was taking my first web development course in high school I was taught that the more pixels I use for images the bigger they will appear on web page. And yes, it is true because browsers tend to use the image&#39;s width and height for determining the physical image size to be drawn on the screen. However I would suggest to use CSS to determine the size of the image on a web page rather than trusting the browser to do it. Here is why:"]
    [ui/p "The default size of the image drawn by the browser was originally designed for screens with 96ppi because " [ui/a {:href "http://creativepro.com/rethinking-the-pixel-it-s-all-relative-now"} "CSS pixels are reference pixels for 96ppi screens"] ", but many of today&#39;s modern devices have much sharper screens than this. This means that if you decrease the size of the image from the default size given by the browser, you are not necessarily going to lose details since the image is going to look sharp on high ppi screen. Furthermore, if you scale your images in CSS, you do not need to know the resolution of the image or worry about a change in the resolution changing the image&#39;s physical size on a web page. And in today&#39;s world of " [ui/a {:href "http://en.wikipedia.org/wiki/Responsive_web_design"} "responsive web design"] " we are going to determine image sizes in CSS using percentages anyway.\n\n    "]
    [ui/p "If we determine the width and height for the image in CSS, then the resolution of the image is going to define the " [:em "sharpness"] " of the image. And in case of sharpness, you usually want to have it as much as possible so that the image is going to look good on all kinds of screens. Consider the following image. All variations of it are set to the same size on this page with CSS, but the versions with more pixels look more sharp:"]

    [:figure
     [:img {:src "images/blog/image_resolution_example_bridge_5.jpg", :style "width: 80%; display: block; margin-left: auto; margin-right: auto; margin-top: 5px; margin-bottom: 5px", :alt ""}]
     [:figcaption "Resolution: 215 x 176. Size: 43KB."]]
    [:figure
     [:img {:src "images/blog/image_resolution_example_bridge_4.jpg", :style "width: 80%; display: block; margin-left: auto; margin-right: auto; margin-top: 5px; margin-bottom: 5px", :alt ""}]
     [:figcaption "Resolution: 512 x 419. Size: 242KB."]]
    [:figure
     [:img {:src "images/blog/image_resolution_example_bridge_3.jpg", :style "width: 80%; display: block; margin-left: auto; margin-right: auto; margin-top: 5px; margin-bottom: 5px", :alt ""}]
     [:figcaption "Resolution: 1024 x 837. Size: 918KB."]]
    [:figure
     [:img {:src "images/blog/image_resolution_example_bridge_2.jpg", :style "width: 80%; display: block; margin-left: auto; margin-right: auto; margin-top: 5px; margin-bottom: 5px", :alt ""}]
     [:figcaption "Resolution: 2000 x 1635. Size: 3MB."]]
    [:figure
     [:img {:src "images/blog/image_resolution_example_bridge_1.jpg", :style "width: 80%; display: block; margin-left: auto; margin-right: auto; margin-top: 5px; margin-bottom: 5px", :alt ""}]
     [:figcaption "Resolution: 4227 x 3456. Size: 10MB. You will probably need a very high ppi monitor to see the difference between this and the previous image. :)"]]

    [ui/p "Since we just learned that the image resolution should not be used as a factor of determining the image&#39;s physical size on a web page, I would suggest the following for images to be uploaded to the web:"]
    [ui/p [:strong "Use as many pixels as possible as long as the image is not going to be too big in bytes."]]
    [ui/p "The &quot;too big&quot; part is of course not unambiguous and depends on many things, but I believe that for today&#39;s web we should not discuss about the resolution but the size of the images instead."]
    [ui/p "There are of course downsides using high resolution images on the web, most obvious being the more resolution you have the bigger the image is going to be. However, in case of JPEG images Photoshop usually does a pretty good job decreasing the image size while still maintaining a relatively good image quality for high resolution images (the images above were saved with high quality settings). Another downside is that there still does not seem to be a widely adopted way of serving images of different sizes for slow and high speed connections (and I am talking expressly about connection speeds since mobile devices can also have a very fast internet connection)."]
    [ui/p "Finally, there are many articles on the web about images, resolution and ppi:"]
    [ui/p [ui/a {:href "http://medialoot.com/blog/high-resolution-web"} "How To Prepare for The High-Resolution Web"] [:br] [ui/a {:href "http://www.photoshopessentials.com/essentials/the-72-ppi-web-resolution-myth"} "The 72 PPI Web Resolution Myth"]]
    [ui/p "What do you think? Since the blog post commenting system has not been implemented yet you can send your comments to me by email and I will include them here."]
    [:div.blog-post-info "Written by: Jarzka (14.5.2015)"]]])