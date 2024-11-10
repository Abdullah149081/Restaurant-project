"use client";

import Container from "@/components/ui/container";
import assets from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import AboutBanner from "./AboutBanner";

const buttonTabs = [
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Experience",
  },
  {
    id: 3,
    name: "Contact",
  },
];

type TabContent = {
  [key: number]: {
    title: string;
    content: string;
  };
};

const tabContent: TabContent = {
  1: {
    title: "Discover Our Culinary Journey and Passion for Flavor",
    content:
      "Our culinary journey is rooted in a passion for flavor, crafted with a blend of traditional techniques and innovative flair. Every dish we serve is a reflection of dedication, quality ingredients, and a deep understanding of the art of cooking. We strive to create memories with each bite.",
  },
  2: {
    title: "Experience Years of Expertise in Fine Dining Services",
    content:
      "With over a decade of fine dining expertise, our team specializes in delivering outstanding meals and memorable experiences. We focus on precision, service, and quality, ensuring every guest enjoys an exceptional visit. Join us to savor dishes made with culinary mastery and heartfelt care.",
  },
  3: {
    title: "Contact Us for Inquiries, Reservations, or Catering",
    content:
      "We welcome your inquiries, whether it's for a special reservation, a catering event, or general questions. Reach us by phone or visit us to discuss how we can make your occasion unique. Our team is dedicated to providing seamless, personalized assistance for any of your dining needs.",
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Container className="r-my">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-0">
        <AboutBanner />
        {/*  */}
        <div className="flex flex-col items-start justify-start gap-8 lg:w-[624px]">
          <div className="flex items-center justify-start gap-4 self-stretch border-b border-[#b52b1d]">
            {buttonTabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-roboto text-sm font-medium ${
                  activeTab === tab.id
                    ? "bg-[#b52b1d] text-white"
                    : "bg-transparent text-[#333333]"
                }`}
              >
                {tab.name}
              </Button>
            ))}
          </div>

          <div className="flex flex-col gap-[18px]">
            <h2 className="font-bebas_Neue text-[62px] font-bold leading-[62px] text-[#181818]">
              {tabContent[activeTab].title}
            </h2>
            <p className="font-roboto text-base font-normal leading-relaxed text-[#333333]">
              {tabContent[activeTab].content}
            </p>
          </div>

          <div className="flex items-start justify-start gap-8 self-stretch">
            <div>
              <Button className="h-full px-6 py-4">About More</Button>
            </div>
            <div className="flex items-center justify-center gap-2 py-4 pr-6">
              <Image
                src={assets.svgs.callAlt}
                alt="callAlt"
                width={24}
                height={24}
              />
              <div className="text-center font-roboto text-lg font-bold uppercase leading-normal text-[#091325]">
                +88 3426 739 485
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;