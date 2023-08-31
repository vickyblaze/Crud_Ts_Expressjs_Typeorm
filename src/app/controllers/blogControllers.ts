import { Request, Response } from "express";
import { middlewares } from "../middlewares";

import Service from "../database/services";

const { responses, messages, codes } = middlewares;

const { Blog } = Service;

class BlogControllers {

  findBlogs = async (req: Request, res: Response) => {
    const response = await Blog.findBlogs();

    if (!response) {
      return responses.error(codes.error(), messages.error(), res);
    }

    return responses.success(
      codes.ok(),
      messages.ok(),
      {
        count: response[1],
        data: response[0],
      },
      res
    );
  };

  findOneBlog = async (req: Request, res: Response) => {
    const { blog_id } = req.params;
    console.log('v')

    const response = await Blog.findOneBlog(parseInt(blog_id));

    if (!response) {
      return responses.error(codes.error(), messages.notFound(), res);
    }

    return responses.success(codes.ok(), messages.ok(), response, res);
  };

  createBlog = async (req: Request, res: Response) => {
    const {
      title,
      description,
    }: {
      title: string;
      description: string;
    } = req.body;

    const response = await Blog.createBlog({
      title,
      description,
    });1

    if (!response) {
      return responses.error(codes.error(), messages.notFound(), res);
    }

    const blog_id = response.raw.insertId;

    return responses.success(
      codes.created(),
      messages.created(),
      { blog_id, title, description },
      res
    );
  };

 
  updateBlog = async (req: Request, res: Response) => {
    const {
      title,
      description,
    }: {
      title: string;
      description: string;
    } = req.body;

    const { blog_id } = req.params;

    const response = await Blog.updateBlog(parseInt(blog_id), {
      title,
      description,
    });

    if (!response) {
      return responses.error(codes.error(), messages.error(), res);
    }

    return responses.success(
      codes.ok(),
      messages.ok(),
      { blog_id, title, description },
      res
    );
  };


  deleteBlog = async (req: Request, res: Response) => {
    const { blog_id } = req.params;

    const response = await Blog.deleteBlog(parseInt(blog_id));

    if (!response) {
      return responses.error(codes.error(), messages.error(), res);
    }

    return responses.ok(codes.ok(), messages.ok(), res);
  };
}

export default BlogControllers;