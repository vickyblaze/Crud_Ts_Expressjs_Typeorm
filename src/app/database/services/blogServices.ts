import Blog from "../entity/blog";

class BlogServices {

  findBlogs = async (): Promise<any | null> => {
    const result = await Blog.findAndCount();

    if (!result) {
      return null;
    }
    return result;
  };

  findOneBlog = async (blog_id: number): Promise<any | null> => {
    const result = await Blog.findOne({ blog_id });

    if (!result) {
      return null;
    }
    return result;
  };

  
  createBlog = async (data: object): Promise<any | null> => {
    const result = await Blog.insert(data);

    if (!result) {
      return null;
    }
    return result;
  };

  
  updateBlog = async (blog_id: number, data: object): Promise<any | null> => {
    const result = await Blog.update(blog_id, data);

    if (!result) {
      return null;
    }
    return result;
  };

  
  deleteBlog = async (blog_id: number): Promise<any | null> => {
    const result = await Blog.delete({ blog_id });

    if (!result) {
      return null;
    }
    return result;
  };
}

export default BlogServices;