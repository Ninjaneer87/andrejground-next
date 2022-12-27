import { NextApiHandler } from "next";
import { SitemapStream } from "sitemap";
import { streamToPromise } from "sitemap/dist/lib/sitemap-stream";
import { Readable } from "stream";
import Blog, { IBlog } from 'models/Blog';
import Project, { IProject } from "models/Project";


export const sitemap: NextApiHandler = async (req, res) => {

  const blogs = await Blog.find<IBlog>({}, { slug: 1, _id: 0 });
  const blogLinks = blogs.map(blog => ({ url: `/blog/${blog.slug}/`, changefreq: "daily", priority: 0.3 }));
  const projects = await Project.find<IProject>({}, { slug: 1, _id: 0 });
  const projectLinks = projects.map(project => ({ url: `/projects/${project.slug}/`, changefreq: "daily", priority: 0.3 }));

  const links = [...blogLinks, ...projectLinks];
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
  const xmlContent = await streamToPromise(Readable.from(links).pipe(stream));
  const xmlString = xmlContent.toString();
  
  res.writeHead(200, { "Content-Type": "application/xml" });
  res.end(xmlString);
}

export default sitemap;