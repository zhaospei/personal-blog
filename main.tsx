/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Zhao's Blog",
  description: "Một cái blog là một cái blog?",
  avatar: "img/logo.png",
  avatarClass: "rounded-full",
  author: "Zhao",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
