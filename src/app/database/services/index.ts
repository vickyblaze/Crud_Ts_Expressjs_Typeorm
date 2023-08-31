import BlogServices from "./blogServices";

import DBConfig from "../config";

new DBConfig();

const Blog = new BlogServices();

const Service = {
  Blog,
};

export default Service;