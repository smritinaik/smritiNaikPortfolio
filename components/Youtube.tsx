import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function Youtube() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto mc-10">
      <div className="flex flex-col gap-15 max-w-4xl mx-auto mc-10">
        <h1 className="heading">
          <span className="text-white">From Code to   </span>
          {/* <span className="text-white">Out  </span> */}
          <span className="text-purple">Content</span>
        </h1>
        <h6 className="justify-center items-center pt-5 ">
          <span className="text-white"> Explore my YouTube channel <span className="text-purple">INNOVATIVE STACK</span> - where I share coding tutorials and project</span>
          {/* <span className="text-white">Out  </span> */}
          
        </h6>
      </div>
      <BentoGrid >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

function ItemImage({ src, href }: { src: string; href: string }) {
  return (
    <Link
      target="_blank"
      href={href ?? ""}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden"
    >
      <Image
        className="h-full w-full object-cover"
        width={500}
        height={500}
        src={src ?? ""}
        alt="project-img"
      />
    </Link>
  );

}

const items = [
  {
    title: "Master Next.js like a Pro",
    description: "Dive into hands-on tutorials where I build sleek, modern apps using Next.js & Tailwind.",
    header: <ItemImage src="/ytnext.jpg" href="https://youtu.be/0EQIn9YDIB4?feature=shared" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Top UI Libraries for 2025",
    description: "I break down the latest UI components every developer should know. Make your UIs stand out.",
    header: <ItemImage src="/ytuilib.jpg" href="https://youtu.be/xj0mnHxJNsU?feature=shared" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sleek Animations with Framer Motion",
    description: "Add life to your websites! Learn how I use motion to engage users and enhance UX.",
    header: <ItemImage src="/ytframer.jpg" href="https://youtu.be/bkywA-DAxYw?feature=shared" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Innovative Stack - Youtube Channel",
    description:" Whether you're just starting out or building full stack apps, there’s something here for every dev.",
    header: <ItemImage src="/yt.png" href="https://www.youtube.com/@InnovativeStack-r9r" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Tools for Web Dev in 2025",
    description: "Explore how I use AI tools to speed up development and content creation.",
    header: <ItemImage src="/ytai.jpg" href="https://youtu.be/hwZkk-c3Wjc?feature=shared" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "Empowering Innovations",
  //   description: "Discover projects and ideas that inspire change and elevate everyday life.",
  //   header: <ItemImage src="/innovativ.png" href = ""/>,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Creativity Unleashed",
  //   description: "Discover how innovation and design fuel creative solutions for real-world challenges.",
  //   header: <ItemImage src="/crevti.jpeg" href = ""/>,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];

export default Youtube;