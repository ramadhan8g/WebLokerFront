import Image from "next/image";
import React, { FC } from "react";
import FormSearch from "../FormSearch";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
	return (
		<div className="container flex lg:flex-row z-0 flex-col justify-between items-center w-full  mx-auto ">
			<div className="lg:w-1/2 w-full lg:mr-0 mr-[80]">
				<div className="lg:text-7xl text-5xl font-semibold w-max relative">
					Discover <br /> more than <br />{" "}
					<span className="text-primary">5000+ Jobs</span>
				</div>
				<Image
					src="/images/pattern2.png"
					alt="/images/pattern2.png"
					width={455}
					height={32}
					className="mb-5"
				/>
				<div className="text-muted-foreground text-lg">
					Great platform for the job seeker that searching for <br />
					new career heights and passionate about startups.
				</div>
				<FormSearch />
			</div>
			<div className="block mt-2">
				<Image
					src="/images/hero.png"
					alt="/images/hero.png"
					width={501}
					height={710}
					objectFit="contain"
				/>
			</div>
		</div>
	);
};

export default Hero;
