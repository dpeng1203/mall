import { $ } from './axios'
import { stringify } from "qs";

export const homeList = p => $.post('/zqxry/shopping/productlist',stringify(p))

export const homeDesc = p => $.post('/zqxry/shopping/productdetail',stringify(p))