import React from "react";
import { getPosts, getPostDetails } from "@/services";
import {
  Author,
  Categories,
  CommentForm,
  Comments,
  PostDetail,
  PostWidget,
} from "@/components";

function PostDetails() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <PostDetail />
          <Author />
          <CommentForm />
          <Comments />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
