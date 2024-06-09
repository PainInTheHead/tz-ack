import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default withVideos(nextConfig);
