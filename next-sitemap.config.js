// next-sitemap.config.js
const siteUrl = "https://www.tudominio.com"; // Cámbialo por tu dominio real

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 5000,
    // Si tienes rutas dinámicas como /blog/[slug], aquí las agregas:
    // Por ejemplo, si usas un JSON en src/data/posts.json:
    additionalPaths: async (config) => {
        const { resolve } = require("path");
        const fs = require("fs");

        // 1) Lee el JSON con tus posts (o el nombre que le diste)
        const postsFile = resolve(process.cwd(), "src/data/posts.json");
        const raw = fs.readFileSync(postsFile, "utf-8");
        const posts = JSON.parse(raw);

        // 2) Devuelve un arreglo con { loc, lastmod } para cada slug
        return posts.map((post) => ({
            loc: `/blog/${post.slug}`,    // ruta dinámica
            lastmod: post.date,           // fecha de última modificación
        }));
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                // Si quisieras bloquear alguna ruta, por ejemplo:
                // disallow: ["/privado", "/test"],
            },
        ],
        // additionalSitemaps: [`${siteUrl}/otro-sitemap.xml`], // si tienes más sitemaps
    },
};
