/**  Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.org/docs/node-apis/ */

 const createPages = require("./create/createPages")
 const createPosts = require("./create/createPosts")
 
 exports.createPagesStatefully = async ({ graphql, actions, reporter }, options) => {
   await createPages({ actions, graphql, reporter }, options)
   await createPosts({ actions, graphql, reporter }, options)
 }
 