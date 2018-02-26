# Hourai Teahouse Website
The Hourai Teahouse informational website and development blog.

## Setup
0. Install Ruby, Jekyll, and Bundler
0. Clone repo.
0. Install Gems via `gem install`

## Building
Just run `bundle exec jekyll build` to build.

Building for production, set `JEKYLL_ENV=prod`: `JEKYLL_ENV=prod bundle exec jekyll build`

For development, the command: `bundle exec jekyll serve --watch --livereload` enables watching 
for file changes and live-reloading 

## Writing Dev Blog Posts
As with any Jekyll blog, posts are stored in the `_posts` folder. Posts are generally written
in Markdown. For more informaiton, see [here](https://jekyllrb.com/docs/posts/).

If writing content that isn't supposed to be published yet, please place the 
draft of the post in `_drafts` and build with the `--drafts` flag. More info [here](https://jekyllrb.com/docs/drafts/).
