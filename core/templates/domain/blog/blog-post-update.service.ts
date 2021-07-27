// Copyright 2021 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Service to handle the updating of a blog post.
 */
import { Injectable } from '@angular/core';
import { BlogPostData } from 'domain/blog/blog-post.model';
import { downgradeInjectable } from '@angular/upgrade/static';
import { changeEnd } from 'codemirror';

export interface BlogPostChangeDict {
  'title'?: string;
  'thumbnail_filename'?: string;
  'content'?: string;
  'tags'?: string[];
}

interface ImageData {
  filename: string;
  imageBlob: Blob;
}

@Injectable({
  providedIn: 'root',
})
export class BlogPostUpdateService {
  changeDict: BlogPostChangeDict = {};
  _blogPostData: BlogPostData;

  set blogPost(blogPost) {
    this._blogPostData = blogPost;
  }

  setBlogPostTitle(title: string): void {
    if (this._blogPostData.title !== title) {
      this._blogPostData.title = title;
      this.changeDict.title = title;
    }
  }

  setBlogPostThumbnail(image: ImageData[]): void {
    let filename = image[0].filename;
    if (this._blogPostData.thumbnailFilename !== filename) {
      this._blogPostData.thumbnailFilename = filename;
      this.changeDict.thumbnail_filename = filename;
    }
  }

  setBlogPostTags(tags: string[]): void {
    if (this._blogPostData.tags !== tags) {
      this._blogPostData.tags = tags ;
      this.changeDict.tags = tags;
    }
  }

  setBlogPostContent(content: string): void {
    this._blogPostData.content = content;
    this.changeDict.content = content;
  }

  getBlogPostChangeDict(): BlogPostChangeDict {
    return this.changeDict;
  }
}

angular.module('oppia').factory(
  'BlogPostUpdateService',
  downgradeInjectable(BlogPostUpdateService));
