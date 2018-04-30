import { routerReducer } from "react-router-redux"
import { combineReducers } from "redux"
import articles from "./articles"

export interface IArticle {
  id: string
  title: string
  body: string
}

export const initialState = {
  articles: [
    {
      body: "This page is filled with sample content illustrating what various image types look like. Text is lorem ipsum filler; look at the Readability page for sample content that you can actually read.Right-aligned medium Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel ultricies sapien. Proin eu accumsan metus. Pellentesque varius aliquet sapien, sed laoreet diam viverra vel. Phasellus condimentum congue ante. Donec porttitor eleifend erat eget faucibus. Vivamus mattis imperdiet sem a volutpat. Cras ultrices tincidunt hendrerit. Nulla facilisi. Morbi id lorem et sapien luctus eleifend. Vestibulum eleifend dapibus ornare. Ut at dui metus, in accumsan nibh. Nam ultricies turpis sit amet erat elementum nec mollis tellus vehicula. Phasellus mollis faucibus odio, id malesuada justo venenatis in. Sed ultricies, augue quis ullamcorper condimentum, diam turpis laoreet risus, quis pretium urna diam et nibh. Nunc molestie mauris vel est hendrerit tempus. Nam elit enim, pellentesque sit amet fringilla quis, bibendum at tellus. Nunc at tortor sapien. Nam feugiat libero ut nisl sodales eleifend. Nulla laoreet metus in dolor mattis vitae interdum massa.",
      id: "1",
      title: "Image Alignment and Styles",
    },
    {
      body: "fugafuga",
      id: "2",
      title: "fuga",
    },
  ],
}

export default combineReducers({
  articles,
  routerReducer,
})
